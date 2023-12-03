'use client';

interface Props {
  error?: Error | null;
}

const Fallback = ({ error }: Props) => {
  return <div>에러: {error?.message}</div>;
};

export default Fallback;
