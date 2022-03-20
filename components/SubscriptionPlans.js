import { Center, Group, Modal } from "@mantine/core";
import { useState } from "react";
import PricingCard from "./PricingCard";

export default function SubscriptionPlans({subscriptions}) {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Center>
        <Group spacing="md">
          {
            subscriptions.map((subscription) => ( <PricingCard key={subscription.id} subscription={subscription} />))
          }
        </Group>
      </Center>
    </>
  )
}
