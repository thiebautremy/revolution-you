import Container from "../Container/Container";
import Video, { VideoProps } from "./Video";
import styles from "./Video.module.scss";

export type VideoContainerType = {
  videos?: VideoProps[];
};

const VideoContainer: React.FC<VideoContainerType> = ({ videos }) => {
  return (
    <Container isBig={false}>
      <div className={styles.videoContainer}>
        {videos?.map((video) => (
          <Video properties={video.properties} key={video.id} />
        ))}
      </div>
    </Container>
  );
};

export default VideoContainer;
