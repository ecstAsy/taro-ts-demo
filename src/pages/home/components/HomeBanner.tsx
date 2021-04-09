import React from 'react';
import { IHomeBanner, ISwiperItem } from '../index.interface';
import { Swiper, SwiperItem, View, Image } from '@tarojs/components';
import './style.scss';

const HomeBanner: React.FC<IHomeBanner> = () => {

  const SwiperArry: ISwiperItem[] = [
    { id: 1, url: 'http://photos.breadtrip.com/covers_2018_04_02_9e667c7b3789fed1c4f7a3fe949729af.gif?imageView/2/w/960/' },
    { id: 2, url: 'http://photos.breadtrip.com/covers_2018_01_04_572da607231945878d223583189101b8.gif?imageView/2/w/960/' },
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