import React from 'react';
import { LoadMorenProps } from '../index.interface';
import { View } from '@tarojs/components';
import './index.scss';

const LoadMore: React.FC<LoadMorenProps> = ({ loading }) => {
  return (
    <View className={loading ? 'weui-loadmore' : 'weui-loadmore hide'}>
      <View className='weui-loading' />
      <View className='weui-loadmore__tips'>正在加载</View>
    </View>
  )
}

export default LoadMore