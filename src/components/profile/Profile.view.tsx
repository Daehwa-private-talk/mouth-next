import React from 'react';
import { Avatar } from './Avatar';
import { UserDefaultType } from '@/@types/user';

interface Props {
  userInfo: UserDefaultType;
}

export const Profile = ({ userInfo }: Props) => {
  const { name, profileImage, statusMessage } = userInfo;
  return (
    <React.Fragment>
      <article>
        <Avatar profileImage={profileImage} />
      </article>
      <div>
        <h4>{name}</h4>
        <div>
          <p>{statusMessage}</p>
          <button>편집</button>
        </div>
      </div>
    </React.Fragment>
  );
};

// const ProfileContainer = styled('article')`
//   width: 100%;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   margin: ${({ theme }) => theme.spacing?.(40)} 0
//     ${({ theme }) => theme.spacing?.(20)};
// `;

// const ProfileContentContainer = styled('div')`
//   display: flex;
//   width: 100%;
//   flex-direction: column;
//   align-items: center;
//   color: ${({ theme }) => theme.colors?.white};
// `;

// const Name = styled('h4')`
//   font-size: 32px;
// `;

// const StatusMessageContainer = styled('div')`
//   display: inline-flex;
//   align-items: center;
//   justify-content: center;
//   margin: ${({ theme }) => theme.spacing?.(7)} 0;
//   padding-bottom: ${({ theme }) => theme.spacing?.(8)};
//   border-bottom: 1px solid ${({ theme }) => theme.colors?.white};
//   gap: ${({ theme }) => theme.spacing?.(5)};
//   width: 400px;
// `;

// const StatusMessage = styled('p')`
//   font-size: 18px;
//   width: fit-content;
//   max-width: 340px;
//   word-wrap: break-word;
// `;

// const StatusEditButton = styled('button')`
//   padding: ${({ theme }) => `${theme.spacing?.(2)} ${theme.spacing?.(4)}`};
//   background: none;
//   border: 1px solid ${({ theme }) => theme.colors?.white};
//   width: 50px;
//   height: 26px;
//   border-radius: 13px;
//   color: ${({ theme }) => theme.colors?.white};
//   cursor: pointer;

//   &:hover {
//     transform: translateY(-1px);
//   }

//   &:active {
//     transform: translateY(0.5px);
//   }
// `;
