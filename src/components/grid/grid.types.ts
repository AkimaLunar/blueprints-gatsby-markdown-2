import type { ReactNode } from 'react';

export type GridProps = {
  variant?: 'two-columns' | 'three-columns' | 'small' | 'large';
  children?: ReactNode;
};
