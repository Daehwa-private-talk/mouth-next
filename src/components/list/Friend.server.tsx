import { UserDefaultType } from '@/@types/user';
import { Avatar } from '@/components/common/Avatar';

interface Props {
  userInfo: UserDefaultType;
}

export const Friend = ({ userInfo }: Props) => {
  const { name, status, statusMessage, profileImage } = userInfo;

  return (
    <ul role="list" className="divide-y divide-gray-100">
      <li className="flex justify-between py-5 gap-x-6">
        <div className="flex flex-row items-center min-w-0 gap-x-4">
          <Avatar size="sm" profileImage={profileImage} status={status} />
          <div className="flex-auto min-w-0">
            <p className="text-sm font-semibold leading-6 text-gray-900">
              {name}
            </p>
            <p className="mt-1 text-xs leading-5 text-gray-500 truncate">
              {statusMessage}
            </p>
          </div>
        </div>
      </li>
    </ul>
  );
};
