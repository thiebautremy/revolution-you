interface FooterProps {
  content: {
    title: string;
    description: string;
  };
}

const Footer: React.FC<FooterProps> = ({ content }) => {
  const { title } = content;
  return (
    <header>
      <h2>{title}</h2>
    </header>
  );
};

export default Footer;
