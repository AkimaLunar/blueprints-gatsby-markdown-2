import { mergeClasses } from '@griffel/react';
import React from 'react';

import {
  useGroupStyles,
  useGroupVerticalAlignmentStyles,
  useHorizontalAlignmentStyles,
} from './group.styles';
import type { GroupProps } from './group.types';

export const Group: React.FC<GroupProps> = ({
  horizontalAlignment,
  verticalAlignment,
  children,
}) => {
  const classes = useGroupStyles();
  const verticalAlignmentClasses = useGroupVerticalAlignmentStyles();
  const horizontalAlignmentClasses = useHorizontalAlignmentStyles();

  const rootClasses = mergeClasses(
    classes.root,
    verticalAlignment && verticalAlignmentClasses[verticalAlignment],
    horizontalAlignment && horizontalAlignmentClasses[horizontalAlignment],
  );

  return <div className={rootClasses}>{children}</div>;
};
