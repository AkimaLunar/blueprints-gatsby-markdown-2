import type { HeadFC, PageProps } from 'gatsby';
import type { FC } from 'react';
import * as React from 'react';

import { HomeLayout } from '../layouts/home';

const IndexPage: FC<PageProps> = () => {
  return <HomeLayout title="Welcome!" leading="Get started with your new docsite." />;
};

export const Head: HeadFC = () => {
  return <title>{`Welcome!`}</title>;
};

export default IndexPage;
