import { tokens } from '@fluentui/react-theme';
import { makeStyles } from '@griffel/react';

export const useGroupVerticalAlignmentStyles = makeStyles({
  top: {
    alignItems: 'top',
  },
  center: {
    alignItems: 'center',
  },
  bottom: {
    alignItems: 'bottom',
  },
});

export const useHorizontalAlignmentStyles = makeStyles({
  left: {
    justifyContent: 'left',
  },
  center: {
    justifyContent: 'center',
  },
  right: {
    justifyContent: 'right',
  },
  ['space-between']: {
    justifyContent: 'space-between',
  },
  ['space-around']: {
    justifyContent: 'space-around',
  },
});

export const useGroupStyles = makeStyles({
  root: {
    display: 'flex',
    columnGap: tokens.spacingVerticalM,
  },
});
