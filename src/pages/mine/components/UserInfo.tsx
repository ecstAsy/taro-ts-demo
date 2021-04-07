import React from 'react';
import Taro from '@tarojs/taro';
import { UserInfoProps, AccountsProps } from './index.interface';
import { View, Image, Button, Block, Text } from '@tarojs/components';
import { avator } from '../../../assets';
import './style.scss';

const UserInfo: React.FC<UserInfoProps> = props => {

  const { unionId, nickName, phone, headImgUrl,
    collectNum = 0, couponNum = 0, coinpurse = 0,
    onGetUserInfo, onGetPhoneNumber
  } = props;

  const swatchStr = str => {
    if (!str) return '****';
    return `${str.substr(0, 3)} **** ${str.substr(7)}`;
  }

  const Accounts: Array<AccountsProps> = [
    { id: 1, name: '收藏', url: '/pages/Mine/pages/favorite/index' },
    { id: 2, name: '优惠券', url: '/pages/Mine/pages/coupon/index' },
    { id: 3, name: '零钱包', url: '/pages/Mine/pages/coinpurse/index' }
  ]

  const AcObj = {
    1: collectNum,
    2: couponNum,
    3: coinpurse
  }

  const handleInfo = ({ url }) => {
    if (unionId && phone) {
      Taro.navigateTo({
        url
      })
    } else {
      Taro.showToast({
        icon: 'none',
        title: '请先绑定手机号！',
        mask: true
      })
    }
  }

  return (
    <View className='user-info'>
      {
        unionId ?
          <View className='user-login-info'>
            <View className='user-info-avator'>
              <Image className='user-info-avator-image' src={headImgUrl} />
            </View>
            <View className='user-info-txt'>
              <View className='user-info-txt-name font-medium'>{nickName}</View>
              {
                phone ?
                  <View className='user-info-txt-phone'>{swatchStr(phone)}</View>
                  :
                  <Button
                    className='user-info-txt-phone-btn'
                    openType='getPhoneNumber'
                    onGetPhoneNumber={onGetPhoneNumber}
                  >
                    绑定手机号
                  </Button>
              }
            </View>
          </View>
          :
          <View className='user-register-info'>
            <View className='user-register-avator'>
              <Image className='user-register-avator-image' src={avator} />
            </View>
            <View className='user-register-txt'>
              <View className='user-register-txt-name font-medium'>未登录</View>
              <Button
                className='user-register-txt-btn'
                openType='getUserInfo'
                onGetUserInfo={onGetUserInfo}
              >
                点击登录
              </Button>
            </View>
          </View>
      }
      <View className='user-account-info'>
        {
          Accounts.map(item =>
            <Block key={item.id}>
              <View
                className='user-account-info-item'
                onClick={() => handleInfo(item)}
              >
                <Text className='user-account-info-item-name'>{item.name}</Text>
                <Text className={unionId ? 'user-account-info-item-value font-medium active' : 'user-account-info-item-value font-medium'}>
                  {item.id === 3 ? <Text className='unit'>￥</Text> : null}
                  {AcObj[item.id]}
                </Text>
              </View>
            </Block>
          )
        }
      </View>
    </View>
  )
}

export default UserInfo