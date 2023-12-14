import 'normalize.css';

import { tokens } from '@fluentui/react-theme';
import { makeStaticStyles } from '@griffel/react';
import {
  useSegoeUI100,
  useSegoeUI200,
  useSegoeUI400,
  useSegoeUI600,
  useSegoeUI700,
} from '@microsoft/arbutus.fonts';
import { ThemeProvider } from '@microsoft/arbutus.theming';
import type { FC, ReactNode } from 'react';
import * as React from 'react';

const useGlobalStyles = makeStaticStyles({
  '*': {
    boxSizing: 'border-box',
  },
  a: {
    textDecoration: 'none',
  },
  body: {
    backgroundColor: tokens.colorNeutralBackground1,
  },
  figure: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
    marginInlineStart: 0,
    marginInlineEnd: 0,
  },
});

export const Theme: FC<{ children: ReactNode }> = ({ children }) => {
  useSegoeUI100();
  useSegoeUI200();
  useSegoeUI400();
  useSegoeUI600();
  useSegoeUI700();
  useGlobalStyles();

  return <ThemeProvider>{children}</ThemeProvider>;
};
