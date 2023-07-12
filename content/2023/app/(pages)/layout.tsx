import HeaderPadding from '@/components/HeaderPadding';

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <>
      <HeaderPadding />
      {children}
    </>
  );
}
