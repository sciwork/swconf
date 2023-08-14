import { Metadata } from 'next';
import Article from '@/components/Article';
import Content from '@/components/Content';

export const metadata: Metadata = {
  title: 'Sponsors',
};

const Page = () => {
  return (
    <Article>
      <Content name="sponsors" />
    </Article>
  );
};

export default Page;
