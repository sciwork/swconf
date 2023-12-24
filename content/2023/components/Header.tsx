'use client';

import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import { useEffect, useLayoutEffect, useState } from 'react';
import { isPageHasBanner } from '@/configurations/banners';
import { REGISTER_URL } from '@/configurations/constants';
import routes from '@/configurations/routes';
import Button from '@/components/Button';
import Logo from '@/components/Logo';
import MobileNavigator from '@/components/MobileNavigator';
import NavLink from '@/components/NavLink';

export const Toolbar = () => <div className="tw-h-20 tw-w-full" />;

type Props = {
  className?: string;
};

const isHeaderOverBanner = () => {
  const headerEl = document.getElementById('header');
  const bannerEl = document.getElementById('banner');

  if (!headerEl || !bannerEl) return false;

  return window.scrollY >= bannerEl.offsetHeight;
};

const Header = ({ className }: Props) => {
  const pathname = usePathname();
  const showBanner = isPageHasBanner(pathname);
  const [showDarkBackground, setShowDarkBackground] = useState(false);

  useLayoutEffect(() => {
    if (!showBanner) return;

    setShowDarkBackground(isHeaderOverBanner());
  }, [showBanner]);

  useEffect(() => {
    if (!showBanner) return;

    const handleScroll = () => {
      setShowDarkBackground(isHeaderOverBanner());
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [showBanner]);

  return (
    <header id="header" className={clsx('tw-z-20 tw-w-full', className)}>
      <nav
        className={clsx('tw-flex tw-h-20 tw-items-center tw-px-6', {
          'tw-bg-gray-200': !showBanner || showDarkBackground,
          'tw-bg-transparent': showBanner && !showDarkBackground,
        })}
        role="navigation"
      >
        <div className="tw-grow">
          <div className="desktop:tw-hidden">
            <MobileNavigator />
          </div>
          <div className="tw-hidden tw-pt-2 desktop:tw-block">
            <Logo variant="light" />
          </div>
        </div>
        <div className="tw-hidden tw-items-center tw-gap-x-8 tw-px-6 desktop:tw-flex">
          {routes
            .filter((route) => !route.disabled)
            .map((route) => (
              <NavLink key={route.path} to={route.path}>
                {route.name}
              </NavLink>
            ))}
        </div>
        <Button
          className="tw-hidden"
          variant="action"
          to={REGISTER_URL}
          target="_blank"
        >
          Register
        </Button>
      </nav>
    </header>
  );
};

export default Header;
