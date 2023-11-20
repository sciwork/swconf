import clsx from 'clsx';
import Image, { StaticImageData } from 'next/image';
import defaultAvatarImg from '@/assets/default-avatar.svg';

type Props = {
  image?: StaticImageData;
  name: string;
  email?: string;
};

const Avatar = ({ image, name, email }: Props) => {
  return (
    <div className="tw-flex tw-flex-col tw-items-center tw-w-72 tw-flex-none">
      <div
        className={clsx('tw-mb-5', {
          'drop-shadow-avatar': !!image,
        })}
      >
        <Image
          className="tw-w-72 tw-h-60 tw-object-cover avatar-mask"
          src={image ?? defaultAvatarImg}
          alt="avatar"
        />
      </div>
      <div className="tw-text-4xl tw-font-yk tw-mb-3 tw-text-gray-950">
        {name}
      </div>
      <div className="tw-text-xl tw-font-yk tw-text-gray-9 tw-min-h-[1.75rem] tw-w-full tw-text-center">
        {email}
      </div>
    </div>
  );
};

export default Avatar;
