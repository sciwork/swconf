import clsx from 'clsx';
import NextLink, { LinkProps as InternalLinkProps } from 'next/link';
import { HTMLProps, MouseEvent } from 'react';

type Props = {
  variant?: 'default' | 'danger';
  children: React.ReactNode;
  to?: string;
  onClick?: () => void;
};

const Button = ({
  variant = 'default',
  children,
  to,
  onClick,
  ...rest
}: Props & HTMLProps<HTMLButtonElement>) => {
  let Component: any = to ? NextLink : 'button';
  let props:
    | {
        href?: string;
        onClick?: (e: MouseEvent<HTMLButtonElement, MouseEvent>) => void;
      }
    | InternalLinkProps = {};

  if (to) {
    props['href'] = to;
  }

  if (onClick) {
    props['onClick'] = onClick;
  }

  return (
    <Component
      className={clsx(
        'tw-rounded-md tw-px-4 tw-py-2 tw-font-medium tw-outline-none focus:tw-ring-2',
        {
          'tw-text-neutral-950 hover:tw-ring-1 hover:tw-ring-neutral-400':
            variant === 'default',
          'tw-bg-red-600 tw-text-white hover:tw-bg-red-700 focus:tw-ring-red-500 focus:tw-ring-offset-2':
            variant === 'danger',
        },
      )}
      {...props}
      {...rest}
    >
      {children}
    </Component>
  );
};

export default Button;
