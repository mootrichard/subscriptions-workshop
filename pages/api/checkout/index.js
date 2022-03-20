import { randUuid } from '@ngneat/falso';
import { Client, Environment } from 'square';
BigInt.prototype.toJSON = function () { return this.toString(); };

const { cardsApi, subscriptionsApi, customersApi } = new Client({
  environment: Environment.Sandbox,
  accessToken: process.env.SQUARE_ACCESS_TOKEN,
})

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { token, customerId, planId } = req.body;
    try {
      const { result: { customer } } = await customersApi.retrieveCustomer(customerId);
      const { result: { card } } = await cardsApi.createCard({
        idempotencyKey: randUuid(),
        sourceId: token.token,
        card: {
          billingAddress: {
            postalCode: token.details?.billing?.postalCode,
          },
          customerId,
          cardholderName: `${customer.givenName} ${customer.familyName}`,
        }
      });
      const { result: { subscription } } = await subscriptionsApi.createSubscription({
        idempotencyKey: randUuid(),
        locationId: 'L07J7ZKVTY9QM',
        customerId,
        cardId: card.id,
        planId,
      })
      res.status(200).json({
        subscription,
        card,
      })
    } catch (e) {
      console.error(e)
      res.status(500).json(e)
    }
  }
}
