import type { ElementType, ReactNode } from 'react';

export type GridProps = {
  variant?: 'two-columns' | 'three-columns' | 'small' | 'large';
  children?: ReactNode;
  as?: ElementType;
  className?: string;
};
