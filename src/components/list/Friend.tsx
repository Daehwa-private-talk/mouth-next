import { FriendType } from '@/@types/user';
import { Avatar } from '@/components/profile/Avatar';
import { Colors } from '@/styles/colors';
import styled from 'styled-components';

interface Props extends FriendType {
  background?: keyof Colors;
}

export const Friend = ({
  name,
  background,
  profileImage,
  statusMessage,
}: Props) => {
  return (
    <FriendContainer>
      <Avatar
        width={80}
        height={80}
        background={background}
        profileImage={profileImage}
      />
      <FriendInfo>
        <FriendName>{name}</FriendName>
        <StatusMessage>{statusMessage}</StatusMessage>
      </FriendInfo>
    </FriendContainer>
  );
};

const FriendContainer = styled('article')`
  padding: ${({ theme }) => `${theme.spacing?.(5)} ${theme.spacing?.(20)}`};
  gap: ${({ theme }) => theme.spacing?.(12)};
  display: inline-flex;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors?.gray};
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors?.lightGray};
  }
`;

const FriendInfo = styled('div')`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing?.(2)};
`;

const FriendName = styled('h3')`
  color: ${({ theme }) => theme.colors?.dark};
  font-size: 18px;
`;

const StatusMessage = styled('p')`
  font-size: 16px;
  color: ${({ theme }) => theme.colors?.dark};
`;
