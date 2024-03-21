export type TableListProps = {
  data: string[][];
  headers?: string[];
  variant?: 'default' | 'alternating' | 'borderless';
  columnSizing?: (number | string)[];
};
