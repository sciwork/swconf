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
      className="tw-relative tw-mt-20 tw-flex tw-flex-col tw-items-center tw-justify-center tablet:tw-flex-row"
    >
      <Image
        className="tw-w-full tablet:tw-max-h-screen"
        src={bkgImg}
        alt="banner"
      />
      <div className="tw-prose-lg tw-absolute tw-text-left tw-font-yk tw-leading-none tw-text-black tablet:tw-mr-80">
        <p className="tw-mb-1 tw-text-4xl tablet:tw-text-6xl">{title}</p>
        <p className="tw-mt-1 tw-whitespace-pre-line tw-text-2xl tablet:tw-text-3xl">
          {subTitle}
        </p>
        {children}
      </div>
    </div>
  );
};

export default Banner;
