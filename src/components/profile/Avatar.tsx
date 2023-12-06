import initialProfileUrl from '@/assets/images/initialProfile.svg';
import { Colors } from '@/styles/colors';
import styled from 'styled-components';

interface Props {
  profileImage?: string;
  background?: keyof Colors;
  width?: number;
  height?: number;
}

type Picture = Omit<Props, 'profileImage'>;

export const Avatar = ({
  profileImage,
  background,
  width = 300,
  height = 300,
}: Props) => {
  return (
    <picture>
      <source type="image/webp" srcSet={initialProfileUrl} />
      <Image
        loading="lazy"
        sizes="(max-width: 350px)"
        decoding="async"
        src={profileImage}
        alt="profile"
        width={width}
        height={height}
        background={background}
      />
    </picture>
  );
};

const Image = styled('img')<Picture>`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  border: 8px solid
    ${({ theme, background }) =>
      background ? theme.colors?.[background] : theme.colors?.yellow};
  background-color: ${({ theme, background }) =>
    background ? theme.colors?.[background] : theme.colors?.yellow};
  border-radius: 50%;
`;
