import Image from 'next/image';
import initialProfileUrl from '/public/images/initialProfile.svg';
import { Status } from './Status';
import { AvatarSize } from '@/@types/common';

interface Props {
  profileImage?: string;
  status?: string;
  size?: AvatarSize;
}

const imageSize = {
  sm: 60,
  lg: 200,
};

export const Avatar = ({
  profileImage = initialProfileUrl,
  status,
  size = 'lg',
}: Props) => {
  return (
    <picture className="relative inline-flex items-center p-1 text-sm font-medium text-center text-white rounded-full dark:bg-indigo-300">
      <source type="image/webp" srcSet={initialProfileUrl} />
      <Image
        loading="lazy"
        decoding="async"
        src={profileImage}
        alt="profile"
        width={imageSize[size]}
        height={imageSize[size]}
      />
      {status && <Status size={size}>{status}</Status>}
    </picture>
  );
};
