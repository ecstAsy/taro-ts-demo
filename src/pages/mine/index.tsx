import React from 'react';
import { MineProps } from './index.interface';
import { View } from '@tarojs/components'
import { UserInfo, OrderTab, ActionItem } from './components';
import { phone, setting, tg, wechat, question } from '../../assets';
import './index.scss';

const Mine: React.FC<MineProps> = () => {

  return (
    <View className='index'>
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
