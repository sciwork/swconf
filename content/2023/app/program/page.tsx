import { Metadata } from 'next';
import Article from '@/components/Article';
import Content from '@/components/Content';

export const metadata: Metadata = {
  title: 'Programs',
};

const Page = () => {
  return (
    <Article>
      <Content name="program" />
    </Article>
  );
};

export default Page;
