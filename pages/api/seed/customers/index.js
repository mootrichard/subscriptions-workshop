import { generateCustomers } from "../../../../utils/generateData";

export default async function handler(req, res) {
  try {
    const customers = await generateCustomers(parseInt(req.query.number));
    res.status(200).json(customers);
  } catch (e) {
    res.status(500).json(e);
  }
}
