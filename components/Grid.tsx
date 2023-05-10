import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
interface GridProps {
  blok: {
    columns: { _uid: string }[];
  };
}

const Grid: React.FC<GridProps> = ({ blok }) => {
  return (
    <div className="grid" {...storyblokEditable(blok)}>
      {blok.columns.map((nestedBlok) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </div>
  );
};

export default Grid;
