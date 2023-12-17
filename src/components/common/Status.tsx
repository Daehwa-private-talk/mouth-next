import { AvatarSize, StrictPropsWithChildren } from '@/@types/common';

interface Props extends StrictPropsWithChildren {
  size: AvatarSize;
}

const StatusSize = {
  sm: {
    containerSize: 'w-6 h-6',
    textSize: 'sm',
    position: 'right-0 top-0',
  },
  lg: {
    containerSize: 'w-12 h-12',
    textSize: '2xl',
    position: 'right-2 top-2',
  },
};

export const Status = ({ size, children }: Props) => {
  const { containerSize, textSize, position } = StatusSize[size];

  return (
    <div
      className={`absolute flex items-center justify-center rounded-full ${containerSize} dark:bg-yellow-100 drop-shadow-lg ${position}`}
    >
      <span className={`text-${textSize}`}>{children}</span>
    </div>
  );
};
