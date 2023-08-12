import { Metadata } from 'next';
import Article from '@/components/Article';
import Content from '@/components/Content';

export const metadata: Metadata = {
  title: 'Venue',
};

const Page = () => {
  return (
    <Article>
      <Content name="venue" />
    </Article>
  );
};

export default Page;
