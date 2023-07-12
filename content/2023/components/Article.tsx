import Container from '@/components/Container';

type Props = {
  children: React.ReactNode;
};

const Article = ({ children }: Props) => {
  return (
    <Container
      as="article"
      className="tw-prose tw-max-w-none tw-py-10 prose-headings:tw-font-yk"
    >
      {children}
    </Container>
  );
};

export default Article;
