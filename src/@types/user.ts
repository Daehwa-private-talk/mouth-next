export interface UserDefaultType {
  id: number;
  name: string;
  profileImage?: string;
  status?: string;
  statusMessage?: string;
  birthDate?: string;
}

export interface FriendType extends UserDefaultType {
  isFavorite: boolean;
}

export type FriendsType = FriendType[];

export interface UsersFriendInfo {
  friends: FriendsType;
  totalFriendsCount: number;
  favoriteFriends?: FriendsType;
  totalFavoriteFriendsCount?: number;
}

export interface UserType extends UserDefaultType {
  token?: {
    accessToken: string;
    refreshToken: string;
  };
  friendsInfo: UsersFriendInfo;
}
