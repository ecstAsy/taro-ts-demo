import React from 'react';
import { TripCardProps } from '../index.interface';
import { View, Text, Image } from '@tarojs/components';
import { time } from '../../assets';
import './index.scss';

const TripCard: React.FC<TripCardProps> = ({
  Info, trip, onClick
}) => {
  return (
    <View
      className={trip ? 'trip-card connection' : 'trip-card'}
      onClick={onClick}
    >
      {
        Info.photo_webtrip && <Image mode='widthFix' src={Info.photo_webtrip} lazyLoad />
      }
      <View className='trip-card-content'>
        {Info.text}
      </View>
      <View className='trip-card-position'>
        <Image src={time} />
        <Text>{Info.local_time}</Text>
      </View>
    </View>
  )
}

export default TripCard