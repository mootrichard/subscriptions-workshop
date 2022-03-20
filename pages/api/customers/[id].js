import { Client, Environment } from 'square';
BigInt.prototype.toJSON = function () { return this.toString(); };

const { customersApi } = new Client({
  environment: Environment.Sandbox,
  accessToken: process.env.SQUARE_ACCESS_TOKEN,
})

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const { result: { customer } } = await customersApi.retrieveCustomer(req.query.id);
    res.status(200).json(customer)
  }
  if (req.method === 'PUT') {
    const { result: { customer } } = await customersApi.updateCustomer(req.query.id, req.body);
    res.status(200).json(customer)
  }
  if (req.method === 'DELETE') {
    const { result } = await customersApi.deleteCustomer(req.query.id);
    res.status(200).json(result)
  }
}
