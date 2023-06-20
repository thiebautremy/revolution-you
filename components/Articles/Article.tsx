import { useAppContext } from "@/context/appContext";

export type ArticleProps = {
  id?: string;
  key?: string;
  created_time?: any;
  properties: ArticleType;
};

export type ArticleType = {
  title_en: { rich_text: { plain_text: string }[] };
  title_fr: { title: { plain_text: string }[] };
  content_fr: { rich_text: { plain_text: string }[] };
  content_en: { rich_text: { plain_text: string }[] };
  url: {
    url: string;
  };
  tag: { multi_select: { color: string; name: string; id: string }[] };
};

const Article: React.FC<ArticleProps> = ({ properties }) => {
  const { appContext } = useAppContext();
  const titleFr = properties.title_fr.title[0].plain_text;
  const titleEn = properties.title_en.rich_text[0].plain_text;
  const contentFr = properties.content_fr.rich_text[0].plain_text;
  const contentEn = properties.content_en.rich_text[0].plain_text;
  return (
    <div>
      <div>
        <h2>{appContext.language === "fr" ? titleFr : titleEn}</h2>
        <h3>{appContext.language === "fr" ? contentFr : contentEn}</h3>
      </div>
    </div>
  );
};

export default Article;
