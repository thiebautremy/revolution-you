import ReactPlayer from "react-player/youtube";
import Tags from "./Tags";
import { useAppContext } from "@/context/appContext";

export type VideoProps = {
  id?: string;
  key?: string;
  created_time?: any;
  properties: VideoType;
};

export type VideoType = {
  title_en: { rich_text: { plain_text: string }[] };
  title_fr: { title: { plain_text: string }[] };
  description_fr: { rich_text: { plain_text: string }[] };
  description_en: { rich_text: { plain_text: string }[] };
  url: {
    url: string;
  };
  tag: { multi_select: { color: string; name: string; id: string }[] };
};

const Video: React.FC<VideoProps> = ({ properties }) => {
  const { appContext } = useAppContext();
  const tag = properties.tag;
  const titleFr = properties.title_fr.title[0].plain_text;
  const titleEn = properties.title_en.rich_text[0].plain_text;
  const descriptionFr = properties.description_fr.rich_text[0].plain_text;
  const descriptionEn = properties.description_en.rich_text[0].plain_text;
  return (
    <div>
      <div>
        <h2>{appContext.language === "fr" ? titleFr : titleEn}</h2>
        <h3>{appContext.language === "fr" ? descriptionFr : descriptionEn}</h3>
        <Tags tagList={tag.multi_select} />
      </div>
      <ReactPlayer url={properties.url.url} />
    </div>
  );
};

export default Video;
