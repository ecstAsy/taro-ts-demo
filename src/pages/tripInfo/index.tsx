import React, { useEffect } from 'react';
import Taro, { getCurrentInstance } from '@tarojs/taro';
import { connect } from 'react-redux';
import { TripInfoProps } from './index.interface';
import { TripTip } from './components';
import { PageSpace, TripCard } from '../../components';
import { View, Block, Text } from '@tarojs/components'
import './index.scss';

const TripInfo: React.FC<TripInfoProps> = ({
  dispatch, tripInfo
}) => {

  const { hotNoteInfo, userNoteInfo, visit, Loading } = tripInfo;

  const NoteInfo = visit === 'v_user' ? userNoteInfo : hotNoteInfo;

  const getInitInfo = async () => {
    await Taro.showToast({
      title: '加载中...',
      icon: 'loading',
      duration: 1000000
    })
    const { id, name, visit } = getCurrentInstance().router?.params;
    const [data] = await Promise.all([
      dispatch({
        type: 'tripInfo/info',
        payload: {
          id: id
        }
      }),
      Taro.setNavigationBarTitle({
        title: name
      })
    ])
    let params = {};
    switch (visit) {
      case 'v_user':
        params['userNoteInfo'] = data;
        break;
      default:
        params['hotNoteInfo'] = data;
        break;
    };
    return Promise.all([
      dispatch({
        type: 'tripInfo/save',
        payload: {
          ...params,
          visit,
          Loading: false
        }
      }),
      Taro.hideToast()
    ])
  }

  useEffect(() => {
    getInitInfo()
  }, [])

  const handleClick = info =>
    Promise.all([
      dispatch({
        type: 'tripInfo/save',
        payload: {
          wayPoints: info
        }
      }),
      Taro.navigateTo({
        url: '/pages/noteCard/index'
      })
    ])

  return (
    <View className='trip'>
      <View className='trip-info'>
        <PageSpace />
        {
          !Loading && <TripTip Info={NoteInfo} />
        }
        {
          !Loading && NoteInfo?.days?.map((day, i) =>
            <Block key={i}>
              <View className='trip-info-day'>
                <Text className='circle' />
                <Text>{day.date}</Text>
                <Text>第{day.day}天</Text>
              </View>
              {
                day.waypoints.map((item, j) =>
                  <TripCard
                    Info={item}
                    key={j}
                    trip
                    onClick={() => handleClick(item)}
                  />
                )
              }
            </Block>
          )
        }
      </View>
    </View>
  )
}

export default connect(({
  tripInfo
}: any) => ({
  tripInfo
}))(TripInfo)
