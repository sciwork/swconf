'use client';

import clsx from 'clsx';
import NextLink from 'next/link';
import { usePathname } from 'next/navigation';

const DrawerLink = ({
  children,
  to,
}: {
  children: React.ReactNode;
  to: string;
}) => {
  const pathname = usePathname();
  const isActive = pathname === to;
  return (
    <NextLink className="tw-block tw-w-full tw-font-yk" href={to}>
      <div
        className={clsx(
          'tw-px-8 tw-py-2 tw-text-2xl tw-font-medium tw-leading-loose tw-text-neutral-900 hover:tw-text-sky-600',
          {
            'tw-text-black': isActive,
          },
        )}
      >
        {children}
      </div>
    </NextLink>
  );
};

export default DrawerLink;
