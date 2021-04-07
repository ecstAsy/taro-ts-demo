import React from 'react';
import { OrderTabProps, TabItemProps } from './index.interface';
import { View, Image, Text, Block } from '@tarojs/components';
import { order, all, evaluateFalse, kaipiao } from '../../../assets';
import './style.scss';

const OrderTab: React.FC<OrderTabProps> = () => {

  const Tabs: Array<object> = [
    { id: 'all', name: '全部', url: all },
    { id: 'rate', name: '待评价', url: evaluateFalse },
    { id: 'invoice', name: '开发票', url: kaipiao },
  ]

  const handleTab = id => {
    console.log(id);
  }

  return (
    <View className='order-tab'>
      <View className='order-tab-title'>
        <Image className='order-tab-icon' src={order} />
        <Text className='order-tab-txt font-medium'>加油订单</Text>
      </View>
      <View className='order-tab-items'>
        {
          Tabs.map(({ id, name, url }: TabItemProps) =>
            <Block key={id}>
              <View className='order-tab-item' onClick={() => handleTab(id)}>
                <Image className='order-tab-item-icon' src={url} />
                <View className='order-tab-item-txt'>{name}</View>
              </View>
            </Block>
          )
        }
      </View>
    </View>
  )
}

export default OrderTab