import { Metadata } from 'next';
import Article from '@/components/Article';
import Content from '@/components/Content';

export const metadata: Metadata = {
  title: 'CFP',
};

const Page = () => {
  return (
    <Article>
      <Content name="cfp" />
    </Article>
  );
};

export default Page;
