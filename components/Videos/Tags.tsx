import styles from "./Video.module.scss";

interface TagsProps {
  tagList: string[];
}

type TagProps = {
  tag: string;
};

const Tags: React.FC<TagsProps> = ({ tagList }) => {
  return (
    <div className={styles.tagsContainer}>
      {tagList?.map((tag) => (
        <Tag key={tag} tag={tag} />
      ))}
    </div>
  );
};

const Tag: React.FC<TagProps> = ({ tag }) => {
  return (
    <div className={styles.tag}>
      <span>{tag}</span>
    </div>
  );
};

export default Tags;
