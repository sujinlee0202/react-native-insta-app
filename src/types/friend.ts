import {ImageSourcePropType} from 'react-native';

export interface Friend {
  name: string;
  accountName?: string;
  profileImage: ImageSourcePropType;
  posts: number | string;
  followers: number | string;
  following: number | string;
  follow: boolean;
}
