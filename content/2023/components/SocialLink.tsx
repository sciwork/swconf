import NextLink from 'next/link';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type Props = {
  icon: IconProp;
  to: string;
};

const SocialLink = ({ icon, to }: Props) => {
  return (
    <NextLink
      className="fa-layers fa-fw fa-3x tw-text-white"
      href={to}
      target="_blank"
    >
      <FontAwesomeIcon
        className="tw-text-slate-800 hover:tw-text-sky-600"
        icon={icon}
        transform="shrink-8"
      />
    </NextLink>
  );
};

export default SocialLink;
