import { Metadata } from 'next';
import FlickrAlbums from './FlickrAlbums';

export const metadata: Metadata = {
  title: 'Album',
};

const Page = () => {
  return <FlickrAlbums />;
};

export default Page;
