import { BookmarkTile as BlueprintsBookmarkTile } from '@microsoft/arbutus.bookmark-tile';
import type { FC } from 'react';
import * as React from 'react';

import { makeNavigate } from '../../utilities';
import { useBookmarkTileStyles } from './bookmark-tile.styles';

export type { BookmarkTileComponentProps } from './bookmark-tile.types';

export const BookmarkTile: FC<BookmarkTileComponentProps> = ({
  description,
  isExternal,
  title,
  to,
  icon,
}) => {
  const classes = useBookmarkTileStyles();

  const onClick = makeNavigate({ isExternal, to });

  return (
    <BlueprintsBookmarkTile
      title={title}
      description={description}
      onClick={onClick}
      iconAlt={icon?.alt ?? ''}
      iconSrc={icon?.src}
      className={classes.root}
    />
  );
};
