import { Metadata } from "next";
import Article from "@/components/Article";
import Content from "@/contents/venue.mdx";

export const metadata: Metadata = {
  title: "Venue",
};

const Page = () => {
  return (
    <Article>
      <Content />
    </Article>
  );
};

export default Page;
