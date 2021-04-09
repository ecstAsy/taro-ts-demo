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
        Info?.cover && <Image className='user-info-img' src={Info.cover} />
      }
      <View className='user-info-mask' />
      <View className='user-info-detail'>
        <View className='user-info-detail-follower'>
          <Text className='user-info-detail-follower-num'>{Info?.followers_count}</Text>
          <Text className='user-info-detail-follower-name'>粉丝</Text>
        </View>
        <View className='user-info-detail-avator'>
          <Image className='user-info-detail-avator-img' src={Info?.avatar_l} />
        </View>
        <View className='user-info-detail-follow'>
          <Text className='user-info-detail-follower-num'>{Info?.followings_count}</Text>
          <Text className='user-info-detail-follower-name'>关注</Text>
        </View>
      </View>
      <View className='user-info-name'>
        {Info?.name}
      </View>
    </View>
  )
}

export default UserInfo