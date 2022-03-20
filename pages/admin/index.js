import { Card, Center, Text } from '@mantine/core';
import AdminLayout from '../../components/AdminLayout';

export default function Home() {

  return (
    <AdminLayout>
      <Center>
        <Card>
          <Text>
            This is the admin page. Click on the left to navigate.
          </Text>
        </Card>
      </Center>
    </AdminLayout>
  )
}
