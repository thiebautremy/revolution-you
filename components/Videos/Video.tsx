import ReactPlayer from "react-player/youtube";
import Tags from "./Tags";
interface VideoProps {
  key: string;
  content: VideoContentType;
  tagList: string[];
}

export type VideoContentType = {
  title: string;
  description: string;
  url: {
    url: string;
    cached_url: string;
  };
};

const Video: React.FC<VideoProps> = ({ content, tagList }) => {
  const { title, description, url } = content;
  return (
    <div>
      <div>
        <h2>{title}</h2>
        <h3>{description}</h3>
        <Tags tagList={tagList} />
      </div>
      <ReactPlayer url={url.cached_url} />
    </div>
  );
};

export default Video;
