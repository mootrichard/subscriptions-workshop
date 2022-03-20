import { Client, Environment } from 'square';
BigInt.prototype.toJSON = function () { return this.toString(); };

const { customersApi } = new Client({
  environment: Environment.Sandbox,
  accessToken: process.env.SQUARE_ACCESS_TOKEN,
})

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const { result: { customers } } = await customersApi.listCustomers();
    res.status(200).json(customers)
  }
  if (req.method === 'POST') {
    const { result: { customer } } = await customersApi.createCustomer(req.body);
    res.status(200).json(customer)
  }
}
