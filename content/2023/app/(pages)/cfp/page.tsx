import { Metadata } from 'next';
import Article from '@/components/Article';
import Banner from '@/components/Banner';
import Button from '@/components/Button';
import Content from '@/contents/cfp.mdx';

export const metadata: Metadata = {
  title: 'CFP',
};

const Page = () => {
  return (
    <>
      <Banner title="Call for Proposals">
        <Button
          to="https://pretalx.sciwork.dev/sw23/submit/"
          variant="danger"
          // size="large"
        >
          Submit a Proposal
        </Button>
      </Banner>
      <Article>
        <>
          <Content />
        </>
      </Article>
    </>
  );
};

export default Page;
