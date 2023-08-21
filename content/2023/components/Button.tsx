import clsx from 'clsx';
import NextLink, { LinkProps as InternalLinkProps } from 'next/link';
import { HTMLProps, MouseEvent } from 'react';

type Props = {
  variant?: 'default' | 'action';
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
        'tw-px-4 tw-py-2 tablet:tw-text-lg tw-outline-none focus:tw-ring-2',
        {
          'tw-rounded-md tw-text-neutral-950 hover:tw-ring-1 hover:tw-ring-neutral-400':
            variant === 'default',
          'tw-bg-yellow-300 hover:tw-bg-yellow-400 tw-text-black tw-rounded-full':
            variant === 'action',
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
