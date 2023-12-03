import { MIDDLE_URL } from '@/constants/path/common';

const getFullPath = (path: string) => {
  return MIDDLE_URL + path;
};

export { getFullPath };
