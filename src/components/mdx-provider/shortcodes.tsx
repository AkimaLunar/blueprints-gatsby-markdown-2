import { ComponentPreview } from '@microsoft/arbutus.component-preview';
import { Guidance } from '@microsoft/arbutus.guidance';
import { PropTable } from '@microsoft/arbutus.prop-table';
import { ResourceChip } from '@microsoft/arbutus.resource-chip';
import { Text } from '@microsoft/arbutus.text';
import type { FC, ReactNode } from 'react';
import * as React from 'react';

import { BookmarkTile } from '../bookmark-tile';
import { Grid, Main } from '../grid';
import { Group } from '../group';
import { Link } from '../link';
import { RecommendationTile } from '../recommendation-tile';
import { TableList } from '../table-list';

const LeadingText: FC<{ children?: ReactNode }> = ({ children }) => (
  <Text as="p" block variant="leading">
    {children}
  </Text>
);

export const shortcodes = {
  BookmarkTile,
  ComponentPreview,
  Grid,
  Group,
  Guidance,
  LeadingText,
  Link,
  Main,
  PropTable,
  RecommendationTile,
  ResourceChip,
  TableList,
  Text,
};
