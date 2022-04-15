import createAvatar from '../Utils/createAvatar';
import Avatar, { Props as AvatarProps } from './Avatar';
import { useGetUserInfoQuery } from '../Services/AuthApi';


export default function MyAvatar({ ...other }: AvatarProps) {
  const {data:user} = useGetUserInfoQuery()

  return (
    <Avatar
      src={user?.avatar}
      alt={user?.Name}
      color={user?.avatar ? 'default' : createAvatar(user?.Name!).color}
      {...other}
    >
      {createAvatar(user?.Name!).name}
    </Avatar>
  );
}
