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
    hasDivider: true,
    linkProps: {
      to: '/about',
    },
  },
  components: {
    title: 'Components',
    hasDivider: true,
    items: {
      component1: {
        id: '/components/component-1/',
        title: 'Component 1',
        hasDivider: false,
        linkProps: {
          to: '/components/component-1',
        },
      },
      component2: {
        id: '/components/component-2/',
        title: 'Component 2',
        hasDivider: false,
        linkProps: {
          to: '/components/component-2',
        },
      },
    },
  },
});
