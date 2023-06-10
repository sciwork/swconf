import { Metadata } from 'next';
import Article from '@/components/Article';
import Content from '@/contents/about.mdx';

export const metadata: Metadata = {
  title: 'About',
};

const Page = () => {
  return (
    <Article>
      <Content />
    </Article>
  );
};

export default Page;
