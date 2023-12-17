export type StrictPropsWithChildren<
  P = unknown,
  T extends React.ReactNode = React.ReactNode,
> = P & {
  children: T;
};

export type PropsWithOptionalChildren<
  P = unknown,
  T extends React.ReactNode = React.ReactNode,
> = P & { children?: T };

export type AvatarSize = 'sm' | 'lg';
