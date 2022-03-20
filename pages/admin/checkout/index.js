import { Card, Center, Checkbox, Group, Select } from '@mantine/core';
import { CreditCardInput, SquarePaymentsForm } from 'react-square-web-payments-sdk'
import { useEffect, useState } from 'react';
import AdminLayout from '../../../components/AdminLayout';

export default function Checkout() {
  const [ customers, setCustomers ] = useState([{ label: 'Select customer', value: null }]);
  const [ selectedCustomer, setSelectedCustomer ] = useState(null);
  const [ plans, setPlans ] = useState([{ label: 'Select plan', value: null }]);
  const [ selectedPlan, setSelectedPlan ] = useState(null);
  const [ cardStoreAgree, setCardStoreAgree ] = useState(false);

  useEffect(()=>{
    fetch('/api/customers')
      .then(res => res.json())
      .then(data => setCustomers(data.map(customer => {
        return {
          label: customer.givenName + ' ' + customer.familyName,
          value: customer.id
        }
      })))

    fetch('/api/subscriptions/plans')
      .then(res => res.json())
      .then(data => setPlans(data.map(plan => {
        return {
          label: plan.subscriptionPlanData.name,
          value: plan.id
        }
      })))
  }, [])

  return (
    <AdminLayout>
        <Center>
          <Card
            shadow="sm"
            p="lg"
            style={{
              maxWidth: '400px',
            }}
            withBorder
          >
            <Group spacing="md" direction="column">
              <Select
                placeholder=''
                data={customers}
                onChange={(e) => setSelectedCustomer(e)}
                width='full'
                required
              />
              <Select
                placeholder=''
                data={plans}
                onChange={(e) => setSelectedPlan(e)}
                width='full'
                required
              />
              <Checkbox
                label="I agree to store my card details to process payments for this subscription"
                required
                checked={cardStoreAgree}
                onChange={(e) => setCardStoreAgree(e.currentTarget.checked)}
              />
              {
                cardStoreAgree && <SquarePaymentsForm
                applicationId='sandbox-sq0idb-5gImBDGVg-RC3Wipw0y8Ew'
                locationId='L07J7ZKVTY9QM'
                cardTokenizeResponseReceived={ async (token, buyer) => {
                  const response = await fetch('/api/checkout', {
                    method: 'POST',
                    headers: {
                      'Content-type': 'application/json'
                    },
                    body: JSON.stringify({
                      token,
                      customerId: selectedCustomer,
                      planId: selectedPlan
                    })
                  })
                  console.log(JSON.stringify(token, null, 2))
                  alert(JSON.stringify(await response.json(), null , 2));
                }}
              >
                <CreditCardInput
                  text='Subscribe'
                />
              </SquarePaymentsForm>
      }
            </Group>
          </Card>
        </Center>
    </AdminLayout>
  )
}
