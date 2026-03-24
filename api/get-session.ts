import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { session_id } = req.query;

    if (!session_id || typeof session_id !== 'string') {
      return res.status(400).json({ error: 'session_id is required' });
    }

    const secretKey = process.env.PAYMONGO_SECRET_KEY;
    if (!secretKey) {
      return res.status(500).json({ error: 'Payment configuration error' });
    }

    const response = await fetch(
      `https://api.paymongo.com/v1/checkout_sessions/${session_id}`,
      {
        method: 'GET',
        headers: {
          Authorization: 'Basic ' + Buffer.from(secretKey + ':').toString('base64'),
        },
      }
    );

    const data = await response.json();

    if (!response.ok) {
      console.error('PayMongo session error:', JSON.stringify(data));
      return res.status(500).json({
        error: data.errors?.[0]?.detail || 'Failed to retrieve session',
      });
    }

    const attributes = data.data.attributes;
    const payments = attributes.payments || [];
    const latestPayment = payments.length > 0 ? payments[payments.length - 1] : null;

    const paymentStatus = attributes.payment_intent?.attributes?.status === 'succeeded'
      ? 'paid'
      : latestPayment?.attributes?.status === 'paid'
        ? 'paid'
        : attributes.status === 'expired'
          ? 'failed'
          : 'pending';

    const paymentMethod = latestPayment?.attributes?.source?.type || '';
    const referenceId = latestPayment?.id || '';
    const amount = attributes.line_items?.reduce(
      (sum: number, item: { amount: number; quantity: number }) => sum + item.amount * item.quantity,
      0
    ) || 0;

    return res.status(200).json({
      paymentStatus,
      paymentMethod,
      referenceId,
      amount,
    });
  } catch (error) {
    console.error('Get session error:', error);
    return res.status(500).json({ error: 'Failed to retrieve payment session' });
  }
}
