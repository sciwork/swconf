import clsx from 'clsx';
import Image from 'next/image';
import iconImg from '@/assets/android-chrome-192x192.png';

type Props = {
  variant?: 'dark' | 'light';
};

const Logo = ({ variant = 'dark' }: Props) => (
  <a className="tw-mb-1 tw-flex tw-items-center tw-gap-x-2" href="/">
    <Image className="tw-h-8 tw-w-8" src={iconImg} alt="sciwork icon" />
    <div
      className={clsx('tw-font-yk tw-text-5xl', {
        'tw-text-white': variant === 'dark',
        'tw-text-neutral-950': variant === 'light',
      })}
    >
      sciwork 2023
    </div>
  </a>
);

export default Logo;
