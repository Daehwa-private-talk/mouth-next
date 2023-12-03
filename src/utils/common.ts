import { MIDDLE_URL } from '@/constants/path/common';

const getFullPath = (path: string) => {
  return process.env.NEXT_PUBLIC_BASE_URL + MIDDLE_URL + path;
};

export { getFullPath };
