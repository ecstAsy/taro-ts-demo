import React from 'react';
import { CardItemProps } from '../index.interface';
import { View, Image, Text } from '@tarojs/components';
import './style.scss';

const CardItem: React.FC<CardItemProps> = ({ Info, type, onClick }) => {

  const getTime = (time: string): string => new Date(parseInt(time) * 1000).toLocaleString().replace(/:\d{1,2}$/, ' ')

  return (
    <View className='card-item' onClick={onClick}>
      <Image src={Info.cover_image_w640} />
      <View className='card-item-info'>
        <Text className='card-item-info-title'>{Info.name}</Text>
        <View className='card-item-info-detail'>
          <View className='card-item-info-detail-intro'>
            <Text>{getTime(Info.date_added)}</Text>
            <Text>{Info.day_count}天</Text>
            {
              type === 'v_home' && <Text>{Info.view_count}次浏览</Text>
            }
          </View>
          <View className='card-item-info-detail-place'>{Info.popular_place_str}</View>
        </View>
        {
          type === 'v_home' ?
            <View className='card-item-info-auther'>
              <Image src={Info.user.avatar_l} />
              <Text>by {Info.user.name}</Text>
            </View>
            :
            <View className='card-item-info-auther'>
              <Text>{Info.view_count}次浏览</Text>/
                  <Text>{Info.liked_count}喜欢</Text>/
                  <Text>{Info.total_comments_count}评论</Text>
            </View>
        }
      </View>
    </View>
  )
}

export default CardItem