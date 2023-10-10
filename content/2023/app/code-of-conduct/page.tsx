import { Metadata } from 'next';
import Article from '@/components/Article';
import Content from '@/components/Content';

export const metadata: Metadata = {
  title: 'Code of Conduct',
};

const Page = () => {
  return (
    <Article>
      <Content name="coc" />
    </Article>
  );
};

export default Page;
