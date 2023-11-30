import type { NavigationItems } from '@microsoft/arbutus.main-navigation';

export const getNavigationContent = (): NavigationItems => ({
  gettingStarted: {
    id: '/getting-started/',
    title: 'Getting Started',
    hasDivider: false,
    linkProps: {
      to: '/getting-started',
    },
  },
  about: {
    id: '/about/',
    title: 'About',
    hasDivider: false,
    linkProps: {
      to: '/about',
    },
  },
});
