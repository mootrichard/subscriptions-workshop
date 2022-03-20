import { AppShell, Button, Center, Header, List, MantineProvider, Navbar, Tabs, Title } from '@mantine/core'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function AdminLayout({ children }) {
  const router = useRouter()

  return (
    <MantineProvider theme={{ fontFamily: "Verdana, sans-serif" }}>
      <AppShell
        fixed
        padding="xs"
        navbar={
          <Navbar width={{ base: 200 }} padding="xs" >
            <Navbar.Section>
              <List listStyleType="none" spacing="sm" type='unordered'>
                <List.Item>
                  <Link href="/admin/customers">
                    <Button
                      fullWidth
                      variant={router.pathname === '/customers' ? 'filled' : 'light'}
                    >Customers</Button>
                  </Link>
                </List.Item>
                <List.Item>
                  <Link href="/admin/plans">
                    <Button
                      fullWidth
                      variant={router.pathname === '/plans' ? 'filled' : 'light'}
                    >Plans</Button>
                  </Link>
                </List.Item>
                <List.Item>
                  <Link href="/admin/checkout">
                    <Button
                      fullWidth
                      variant={router.pathname === '/checkout' ? 'filled' : 'light'}
                    >Checkout</Button>
                  </Link>
                </List.Item>
              </List>
            </Navbar.Section>
          </Navbar>
        }
        header={<Header height={60} padding="xs">{
          <Center>
            <Title>Simple SaaS Admin</Title>
          </Center>
        }</Header>}
      >
        {children}
      </AppShell>
    </MantineProvider>
  )
}
