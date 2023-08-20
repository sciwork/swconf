import clsx from 'clsx';
import NextLink from 'next/link';

const Link = ({ children, to }: { children: React.ReactNode; to: string }) => {
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
