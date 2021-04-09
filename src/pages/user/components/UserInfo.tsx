import React from 'react';
import { UserInfoProps } from '../index.interface';
import { View, Text, Image } from '@tarojs/components';
import './style.scss';

const UserInfo: React.FC<UserInfoProps> = ({
  Info
}) => {
  return (
    <View className='user-info'>
      {
        Info?.cover && <Image src={Info.cover} />
      }
      <View className='user-info-mask' />
      <View className='user-info-detail'>
        <View className='user-info-detail-follower'>
          <Text>{Info?.followers_count}</Text>
          <Text>粉丝</Text>
        </View>
        <View className='user-info-detail-avator'>
          <Image src={Info?.avatar_l} />
        </View>
        <View className='user-info-detail-follow'>
          <Text>{Info?.followings_count}</Text>
          <Text>关注</Text>
        </View>
      </View>
      <View className='user-info-name'>
        {Info?.name}
      </View>
    </View>
  )
}

export default UserInfo