import { Metadata } from 'next';
import Article from '@/components/Article';
import Content from '@/components/Content';


export const metadata: Metadata = {
  title: 'Financial Aid',
};

const Page = () => {
  return (
    <Article>
      <Content name="financial-aid" />
    </Article>
  );
};

export default Page;
