import { Button, Group, Input } from "@mantine/core";
import { useState } from "react";
import AdminLayout from "../../../components/AdminLayout";

export default function SeedData() {
  const [customers, setCustomers] = useState([]);
  const [numberOfCustomers, setNumberOfCustomers] = useState(0);
  function createCustomers() {
    fetch(`/api/seed/customers?number=${numberOfCustomers}`,)
      .then(res => res.json())
      .then(data => {
        setCustomers(data);
      })
  }

  return (
    <AdminLayout>
      <h1>Seed Data</h1>
      <Group>
        <Input
          size="xs"
          type="number"
          placeholder="# Customers to create"
          onChange={e => setNumberOfCustomers(e.target.value)}
        />
        <Button onClick={createCustomers}>
          Customers
        </Button>
        <Button>
          Cards
        </Button>
      </Group>
      <Group>
        <pre>{ (customers.length > 0) ? JSON.stringify(customers, null, 2) : ""}</pre>
      </Group>
    </AdminLayout>
  )
}
