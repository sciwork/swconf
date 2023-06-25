import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import Container from '@/components/Container';
import SocialLink from '@/components/SocialLink';

const Footer = () => {
  return (
    <footer className="tw-w-full">
      <Container className="tw-bg-slate-800 tw-py-10 tw-text-white">
        <div className="tw-mb-4 tw-font-yk tw-text-4xl">Contact us</div>
        <div className="tw-space-x-2">
          <SocialLink
            icon={faTwitter}
            to="https://twitter.com/intent/tweet?screen_name=sciwork&ref_src=twsrc%5Etfw"
          />
          <SocialLink icon={faPaperPlane} to="https://t.me/sciwork2020" />
          <SocialLink icon={faEnvelope} to="mailto:contact@sciwork.dev" />
        </div>
      </Container>
      <Container className="tw-bg-slate-950 tw-py-3 tw-text-white">
        Website is powered by Next.js.
      </Container>
    </footer>
  );
};

export default Footer;
