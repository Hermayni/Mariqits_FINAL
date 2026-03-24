import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const event = req.body;
    const eventType = event?.data?.attributes?.type;

    switch (eventType) {
      case 'payment.paid': {
        const paymentId = event.data?.attributes?.data?.id;
        const amount = event.data?.attributes?.data?.attributes?.amount;
        console.log(`[Webhook] Payment paid - ID: ${paymentId}, Amount: ${amount}`);
        break;
      }
      case 'payment.failed': {
        const paymentId = event.data?.attributes?.data?.id;
        console.log(`[Webhook] Payment failed - ID: ${paymentId}`);
        break;
      }
      case 'payment.refunded': {
        const paymentId = event.data?.attributes?.data?.id;
        console.log(`[Webhook] Payment refunded - ID: ${paymentId}`);
        break;
      }
      default:
        console.log(`[Webhook] Unhandled event type: ${eventType}`);
    }

    return res.status(200).json({ received: true });
  } catch (error) {
    console.error('Webhook error:', error);
    return res.status(200).json({ received: true });
  }
}
