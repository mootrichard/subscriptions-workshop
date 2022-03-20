
import { Card, Text, Badge, Button, Group, useMantineTheme, Paper } from '@mantine/core';

export default function PricingCard({ subscription, onClick }) {
  const theme = useMantineTheme();

  const secondaryColor = theme.colorScheme === 'dark'
    ? theme.colors.dark[1]
    : theme.colors.gray[7];

  return (
    <>
      <Card shadow="sm" padding="lg">
        <Paper>
          <Group position="apart" style={{ marginBottom: 5, marginTop: theme.spacing.sm }}>
            <Text weight={500}>Subscription Plan</Text>
            <Badge color="pink" variant="light">
              { subscription.subscriptionPlanData.name }
            </Badge>
          </Group>

          <Text size="sm" style={{ color: secondaryColor, lineHeight: 1.5 }}>
          ${
            subscription.subscriptionPlanData.phases[0].recurringPriceMoney.amount / 100
          } / month USD
          </Text>

          {/* <Button variant='light' color="red" fullWidth style={{ marginTop: 14 }}>
            Edit
          </Button> */}
        </Paper>
      </Card>
    </>
  );
}
