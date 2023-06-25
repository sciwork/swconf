import Article from '@/components/Article';
import Banner from '@/components/Banner';
import Content from '@/contents/home.mdx';

export default function Home() {
  return (
    <>
      <Banner />
      <Article>
        <Content />
      </Article>
    </>
  );
}
