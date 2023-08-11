'use client';

import { usePathname } from 'next/navigation';
import { getBannerProps, isPageHasBanner } from '@/configurations/banners';
import Banner from '@/components/Banner';
import HeaderPadding from '@/components/HeaderPadding';

const BannerWrapper = () => {
  const pathname = usePathname();
  const showBanner = isPageHasBanner(pathname);
  const bannerProps = getBannerProps(pathname);

  if (!showBanner) return <HeaderPadding />;

  return <Banner {...bannerProps} />;
};

export default BannerWrapper;
