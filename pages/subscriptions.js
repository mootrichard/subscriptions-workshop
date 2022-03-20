import { Image, Box, Center } from '@mantine/core';
import MainPageLayout from '../components/MainPageLayout';

export default function Home() {

  return (
    <>
      <MainPageLayout 
        links={[
          {
            label: 'Wines',
            link: '/#',
          },
          {
            label: 'Subscriptions',
            link: '/subscriptions',
          },
          {
            label: 'About',
            link: '/#',
          },
        ]}
      />
    </>
  )
}
