'use client';

import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import { useEffect, useLayoutEffect, useState } from 'react';
import { isPageHasBanner } from '@/configurations/banners';
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

  return window.scrollY >= bannerEl.offsetHeight - headerEl.offsetHeight;
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
    <header id="header" className={clsx('tw-w-full tw-z-20', className)}>
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
            <Logo />
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
          variant="action"
          to="/register"
          target="_blank"
          className="tw-hidden"
        >
          Register
        </Button>
      </nav>
    </header>
  );
};

export default Header;
