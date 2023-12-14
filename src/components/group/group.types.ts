import type { ReactNode } from 'react';

export type GroupProps = {
  verticalAlignment?: 'top' | 'center' | 'bottom';
  horizontalAlignment?: 'left' | 'center' | 'right' | 'space-between' | 'space-around';
  children?: ReactNode;
};
