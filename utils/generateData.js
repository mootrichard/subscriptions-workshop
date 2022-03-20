import { Client, Environment } from 'square';
import {
  randFirstName,
  randLastName,
  randEmail,
  randPhoneNumber,
  randStreetAddress,
  randCity,
  randState,
  randZipCode,
  randPastDate,
  randCountryCode,
  randUuid,
  randCompanyName,
} from '@ngneat/falso';

const client = new Client({
  environment: Environment.Sandbox,
  accessToken: process.env.SQUARE_ACCESS_TOKEN,
});

export async function generateCustomers(numberOfCustomers) {
  const { customersApi } = client;
  let generatedCustomers = [];
  for (let i = 0; i < numberOfCustomers; i++) {
    try {
    const { result: { customer } } = await customersApi.createCustomer({
      givenName: randFirstName(),
      familyName: randLastName(),
      emailAddress: randEmail(),
      companyName: randCompanyName(),
      phoneNumber: randPhoneNumber(),
      address: {
        addressLine1: randStreetAddress(),
        locality: randCity(),
        administrativeDistrictLevel1: randState(),
        postalCode: randZipCode(),
        country: randCountryCode(),
      },
      birthday: randPastDate().toISOString().split('T')[0],
      referenceId: `RANDOM_CUSTOMER`,
      note: `RANDOM_CUSTOMER`,
    });
    console.log(`Customer created: ${JSON.stringify(customer, null, 2)}`);
    generatedCustomers.push(customer);
    } catch (e) {
      console.error(e);
    } 
  }
  return generatedCustomers;
}

export async function generateCards(customersArray) {
  const { cardsApi } = client;
  let generatedCards = [];
  for (let i = 0; i < customersArray.length; i++) {
    const customerId = customersArray[i].id;
    const { result: { card } } = await cardsApi.createCard({
      idempotencyKey: randUuid(),
      sourceId: 'cnon:card-nonce-ok',
      card: {
        customerId,
        billingAddress: {
          ...customer.address
        },
      }
    });
    console.log(`Card created: ${JSON.stringify(card, null, 2)}`);
  }
  return generatedCards;
}
