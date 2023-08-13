'use client';

import Cookies from 'js-cookie';
import { createContext, useLayoutEffect, useState } from 'react';
import {
  COOKIE_LOCALE_KEY,
  DEFAULT_LOCALE,
  UNKNOWN_LOCALE,
} from '@/configurations/constants';

export const LocaleContext = createContext({
  locale: UNKNOWN_LOCALE,
  updateLocale: (locale: string) => {},
});

type LocaleProviderProps = {
  children: React.ReactNode;
};

const LocaleProvider = ({ children }: LocaleProviderProps) => {
  const [locale, setLocale] = useState(UNKNOWN_LOCALE);

  useLayoutEffect(() => {
    const userLocale =
      Cookies.get(COOKIE_LOCALE_KEY) ??
      window.navigator.language ??
      DEFAULT_LOCALE;

    const parsedLocale = userLocale.split('-')[0];

    if (parsedLocale !== locale) {
      setLocale(parsedLocale);
    }
  }, [locale]);

  const updateLocale = (locale: string) => {
    Cookies.set(COOKIE_LOCALE_KEY, locale);
    setLocale(locale);
  };

  return (
    <LocaleContext.Provider value={{ locale, updateLocale }}>
      {children}
    </LocaleContext.Provider>
  );
};

export default LocaleProvider;
