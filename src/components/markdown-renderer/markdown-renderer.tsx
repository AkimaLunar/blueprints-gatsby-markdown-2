import { CodeSnippet } from '@microsoft/arbutus.code-snippet';
import { Divider } from '@microsoft/arbutus.divider';
import { MarkList, MarkListItem } from '@microsoft/arbutus.mark-list';
import { OrderedList, OrderedListItem } from '@microsoft/arbutus.ordered-list';
import { Text as ArbutusText } from '@microsoft/arbutus.text';
import { useSpaceStyles } from '@microsoft/arbutus.use-space-styles';
import type { FC } from 'react';
import * as React from 'react';
import Markdown from 'react-markdown';

import { Image } from '../image';
import type { MarkdownRendererProps } from './markdown-renderer.types';

export const MarkdownRenderer: FC<MarkdownRendererProps> = ({ markdown }) => {
  const space = useSpaceStyles();

  if (!markdown) {
    return null;
  }

  return (
    <Markdown
      components={{
        h1: ({ children }) => (
          <ArbutusText as="h1" variant="jumbo" block className={space.mt6}>
            {children}
          </ArbutusText>
        ),
        h2: ({ children }) => (
          <ArbutusText as="h2" variant="title" block className={space.mt6}>
            {children}
          </ArbutusText>
        ),
        h3: ({ children }) => (
          <ArbutusText as="h3" variant="subtitle" block className={space.mt6}>
            {children}
          </ArbutusText>
        ),
        h4: ({ children }) => (
          <ArbutusText as="h4" variant="headline" block className={space.mt6}>
            {children}
          </ArbutusText>
        ),
        h5: ({ children }) => (
          <ArbutusText as="h5" variant="leading" block className={space.mt6}>
            {children}
          </ArbutusText>
        ),
        h6: ({ children }) => (
          <ArbutusText as="h6" variant="caption" block className={space.mt6}>
            {children}
          </ArbutusText>
        ),
        img: ({ src, alt }) => <Image isRounded src={src} alt={alt} />,
        p: ({ children }) => (
          <ArbutusText block as="p" variant="paragraph">
            {children}
          </ArbutusText>
        ),
        strong: ({ children }) => <ArbutusText variant="caption">{children}</ArbutusText>,
        ul: ({ children }) => <MarkList>{children}</MarkList>,
        ol: ({ children }) => <OrderedList>{children}</OrderedList>,
        // @ts-ignore-next-line Value does exist, but not stable. Might break.
        li: ({ children, __index }) => {
          const ordered = Boolean(__index);
          const index = __index ?? 0;

          return ordered ? (
            <OrderedListItem __index={index}>{children}</OrderedListItem>
          ) : (
            <MarkListItem>{children}</MarkListItem>
          );
        },
        hr: () => <Divider />,
        code: ({ children, node, className }) => {
          const match = /language-(\w+)/.exec(className ?? '');
          const isMultiline = node?.position?.start.line !== node?.position?.end.line;

          return isMultiline ? (
            // @ts-ignore-next-line Value does exist in markdown AST.
            <CodeSnippet code={node?.children[0]?.value ?? ''} language={match[1]} />
          ) : (
            <code>
              <ArbutusText variant="code">{children}</ArbutusText>
            </code>
          );
        },
      }}
    >
      {markdown}
    </Markdown>
  );
};
