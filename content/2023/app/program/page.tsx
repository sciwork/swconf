import { Metadata } from 'next';
import Article from '@/components/Article';
import Content from '@/contents/program.mdx';

export const metadata: Metadata = {
  title: 'Programs',
};

const Page = () => {
  return (
    <Article>
      <Content />
    </Article>
  );
};

export default Page;
