import { mergeClasses } from '@griffel/react';
import type { FC } from 'react';
import React from 'react';

import { useGridStyles } from './grid.styles';
import type { GridProps } from './grid.types';

export const Grid: FC<GridProps> = ({
  variant,
  children,
  as: Root = 'div',
  className,
}) => {
  const classes = useGridStyles();

  return (
    <Root className={mergeClasses(classes.root, variant && classes[variant], className)}>
      {children}
    </Root>
  );
};

export const Main: FC<Pick<GridProps, 'children'>> = ({ children }) => (
  <Grid as="main" className={useGridStyles().main}>
    {children}
  </Grid>
);
