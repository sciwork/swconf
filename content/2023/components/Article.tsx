import Container from '@/components/Container';

type Props = {
  children: React.ReactNode;
};

const Article = ({ children }: Props) => {
  return (
    <Container
      as="article"
      className="tw-prose tw-max-w-none tw-my-2 tablet:tw-mt-10 tablet:tw-mb-32 prose-headings:tw-font-yk"
    >
      {children}
    </Container>
  );
};

export default Article;
