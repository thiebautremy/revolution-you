import Container from "../Container/Container";
import Video, { VideoContentType } from "./Video";
import styles from "./Video.module.scss";

export type VideoContainerProps = {
  videos: {
    uuid: string;
    content: VideoContentType;
    tag_list: string[];
  }[];
};

const VideoContainer: React.FC<VideoContainerProps> = ({ videos }) => {
  return (
    <Container isBig={false}>
      <div className={styles.videoContainer}>
        {videos.map((video) => (
          <Video
            content={video.content}
            key={video.uuid}
            tagList={video.tag_list}
          />
        ))}
      </div>
    </Container>
  );
};

export default VideoContainer;
