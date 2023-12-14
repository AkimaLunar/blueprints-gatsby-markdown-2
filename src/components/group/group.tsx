import { mergeClasses } from '@griffel/react';
import React from 'react';

import {
  useGroupHorizontalAlignmentStyles,
  useGroupSpacingStyles,
  useGroupStyles,
  useGroupVerticalAlignmentStyles,
} from './group.styles';
import type { GroupProps } from './group.types';

export const Group: React.FC<GroupProps> = ({
  children,
  horizontalAlignment,
  spacing = 'default',
  verticalAlignment,
}) => {
  const classes = useGroupStyles();
  const verticalAlignmentClasses = useGroupVerticalAlignmentStyles();
  const horizontalAlignmentClasses = useGroupHorizontalAlignmentStyles();
  const spacingClasses = useGroupSpacingStyles();

  const rootClasses = mergeClasses(
    classes.root,
    spacing && spacingClasses[spacing],
    verticalAlignment && verticalAlignmentClasses[verticalAlignment],
    horizontalAlignment && horizontalAlignmentClasses[horizontalAlignment],
  );

  return <div className={rootClasses}>{children}</div>;
};
