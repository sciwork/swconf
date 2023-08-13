import { Metadata } from 'next';
import Article from '@/components/Article';
import Content from '@/components/Content';

export const metadata: Metadata = {
  title: 'About',
};

const Page = () => {
  return (
    <Article>
      <Content name="about" />
    </Article>
  );
};

export default Page;
