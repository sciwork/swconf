'use client';

import dynamic from 'next/dynamic';
import { useContext } from 'react';
import { UNKNOWN_LOCALE } from '@/configurations/constants';
import { LocaleContext } from '@/contexts/locale';

type ContentProps = {
  name: string;
};

const Content = ({ name }: ContentProps) => {
  const { locale } = useContext(LocaleContext);

  if (locale === UNKNOWN_LOCALE) {
    return null;
  }

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
