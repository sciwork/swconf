'use client';

import { useContext } from 'react';
import { faDiscord, faTwitter, faSquareFacebook } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Container from '@/components/Container';
import SocialLink from '@/components/SocialLink';
import { LocaleContext } from '@/contexts/locale';

const Footer = () => {
  const { updateLocale } = useContext(LocaleContext);
  return (
    <footer className="tw-w-full">
      <Container className="tw-bg-gray-200 tw-py-10 tw-border-t-8 tw-border-red-700 tw-shadow-inner tw-shadow-2xl tw-shadow-gray-400">
        <div className="tw-font-yk tw-grid tw-grid-cols-4 desktop:tw-grid-cols-8 tw-gap-4 tw-items-center">
          <div className="tw-text-2xl tw-col-span-1">Follow us</div>
          <div className="tw-col-span-3 tw--ml-4">
            <SocialLink
              icon={faTwitter}
              to="https://twitter.com/intent/tweet?screen_name=sciwork&ref_src=twsrc%5Etfw"
            />
            <SocialLink icon={faDiscord} to="https://discord.gg/6MAkFrD" />
            <SocialLink icon={faSquareFacebook} to="https://www.facebook.com/sciworkdev" />
          </div>
          <div className="tw-text-2xl tw-col-span-1">Contact us</div>
          <div className="tw-col-span-3 tw-text-lg">
            <a
              className="hover:tw-cursor-pointer hover:tw-text-sky-600"
              target="_blank"
              href="mailto:contact@sciwork.dev"
            >
              contact@sciwork.dev
            </a>
          </div>
          <div className="tw-text-2xl tw-col-span-1">Languages</div>
          <div className="tw-col-span-3 tw-text-lg">
            <p
              className="tw-inline-block hover:tw-cursor-pointer hover:tw-text-sky-600 tw-pr-4 desktop:tw-pr-8"
              onClick={() => updateLocale('en')}
            >
              English
            </p>
            <p
              className="tw-inline-block hover:tw-cursor-pointer hover:tw-text-sky-600"
              onClick={() => updateLocale('zh')}
            >
              Chinese
            </p>
          </div>
        </div>
        <div className="desktop:tw-text-right desktop:tw-py-8 tw-pt-16">
          Website is powered by Next.js.
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
