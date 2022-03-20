import { Client, Environment } from 'square';
BigInt.prototype.toJSON = function () { return this.toString(); };

const { catalogApi } = new Client({
  environment: Environment.Sandbox,
  accessToken: process.env.SQUARE_ACCESS_TOKEN,
});

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const { result: { objects } } = await catalogApi.searchCatalogObjects({
      objectTypes: ['SUBSCRIPTION_PLAN'],
    });
    res.status(200).json(objects);
  }
}
