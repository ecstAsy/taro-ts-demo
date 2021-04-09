import React, { useEffect } from 'react';
import Taro from '@tarojs/taro';
import { connect } from 'react-redux';
import { UserProps } from './index.interface';
import { View, Text } from '@tarojs/components';
import { UserInfo } from './components';
import { CardItem } from '../../components';
import './index.scss';

const User: React.FC<UserProps> = ({
  dispatch, user
}) => {

  const { userInfo, trips } = user;

  const getUserInfo = async () => {
    const data = await dispatch({
      type: 'user/info'
    })
    if (!data) return false;
    return dispatch({
      type: 'user/save',
      payload: {
        userInfo: data.user_info,
        trips: data.trips
      }
    })
  }

  const handleClick = ({ id, name }) => {
    Taro.navigateTo({
      url: `/pages/tripInfo/index?id=${id}&name=${name}&visit=v_user`
    })
  }

  useEffect(() => {
    getUserInfo();
  }, [])

  return (
    <View className='page-user'>
      <UserInfo Info={userInfo} />
      <View className='page-user-trip-title'>
        <Text className='page-user-trip-title-name'>NOTE</Text>
        <Text className='page-user-trip-title-value'>{trips.length}</Text>
      </View>
      <View className='page-user-trip'>
        {
          trips.map((item, i) =>
            <CardItem
              key={i}
              Info={item}
              type='v_user'
              onClick={() => handleClick(item)}
            />)
        }
      </View>
    </View>
  )
}

export default connect(({
  user
}: any) => ({
  user
}))(User)