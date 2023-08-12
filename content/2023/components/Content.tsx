'use client';

import dynamic from 'next/dynamic';
import { useContext } from 'react';
import { LocaleContext } from '@/contexts/locales';

type ContentProps = {
  name: string;
};

const Content = ({ name }: ContentProps) => {
  const { locale } = useContext(LocaleContext);

  const TranslatedContent: React.ElementType = dynamic(
    () =>
      import(`../contents/${name}_${locale}.mdx`).catch(
        () => import(`../contents/${name}.mdx`),
      ),
    {
      loading: () => <div>Loading...</div>,
    },
  );

  return <TranslatedContent />;
};

export default Content;
