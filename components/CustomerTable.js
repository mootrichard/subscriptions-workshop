import { useEffect, useState } from "react"
import { Chip, Chips, Table, Modal, Button, Group } from '@mantine/core'
import Address from "./Address";
import CardInfo from "./CardInfo";
import { EditCustomer } from "./EditCustomer";

export default function CustomerTable() {
  const [customers, setCustomers] = useState([]);
  const [editCustomer, setEditCustomer] = useState(null);
  const [opened, setOpened] = useState(false);

  useEffect(()=>{
    fetch('/api/customers')
      .then(res => res.json())
      .then(data => {
        setCustomers(data);
      })
  }, [])
  return (
    <>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Update Customer"
      >
        <EditCustomer customer={editCustomer} />
      </Modal>
      <Table horizontalSpacing="sm" striped style={{width: '100%', whiteSpace: 'nowrap'}}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Cards</th>
            <th>Company</th>
            <th>Address</th>
            <th>Phone #</th>
            <th>Birthday</th>
            <th>Reference ID</th>
            <th>
              <span>Edit</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {customers.map((person) => (
            <tr key={person.id}>
              <td>
                <div>{`${
                  person.givenName ? person.givenName : ""} ${
                  person.familyName ? person.familyName : ""}`}</div>
              </td>
              <td>
                <div>{person.emailAddress}</div>
              </td>
              <td>
                  { person.cards ? <CardInfo cards={person.cards}/> : <></>}
              </td>
              <td>
                <div>{person.companyName}</div>
              </td>
              <td>
                <div>
                  { person.address ? <Address address={person.address} /> : <></>}
                </div>
              </td>
              <td>
                <div>{person.phoneNumber}</div>
              </td>
              <td>
                <div>
                  {person.birthday ? new Date(person.birthday).toLocaleDateString() : ""}
                </div>
              </td>
              <td>
                <div>{person.referenceId}</div>
              </td>
              <td>
                <Button onClick={()=>{
                  setEditCustomer(person);
                  setOpened(true);
                }}>
                  Edit
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  )
}
