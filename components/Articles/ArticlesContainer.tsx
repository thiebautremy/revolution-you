import Container from "../Container/Container";
import Article, { ArticleProps } from "./Article";
import styles from "./Articles.module.scss";

export type ArticlesContainerType = {
  articles?: ArticleProps[];
};

const ArticlesContainer: React.FC<ArticlesContainerType> = ({ articles }) => {
  return (
    <Container isBig={false}>
      <div className={styles.articlesContainer}>
        {articles?.map((article) => (
          <Article key={article.id} properties={article.properties} />
        ))}
      </div>
    </Container>
  );
};

export default ArticlesContainer;
