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
        'tw-text-base tw-font-medium tw-leading-loose hover:tw-text-red-600',
        {
          'tw-text-red-600': isActive,
          'tw-text-white': !isActive,
        },
      )}
      href={to}
    >
      {children}
    </NextLink>
  );
};

export default Link;
