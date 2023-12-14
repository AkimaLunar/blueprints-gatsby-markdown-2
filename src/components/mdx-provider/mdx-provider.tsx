import { MDXProvider } from '@mdx-js/react';
import { CodeSnippet } from '@microsoft/arbutus.code-snippet';
import { Divider } from '@microsoft/arbutus.divider';
import { MarkList, MarkListItem } from '@microsoft/arbutus.mark-list';
import { OrderedList, OrderedListItem } from '@microsoft/arbutus.ordered-list';
import { Text } from '@microsoft/arbutus.text';
import { useSpaceStyles } from '@microsoft/arbutus.use-space-styles';
import type { FC, ReactNode } from 'react';
import * as React from 'react';

import { Image } from '../image';
import { shortcodes } from './shortcodes';

const BlueprintsH1: FC<{ children?: ReactNode }> = ({ children }) => (
  <Text as="h1" variant="jumbo" block className={useSpaceStyles().mt6}>
    {children}
  </Text>
);
const BlueprintsH2: FC<{ children?: ReactNode }> = ({ children }) => (
  <Text as="h2" variant="title" block className={useSpaceStyles().mt6}>
    {children}
  </Text>
);
const BlueprintsH3: FC<{ children?: ReactNode }> = ({ children }) => (
  <Text as="h3" variant="subtitle" block className={useSpaceStyles().mt6}>
    {children}
  </Text>
);
const BlueprintsH4: FC<{ children?: ReactNode }> = ({ children }) => (
  <Text as="h4" variant="headline" block className={useSpaceStyles().mt6}>
    {children}
  </Text>
);
const BlueprintsH5: FC<{ children?: ReactNode }> = ({ children }) => (
  <Text as="h5" variant="leading" block className={useSpaceStyles().mt6}>
    {children}
  </Text>
);
const BlueprintsH6: FC<{ children?: ReactNode }> = ({ children }) => (
  <Text as="h6" variant="caption" block className={useSpaceStyles().mt6}>
    {children}
  </Text>
);
const BlueprintsP: FC<{ children?: ReactNode }> = ({ children }) => (
  <Text block as="p" variant="paragraph">
    {children}
  </Text>
);
const BlueprintsStrong: FC<{ children?: ReactNode }> = ({ children }) => (
  <Text variant="caption">{children}</Text>
);
const BlueprintsUl: FC<{ children?: ReactNode }> = ({ children }) => (
  <MarkList>{children}</MarkList>
);
const BlueprintsOl: FC<{ children?: ReactNode }> = ({ children }) => (
  <OrderedList>{children}</OrderedList>
);
// @ts-ignore-next-line Value does exist, but not stable. Might break.
const BlueprintsLi: FC<{ children?: ReactNode; __index?: number }> = ({
  children,
  __index,
}) => {
  const ordered = Boolean(__index);
  const index = __index ?? 0;

  return ordered ? (
    <OrderedListItem __index={index}>{children}</OrderedListItem>
  ) : (
    <MarkListItem>{children}</MarkListItem>
  );
};
const BlueprintsHr: FC = () => <Divider className={useSpaceStyles().my6} />;
const BlueprintsCode: FC<{ children?: ReactNode; className?: string }> = (props) => {
  const { children, className } = props;
  const isMultiLine = (children as string).includes('\n');

  const match = /language-(\w+)/.exec(className ?? '');

  return isMultiLine ? (
    <CodeSnippet code={children as string} language={match?.[1] ?? ''} />
  ) : (
    <code>
      <Text variant="code">{children}</Text>
    </code>
  );
};

const BlueprintsImg: FC<{ src?: string; alt?: string }> = ({ src = '', alt = '' }) => (
  <Image isRounded src={src} alt={alt} />
);

const components = {
  h1: BlueprintsH1,
  h2: BlueprintsH2,
  h3: BlueprintsH3,
  h4: BlueprintsH4,
  h5: BlueprintsH5,
  h6: BlueprintsH6,
  p: BlueprintsP,
  strong: BlueprintsStrong,
  ul: BlueprintsUl,
  ol: BlueprintsOl,
  li: BlueprintsLi,
  hr: BlueprintsHr,
  code: BlueprintsCode,
  img: BlueprintsImg,
  ...shortcodes,
};

export const MDXComponentsWrapper: FC<{ children?: ReactNode }> = ({ children }) => (
  <MDXProvider components={components}>{children}</MDXProvider>
);
