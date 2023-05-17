import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import { LanguageType } from "@/types/types";
interface PageProps extends LanguageType {
  blok: {
    body: { _uid: string }[];
  };
  story: any;
  test: string;
}
const Page: React.FC<PageProps> = ({
  blok,
  locales,
  locale,
  defaultLocale,
}) => {
  return (
    <main {...storyblokEditable(blok)}>
      {blok.body.map((nestedBlok) => (
        <StoryblokComponent
          blok={nestedBlok}
          key={nestedBlok._uid}
          locales={locales}
          locale={locale}
          defaultLocale={defaultLocale}
        />
      ))}
    </main>
  );
};

export default Page;
