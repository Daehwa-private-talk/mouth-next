import Image from 'next/image';
import initialProfileUrl from '/public/images/initialProfile.svg';

interface Props {
  profileImage?: string;
  width?: number;
  height?: number;
}

export const Avatar = ({
  profileImage = initialProfileUrl,
  width = 200,
  height = 200,
}: Props) => {
  return (
    <picture className="relative inline-flex items-center p-1 text-sm font-medium text-center text-white rounded-full dark:bg-indigo-300">
      <source type="image/webp" srcSet={initialProfileUrl} />
      <Image
        loading="lazy"
        decoding="async"
        src={profileImage}
        alt="profile"
        width={width}
        height={height}
      />
      <div className="absolute flex items-center justify-center w-12 h-12 text-lg rounded-full right-1 top-2 dark:bg-yellow-100 drop-shadow-lg">
        <span className="text-2xl">👍</span>
      </div>
    </picture>
  );
};
