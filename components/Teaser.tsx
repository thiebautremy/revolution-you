import { storyblokEditable } from "@storyblok/react";

interface TeaserProps {
  blok: {
    headline: string;
  };
}

const Teaser: React.FC<TeaserProps> = ({ blok }) => {
  return <h2 {...storyblokEditable(blok)}>{blok.headline}</h2>;
};

export default Teaser;
