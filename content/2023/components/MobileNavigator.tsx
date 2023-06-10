'use client';

import { useState } from 'react';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import routes from '@/configurations/routes';
import Button from '@/components/Button';
import Drawer from '@/components/Drawer';
import DrawerLink from '@/components/DrawerLink';
import Logo from '@/components/Logo';

const MobileNavigator = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  return (
    <>
      <Button onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars} />
      </Button>
      <Drawer show={isMenuOpen} onClick={toggleMenu}>
        <div className="tw-border-b tw-px-4 tw-pb-2 tw-pt-3">
          <Logo />
        </div>
        <div>
          {routes
            .filter((route) => !route.disabled)
            .map((route) => (
              <DrawerLink key={route.path} to={route.path}>
                {route.name}
              </DrawerLink>
            ))}
        </div>
      </Drawer>
    </>
  );
};

export default MobileNavigator;
