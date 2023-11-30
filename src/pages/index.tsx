import type { HeadFC, PageProps } from 'gatsby';
import type { FC } from 'react';
import * as React from 'react';

const IndexPage: FC<PageProps> = () => {
  // return <HomeLayout {...homeLayoutProps} />;

  return <h1>Hello</h1>;
};

export const Head: HeadFC = () => {
  return <title>{`Welcome!`}</title>;
};

export default IndexPage;
