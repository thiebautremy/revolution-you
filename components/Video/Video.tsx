import ReactPlayer from "react-player/youtube";

interface VideoProps {
  blok: {
    title: string;
    description: string;
    url: {
      url: string;
      cached_url: string;
    };
  };
}

const Video: React.FC<VideoProps> = ({ blok }) => {
  return (
    <>
      <div>
        <h2>{blok.title}</h2>
        <h3>{blok.description}</h3>
      </div>
      <ReactPlayer url={blok.url.cached_url} />
    </>
  );
};

export default Video;
