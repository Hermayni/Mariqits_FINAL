import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { billing, line_items, orderId } = req.body;

    const secretKey = process.env.PAYMONGO_SECRET_KEY;
    if (!secretKey) {
      return res.status(500).json({ error: 'Payment configuration error' });
    }

    const host = req.headers.host || 'localhost:3000';
    const protocol = host.includes('localhost') ? 'http' : 'https';
    const success_url = `${protocol}://${host}/order-confirmation?session_id={CHECKOUT_SESSION_ID}`;
    const cancel_url = `${protocol}://${host}/checkout`;

    const response = await fetch('https://api.paymongo.com/v1/checkout_sessions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Basic ' + Buffer.from(secretKey + ':').toString('base64'),
      },
      body: JSON.stringify({
        data: {
          attributes: {
            billing: {
              name: billing.name,
              email: billing.email,
              phone: billing.phone,
            },
            line_items: line_items.map((item: { name: string; amount: number; currency: string; quantity: number }) => ({
              name: item.name,
              amount: item.amount,
              currency: 'PHP',
              quantity: item.quantity,
            })),
            payment_method_types: ['qrph'],
            success_url,
            cancel_url,
            description: `Mariqits Order ${orderId || ''}`.trim(),
          },
        },
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('PayMongo error:', JSON.stringify(data));
      return res.status(500).json({
        error: data.errors?.[0]?.detail || 'Failed to create checkout session',
      });
    }

    return res.status(200).json({
      checkout_url: data.data.attributes.checkout_url,
      session_id: data.data.id,
    });
  } catch (error) {
    console.error('Create checkout error:', error);
    return res.status(500).json({ error: 'Failed to create checkout session' });
  }
}
