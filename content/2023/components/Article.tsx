import Container from '@/components/Container';

type Props = {
  children: React.ReactNode;
};

const Article = ({ children }: Props) => {
  return (
    <Container
      as="article"
      className="tw-prose tw-mb-12 tw-mt-2 tw-max-w-none  prose-headings:tw-font-yk tablet:tw-mb-32 tablet:tw-mt-10"
    >
      {children}
    </Container>
  );
};

export default Article;
