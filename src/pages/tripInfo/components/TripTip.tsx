import React from 'react';
import { TripTipProps } from '../index.interface';
import { View, Image, Text } from '@tarojs/components';
import './style.scss';

const TripTip: React.FC<TripTipProps> = ({
  Info
}) => {
  return (
    <View className='trip-tip'>
      <Image src={Info?.user?.avatar_l} />
      <View className='trip-tip-info'>
        <View className='trip-tip-info-title'>{Info?.name}</View>
        <View className='trip-tip-info-detail'>
          <Text>{Info?.first_day}</Text>
          <Text>{Info?.recommendations}人喜欢</Text>
          <Text>{Info?.view_count}次浏览</Text>
        </View>
      </View>
    </View>
  )
}

export default TripTip