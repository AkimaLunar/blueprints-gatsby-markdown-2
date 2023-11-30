import { Divider } from '@microsoft/arbutus.divider';
import { Text } from '@microsoft/arbutus.text';
import { useSpaceStyles } from '@microsoft/arbutus.use-space-styles';
import type { FC } from 'react';
import * as React from 'react';

import { Link } from '../link';
import { useFooterStyles } from './footer.styles';

const getFooterContent = () => ({
  primaryLinks: [
    { to: '/getting-started', isExternal: false, text: 'Getting started' },
    { to: '/about', isExternal: false, text: 'About' },
  ],
  secondaryLinks: [
    { to: 'https://microsoft.github.io/blueprints/', isExternal: true, text: 'Fluent' },
    { to: 'https://fluent2.microsoft.design/', isExternal: true, text: 'Blueprints' },
  ],
});

export const Footer: FC = () => {
  const classes = useFooterStyles();
  const space = useSpaceStyles();

  const { primaryLinks, secondaryLinks } = getFooterContent();

  return (
    <div>
      <div className={classes.root}>
        <div className={classes.links}>
          {primaryLinks.map(({ to, text, isExternal }, index) => (
            <Link key={`${to}${index}`} variant="caption" to={to} isExternal={isExternal}>
              {text}
            </Link>
          ))}
        </div>
      </div>
      <Divider className={space.my6} />
      <div className={classes.root}>
        <div className={classes.links}>
          {secondaryLinks.map(({ to, text, isExternal }, index) => (
            <Link
              key={`${to}${index}`}
              variant="secondary"
              to={to}
              isExternal={isExternal}
            >
              {text}
            </Link>
          ))}
          <Text color="secondary">© Microsoft {new Date().getFullYear()}</Text>
        </div>
      </div>
    </div>
  );
};
