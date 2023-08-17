'use client';

import Image from 'next/image';
import bkgImg from '@/assets/sw23_bkg.svg';

export type BannerProps = {
  title: string;
  subTitle?: string;
  children?: React.ReactNode;
};

const Banner = ({ title, subTitle, children }: BannerProps) => {

  return (
    <div
      id="banner"
      className="tw-relative tw-flex tw-flex-col tw-items-center tw-justify-center tablet:tw-flex-row tw-mt-14"
    >
      <Image className="tablet:tw-max-h-200 tw-w-full" src={bkgImg} alt="banner" />
      <div className="tw-absolute tw-prose-lg tw-text-left tw-font-yk tw-text-black tw-leading-none tablet:tw-mr-80">
        <p className="tw-text-4xl tablet:tw-text-6xl tw-mb-1">{title}</p>
        <p className="tw-text-2xl tablet:tw-text-3xl tw-mt-1">{subTitle}</p>
        {children}
      </div>
    </div>
  );
};

export default Banner;
