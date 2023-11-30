import { Divider } from '@microsoft/arbutus.divider';
import { Text } from '@microsoft/arbutus.text';
import { graphql, type HeadFC, type PageProps } from 'gatsby';
import type { FC } from 'react';
import * as React from 'react';

import { MarkdownRenderer } from '../components/markdown-renderer';

type MarkdownPageData = {
  site: {
    siteMetadata: {
      title: string;
      description: string;
    };
  };
  markdownRemark: {
    rawMarkdownBody: string;
    frontmatter: {
      slug;
      title;
    };
  };
};

const MarkdownPage: FC<PageProps<MarkdownPageData>> = ({
  data, // this prop will be injected by the GraphQL query below.
}) => {
  const { markdownRemark } = data; // data.markdownRemark holds your page data
  const { frontmatter, rawMarkdownBody } = markdownRemark;

  return (
    <div>
      <Text as="h1" variant="jumbo">
        {frontmatter.title}
      </Text>
      <Divider />
      <MarkdownRenderer markdown={rawMarkdownBody} />
    </div>
  );
};

export const Head: HeadFC<MarkdownPageData> = ({ data }) => {
  const { title: site } = data.site?.siteMetadata ?? '';

  return <title>{`${site} | Welcome!`}</title>;
};

export const pageQuery = graphql`
  query ($id: String!) {
    site {
      siteMetadata {
        title
        description
      }
    }
    markdownRemark(id: { eq: $id }) {
      rawMarkdownBody
      frontmatter {
        slug
        title
      }
    }
  }
`;

export default MarkdownPage;
