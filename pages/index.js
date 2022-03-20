import { Image, Box, Center } from '@mantine/core';
import { useEffect, useState } from 'react';
import MainPageLayout from '../components/MainPageLayout';

export default function Home() {
  const [windowHeight, setWindowHeight] = useState(null);
  useEffect(()=>{
    setWindowHeight(window.innerHeight);
  }, [])
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
      <Image
        fit='cover'
        width='100%'
        height={windowHeight ? windowHeight - 56 : 0}
        alt='Glass of Wine'
        src="https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
      />
    </>
  )
}
