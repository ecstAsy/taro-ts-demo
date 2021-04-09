import React, { useEffect } from 'react';
import Taro from '@tarojs/taro';
import { connect } from 'react-redux';
import { NoteCardProps } from './index.interface';
import { View, Image } from '@tarojs/components';
import { TripCard } from '../../components';
import { advice, like } from '../../assets';
import './index.scss';

const NoteCard: React.FC<NoteCardProps> = ({
  tripInfo
}) => {

  const { wayPoints } = tripInfo;

  useEffect(() => {
    if (wayPoints) {
      Taro.setNavigationBarTitle({
        title: `第${wayPoints.day}天`
      })
    }
  }, [wayPoints])

  return (
    <View className='page-note-card'>
      <View className='note-card'>
        <TripCard Info={wayPoints} />
        <View className='note-card-like'>
          <Image src={like} />
            喜欢
          </View>
        <View className='note-card-advice'>
          <Image src={advice} />
            评论
          </View>
      </View>
    </View>
  )
}

export default connect(({
  tripInfo
}: any) => ({
  tripInfo
}))(NoteCard)