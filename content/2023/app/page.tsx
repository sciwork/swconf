import Article from '@/components/Article';
import Content from '@/contents/home.mdx';

export default function Home() {
  return (
    <Article>
      <div className="tw-flex tw-items-center tw-justify-center">
        <p className="tw-font-yk tw-text-3xl tw-text-black tw-border-b-2 tw-border-sky-600 tablet:tw-tracking-widest">
          science, code, and open source
        </p>
      </div>
      <Content />
    </Article>
  );
}
