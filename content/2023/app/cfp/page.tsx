import { Metadata } from 'next';
import Article from '@/components/Article';
import Content from '@/contents/cfp.mdx';

export const metadata: Metadata = {
  title: 'CFP',
};

const Page = () => {
  return (
    <Article>
      <Content />
    </Article>
  );
};

export default Page;
