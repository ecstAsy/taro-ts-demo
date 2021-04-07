import React from 'react';
import Taro from '@tarojs/taro';
import { ActionItemProps } from './index.interface';
import { View, Image, Text, Block, Button } from '@tarojs/components';
import { AtIcon } from 'taro-ui';
import './style.scss';

const ActionItem: React.FC<ActionItemProps> = props => {

  const { icon, label, value, AtType, url } = props;

  const handleAction = () => {
    try {
      if (AtType === 'navigator') {
        Taro.navigateTo({
          url
        })
      } else if (AtType === 'phone') {
        Taro.makePhoneCall({
          phoneNumber: value
        })
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <View className='action-item' onClick={handleAction}>
      <View className='action-item-left'>
        <Image className='action-item-label-icon' src={icon} />
        <Text className='action-item-label'>{label}</Text>
      </View>
      <View className='action-item-right'>
        {
          value ?
            <Text className='action-item-value'>{value}</Text>
            :
            <Block>
              {
                AtType === 'contact' ?
                  <Button className='action-contact-btn' openType='contact'>
                    <AtIcon value='chevron-right' size='18' color='#BCBEC1' />
                  </Button>
                  :
                  <AtIcon value='chevron-right' size='18' color='#BCBEC1' />
              }
            </Block>
        }
      </View>
    </View>
  )
}

export default ActionItem