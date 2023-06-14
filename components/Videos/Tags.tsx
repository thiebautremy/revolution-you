import styles from "./Video.module.scss";

export type TagsType = {
  tagList: { color: string; name: string; id: string }[];
};

type TagProps = {
  tag: string;
  color: string;
};

const Tags: React.FC<TagsType> = ({ tagList }) => {
  return (
    <div className={styles.tagsContainer}>
      {tagList?.map((tag) => (
        <Tag key={tag.id} tag={tag.name} color={tag.color} />
      ))}
    </div>
  );
};

const Tag: React.FC<TagProps> = ({ tag, color }) => {
  return (
    <div className={styles.tag} style={{ backgroundColor: `${color}` }}>
      <span>{tag}</span>
    </div>
  );
};

export default Tags;
