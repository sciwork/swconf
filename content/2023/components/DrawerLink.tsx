import NextLink from 'next/link';

const DrawerLink = ({
  children,
  to,
}: {
  children: React.ReactNode;
  to: string;
}) => {
  return (
    <NextLink className="tw-block tw-w-full tw-font-yk" href={to}>
      <div className="tw-px-8 tw-py-2 tw-text-2xl tw-font-medium tw-leading-loose tw-text-black hover:tw-text-sky-600">
        {children}
      </div>
    </NextLink>
  );
};

export default DrawerLink;
