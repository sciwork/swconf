import routes from '@/configurations/routes';
import Button from '@/components/Button';
import Logo from '@/components/Logo';
import MobileNavigator from '@/components/MobileNavigator';
import NavLink from '@/components/NavLink';

export const Toolbar = () => <div className="tw-h-20 tw-w-full" />;

type Props = {
  className?: string;
};

const Header = ({ className }: Props) => {
  return (
    <header className={className}>
      <nav
        className="tw-flex tw-h-20 tw-items-center tw-bg-black tw-px-6"
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
          variant="danger"
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
