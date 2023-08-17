'use client';

import { useContext } from 'react';
import { faDiscord, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Container from '@/components/Container';
import SocialLink from '@/components/SocialLink';
import { LocaleContext } from '@/contexts/locale';

const Footer = () => {
  const { updateLocale } = useContext(LocaleContext);
  return (
    <footer className="tw-w-full tw-mt-24">
      <Container className="tw-bg-slate-800 tw-py-10 tw-text-white">
        <div className="tw-grid tw-grid-cols-1 tw-grid-rows-2 tablet:tw-grid-cols-2 tablet:tw-grid-rows-1 tw-gap-4">
          <div>
            <div className="tw-mb-4 tw-font-yk tw-text-4xl">Contact us</div>
            <div className="tw-space-x-2">
              <SocialLink
                icon={faTwitter}
                to="https://twitter.com/intent/tweet?screen_name=sciwork&ref_src=twsrc%5Etfw"
              />
              <SocialLink icon={faDiscord} to="https://discord.gg/6MAkFrD" />
              <SocialLink icon={faEnvelope} to="mailto:contact@sciwork.dev" />
            </div>
          </div>
          <div>
            <div className="tw-mb-4 tw-font-yk tw-text-4xl">Languages</div>
            <ul>
              <li
                className="hover:tw-cursor-pointer hover:tw-text-red-600"
                onClick={() => updateLocale('en')}
              >
                English
              </li>
              <li
                className="hover:tw-cursor-pointer hover:tw-text-red-600"
                onClick={() => updateLocale('zh')}
              >
                Chinese
              </li>
            </ul>
          </div>
        </div>
      </Container>
      <Container className="tw-bg-slate-950 tw-py-3 tw-text-white">
        Website is powered by Next.js.
      </Container>
    </footer>
  );
};

export default Footer;
