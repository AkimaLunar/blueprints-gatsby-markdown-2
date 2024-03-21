export type BookmarkTileComponentProps = {
  description: string;
  title: string;
  isExternal: boolean;
  to: string;
  icon?: {
    alt: string;
    src: string;
  };
};
