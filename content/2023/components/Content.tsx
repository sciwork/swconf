'use client';

import dynamic from 'next/dynamic';
import { useContext } from 'react';
import { DEFAULT_LOCALE, UNKNOWN_LOCALE } from '@/configurations/constants';
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
    () => {
      const defaultFilename = `${name}.mdx`;
      const filename =
        locale === DEFAULT_LOCALE ? defaultFilename : `${name}_${locale}.mdx`;
      return import(`../contents/${filename}`).catch(
        () => import(`../contents/${defaultFilename}`),
      );
    },
    {
      loading: () => <div>Loading...</div>,
    },
  );

  return <TranslatedContent />;
};

export default Content;
