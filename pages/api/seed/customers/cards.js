import { generateCards } from "../../../../utils/generateData";

export default async function handler(req, res) {
  try {
    const cards = await generateCards(5);
    res.status(200).json(cards);
  } catch (e) {
    res.status(500).json(e);
  }
}
