import Image from 'next/image';
import { FC } from 'react';
import iconImg from '@/assets/android-chrome-192x192.png';

const Logo: FC = () => (
  <a className="tw-mb-1 tw-flex tw-items-center tw-gap-x-2" href="/">
    <Image className="tw-h-8 tw-w-8" src={iconImg} alt="sciwork icon" />
    <div className="tw-font-yk tw-text-5xl tw-text-neutral-950">sciwork</div>
  </a>
);

export default Logo;
