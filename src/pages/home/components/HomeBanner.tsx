import React from 'react';
import { IHomeBanner, ISwiperItem } from '../index.interface';
import { Swiper, SwiperItem, View, Image } from '@tarojs/components';
import { swiperb, swiperd } from '../../../assets';
import './style.scss';

const HomeBanner: React.FC<IHomeBanner> = () => {

  const SwiperArry: ISwiperItem[] = [
    { id: 1, url: swiperb },
    { id: 2, url: swiperd },
  ]

  return (
    <View className='home-banner'>
      <Swiper
        className='home-banner-swiper'
        circular
        autoplay
      >
        {
          SwiperArry.map(item =>
            <SwiperItem key={item.id} className='home-banner-swiper-item'>
              <Image src={item.url} className='home-banner-swiper-item-img' />
            </SwiperItem>
          )
        }
      </Swiper>
    </View>
  )
}

export default HomeBanner