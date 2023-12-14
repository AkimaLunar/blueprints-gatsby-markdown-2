import { tokens } from '@fluentui/react-theme';
import { makeStyles } from '@griffel/react';

export const useGridStyles = makeStyles({
  root: {
    display: 'grid',
    rowGap: tokens.spacingVerticalL,
  },
  ['two-columns']: {
    gridTemplateColumns: '1fr 1fr',
    columnGap: tokens.spacingVerticalL,
  },
  ['three-columns']: {
    gridTemplateColumns: '1fr 1fr 1fr',
    columnGap: tokens.spacingVerticalL,
  },
  small: {
    gridTemplateColumns: 'repeat(auto-fill, minmax(16rem, 1fr))',
  },
  large: {
    gridTemplateColumns: 'repeat(auto-fill, minmax(24rem, 1fr))',
  },
  main: {
    marginBottom: tokens.spacingVerticalXXL,
  },
});
