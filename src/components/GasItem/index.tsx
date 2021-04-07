import React from 'react';
import { View, Text, Image, Block } from '@tarojs/components';
import { GasItemProps, RemarkProps } from './index.interface';
import { position, cost } from '../../assets';
import { getBalance, toDecimal2 } from '../../utils/util';
import './index.scss';

const GasItem: React.FC<GasItemProps> = ({
  name, address, unitPrice, worldPrice, remarks, range, onClick
}) => {
  return (
    <View className='gas-item' onClick={onClick}>
      <View className='gas-name font-medium'>{name}</View>
      <View className='gas-address'>
        <Text className='txt'>{address}</Text>
      </View>
      <View className='gas-salary'>
        <View className='current-price'>
          <View className='current font-medium'>
            <Text className='unit'>￥</Text>
            {unitPrice}
          </View>
        </View>
        <View className='toast-price'>
          <View className='toast-price-box'>
            <View className='cost-price'>
              <View className='cost-icon'>
                <Image className='cost-icon-img' src={cost} />
              </View>
              <View className='cost-txt'>直降￥{getBalance(worldPrice, unitPrice)}</View>
            </View>
            <View className='old-price'>
              国标价￥{worldPrice}
            </View>
          </View>
        </View>
      </View>
      <View className='gas-info'>
        {
          remarks.map((item: RemarkProps) =>
            <Block key={item.id}>
              <View className='sale-item'>
                <View className='sale-title'>{item.type}</View>
                <View className='sale-txt'>{item.remark}</View>
              </View>
            </Block>
          )
        }
      </View>
      <View className='gas-distance' onClick={e => { e.stopPropagation(); }}>
        <View className='distance-icon'>
          <Image className='img' src={position} />
        </View>
        <View className='distance-num'>
          {toDecimal2(range)}km
        </View>
      </View>
    </View>
  )
}

export default GasItem