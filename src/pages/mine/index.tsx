import React from 'react';
import Taro from '@tarojs/taro';
import { MineProps } from './index.interface';
import { View, Text, Button } from '@tarojs/components'
import { UserInfo, OrderTab, ActionItem } from './components';
import { phone, setting, tg, wechat, question } from '../../assets';
import './index.scss';

const Mine: React.FC<MineProps> = props => {


  const getUserProfile = async () => {
    try {
      const data = await Taro.getUserProfile({ desc: '用于完善会员资料' });
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <View className='index'>
      {/* <Button onClick={() => getUserProfile()}>获取头像昵称</Button> */}
      <UserInfo />
      <OrderTab />
      <ActionItem
        AtType='phone'
        icon={phone}
        label='联系我们'
        value='0512-68028123'
      />
      <ActionItem
        AtType='contact'
        icon={wechat}
        label='客服咨询'
      />
      <ActionItem
        AtType='navigator'
        icon={tg}
        label='客户推广'
        url='/pages/Mine/pages/internal/index'
      />
      <ActionItem
        AtType='navigator'
        icon={setting}
        label='偏好设置'
        url='/pages/Mine/pages/preferences/index'
      />
      <ActionItem
        AtType='navigator'
        icon={question}
        label='常见问题'
        url='/pages/Mine/pages/question/index'
      />
    </View>
  )
}

export default Mine
