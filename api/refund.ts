import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { payment_id, amount, reason } = req.body;

    if (!payment_id || !amount) {
      return res.status(400).json({ error: 'payment_id and amount are required' });
    }

    const secretKey = process.env.PAYMONGO_SECRET_KEY;
    if (!secretKey) {
      return res.status(500).json({ error: 'Payment configuration error' });
    }

    const response = await fetch('https://api.paymongo.com/v1/refunds', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Basic ' + Buffer.from(secretKey + ':').toString('base64'),
      },
      body: JSON.stringify({
        data: {
          attributes: {
            amount,
            payment_id,
            reason: reason || 'requested_by_customer',
          },
        },
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('PayMongo refund error:', JSON.stringify(data));
      return res.status(500).json({
        error: data.errors?.[0]?.detail || 'Refund failed',
      });
    }

    return res.status(200).json({
      success: true,
      refund: data.data,
    });
  } catch (error) {
    console.error('Refund error:', error);
    return res.status(500).json({ error: 'Failed to process refund' });
  }
}
