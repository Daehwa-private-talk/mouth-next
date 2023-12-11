'use client';

interface Props {
  error?: Error | null;
}

export const Fallback = ({ error }: Props) => {
  return <div>에러: {error?.message}</div>;
};
