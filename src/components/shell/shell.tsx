import { Text } from '@fluentui/react-text';
import { Shell as ArbutusShell } from '@microsoft/arbutus.shell';
import { withPrefix } from 'gatsby';
import type { FC } from 'react';
import * as React from 'react';

import { makeNavigate } from '../../utilities';
import { Footer } from '../footer';
import { Header } from '../header';
import { Logo as FluentLogo } from '../logo';
import { Navigation } from '../navigation';
import { useLogoStyles } from './shell.styles';
import type { ShellProps } from './shell.types';

const navigateHome = makeNavigate({ isExternal: false, to: '/' });

const Logo: FC = () => {
  const classes = useLogoStyles();

  return (
    <>
      <FluentLogo className={classes.svg} />
      <Text as="h1" size={700} weight="bold" className={classes.text}>
        Blueprints
      </Text>
    </>
  );
};

export const Shell: FC<ShellProps> = ({ children, location }) => {
  const isHome = location.pathname === withPrefix('/');

  return (
    <ArbutusShell
      footerArea={<Footer />}
      headerArea={<Header />}
      navigationArea={<Navigation />}
      logoAs={Logo}
      closeTrayLabel="Close navigation"
      openTrayLabel="Open navigation"
      isHeroMode={isHome}
      onLogoClick={navigateHome}
    >
      {children}
    </ArbutusShell>
  );
};
