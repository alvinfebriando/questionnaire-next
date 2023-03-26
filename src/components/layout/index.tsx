import { Container } from '@mantine/core';
import { PropsWithChildren } from 'react';
import Header from './header';

export const Layout = ({ children }: PropsWithChildren) => {
  const l = {
    links: [
      {
        link: '/report',
        label: 'Report',
      },
      {
        link: '/survey',
        label: 'Survey',
      },
      {
        link: '/admin',
        label: 'Admin',
      },
    ],
  };

  return (
    <>
      <Header links={l.links} />
      <Container size='md'>
        <main>{children}</main>
      </Container>
    </>
  );
};
