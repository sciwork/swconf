'use client';

import Cookies from 'js-cookie';
import { createContext, useState } from 'react';

const COOKIE_LOCALE_KEY = '__sciwork_locale';
const DEFAULT_LOCALE = 'en';

export const LocaleContext = createContext({
  locale: DEFAULT_LOCALE,
  updateLocale: (locale: string) => {},
});

type LocaleProviderProps = {
  children: React.ReactNode;
};

const LocaleProvider = ({ children }: LocaleProviderProps) => {
  const userLocale =
    Cookies.get(COOKIE_LOCALE_KEY) ??
    window.navigator.language ??
    DEFAULT_LOCALE;

  const [locale, setLocale] = useState(userLocale.split('-')[0]);

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
