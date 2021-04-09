import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { UserProps } from './index.interface';
import { View, Text, Block } from '@tarojs/components';
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

  const handleClick = info => {

  }

  useEffect(() => {
    getUserInfo();
  }, [])

  return (
    <View className='page-user'>
      <UserInfo Info={userInfo} />
      <View className='page-user-trip-title'>
        <Text>NOTE</Text>
        <Text>{trips.length}</Text>
      </View>
      <Block>
        {
          trips.map((item, i) =>
            <CardItem
              key={i}
              Info={item}
              type='v_user'
              onClick={() => handleClick(item)}
            />)
        }
      </Block>
    </View>
  )
}

export default connect(({
  user
}: any) => ({
  user
}))(User)