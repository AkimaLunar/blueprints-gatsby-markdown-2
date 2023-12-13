import { mergeClasses } from '@griffel/react';
import React from 'react';

import { useGridStyles } from './grid.styles';
import type { GridProps } from './grid.types';

export const Grid: React.FC<GridProps> = ({ variant, children }) => {
  const classes = useGridStyles();

  return (
    <div className={mergeClasses(classes.root, variant && classes[variant])}>
      {children}
    </div>
  );
};
