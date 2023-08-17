'use client';

import clsx from 'clsx';
import NextLink from 'next/link';
import { usePathname } from 'next/navigation';

const Link = ({ children, to }: { children: React.ReactNode; to: string }) => {
  const pathname = usePathname();
  const isActive = pathname === to;
  return (
    <NextLink
      className={clsx(
        'tw-font-yk tw-text-xl tw-leading-loose hover:tw-text-sky-600',
      )}
      href={to}
    >
      {children}
    </NextLink>
  );
};

export default Link;
