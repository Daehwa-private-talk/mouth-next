import React from 'react';
import { Avatar } from './Avatar';
import { UserDefaultType } from '@/@types/user';

interface Props {
  userInfo: UserDefaultType;
}

export const Profile = ({ userInfo }: Props) => {
  const { name, profileImage, statusMessage } = userInfo;
  return (
    <>
      <div className="flex flex-col items-center pb-10">
        <article>
          <Avatar profileImage={profileImage} />
        </article>
        <h5 className="mt-3 mb-1 text-xl font-medium text-gray-900">{name}</h5>

        <div className="flex items-center justify-center gap-2">
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {statusMessage}
          </span>
          <button
            type="button"
            className="px-2 py-1 text-xs font-medium text-center text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-300"
          >
            편집
          </button>
        </div>
      </div>
    </>
  );
};
