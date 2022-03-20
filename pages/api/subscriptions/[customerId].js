import { Client, Environment } from 'square';

const { subscriptionsApi } = new Client({
  environment: Environment.Sandbox,
  accessToken: process.env.SQUARE_ACCESS_TOKEN,
});

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const { result: { subscriptions } } = await subscriptionsApi.searchSubscriptions({
      query: {
        filter: {
          customerIds: [req.params.customerId],
        },
      }
    });
    res.status(200).json(subscriptions);
  }
}
