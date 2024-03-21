import type { RecommendationTileProps as BlueprintsRecommendationTileProps } from '@microsoft/arbutus.recommendation-tile';
import { RecommendationTile as BlueprintsRecommendationTile } from '@microsoft/arbutus.recommendation-tile';
import type { FC } from 'react';
import * as React from 'react';

type RecommendationTileProps = {
  title: string;
  recommendation: 'positive' | 'negative';
  description?: string;
  recommendationsList?: string[];
  image?: {
    alt: string;
    src: string;
  };
};

export const RecommendationTile: FC<RecommendationTileProps> = ({
  title,
  description,
  recommendation,
  recommendationsList,
  image,
}) => {
  const imageProps: Pick<BlueprintsRecommendationTileProps, 'imageAs' | 'imageProps'> =
    {};

  if (image) {
    imageProps.imageAs = 'img';
    imageProps.imageProps = {
      src: image.src,
      alt: image.alt,
    };
  }

  return (
    // @ts-ignore TS incorrectly assumes that imageAs cannot receive undefined, when in fact it is necessary for the
    // component to render the correct variant.
    <BlueprintsRecommendationTile
      title={title}
      description={description}
      recommendation={recommendation}
      recommendationsList={recommendationsList}
      {...imageProps}
    />
  );
};
