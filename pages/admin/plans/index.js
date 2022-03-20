import { useEffect, useState } from 'react'
import AdminLayout from '../../../components/AdminLayout';
import SubscriptionPlans from '../../../components/SubscriptionPlans';

export default function Plans() {
  const [subscriptions, setSubscriptions] =  useState(null);
  const [current, setCurrent] = useState("Customers");
  useEffect(()=>{
    fetch('/api/subscriptions/plans')
      .then(res => res.json())
      .then(data => setSubscriptions(data))
  } , [])

  return (
    <AdminLayout>
        {
          subscriptions && (
            <SubscriptionPlans subscriptions={subscriptions} />
          )
        }
    </AdminLayout>
  )
}
