import {
  TableCell,
  TableList as BlueprintsTableList,
  TableRow,
} from '@microsoft/arbutus.table-list';
import type { FC } from 'react';
import * as React from 'react';

import type { TableListProps } from './table-list.types';

export const TableList: FC<TableListProps> = ({
  data,
  headers,
  variant = 'default',
  columnSizing,
}) => {
  return (
    <BlueprintsTableList variant={variant} {...(columnSizing ? { columnSizing } : {})}>
      {headers && (
        <thead>
          <TableRow>
            {headers.map((text, i) => (
              <TableCell isHeader scope="col" key={i}>
                {text}
              </TableCell>
            ))}
          </TableRow>
        </thead>
      )}
      {data && (
        <tbody>
          {data.map((row, i) => (
            <TableRow key={i}>
              {row?.map((cell, i) => <TableCell key={i}>{cell}</TableCell>)}
            </TableRow>
          ))}
        </tbody>
      )}
    </BlueprintsTableList>
  );
};
