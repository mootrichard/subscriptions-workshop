import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import AdminLayout from '../../components/AdminLayout';

export default function CustomerDetailPage() {
  const { query: { customerId } } = useRouter();
  const [customer, setCustomer] = useState(null);
  useEffect(() => {
    fetch(`/api/customers/${customerId}`)
      .then(res => res.json())
      .then(customer => {
        setCustomer(customer);
      });
  }, [customerId])

  return (
    <AdminLayout>
      { JSON.stringify(customer, null, 2) }
    </AdminLayout>
  )
}
