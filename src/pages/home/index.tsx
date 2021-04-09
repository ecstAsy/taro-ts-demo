import React, { useEffect } from 'react';
import Taro, { useReachBottom } from '@tarojs/taro';
import { connect } from 'react-redux';
import { View, Block } from '@tarojs/components';
import { HomeProps } from './index.interface';
import { LoadMore, CardItem } from '../../components';
import { PageSpace, HomeBanner } from './components';
import './index.scss';

const Home: React.FC<HomeProps> = ({
  dispatch, home, loading
}) => {

  const { Trips, next_start } = home;

  const getLists = async () => {
    const data = await dispatch({
      type: 'home/load',
      payload: {
        next_start
      }
    })
    if (!data) return false;
    return dispatch({
      type: 'home/save',
      payload: {
        Trips: !Trips.length ? data.elements : [...Trips, ...data.elements],
        next_start: data.next_start
      }
    })
  }

  useEffect(() => {
    getLists();
  }, [])

  useReachBottom(() => next_start && getLists())

  const handleInfo = ({ id, name }) =>
    Taro.navigateTo({
      url: `/pages/tripInfo/index?id=${id}&name=${name}&visit=v_home`
    })

  return (
    <View className='home'>
      <PageSpace />
      <Block>
        <HomeBanner />
      </Block>
      <Block>
        {
          Trips.map(item =>
            <Block>
              <CardItem
                Info={item.data[0]}
                type='v_home'
                onClick={() => handleInfo(item.data[0])}
              />
            </Block>
          )
        }
      </Block>
      <LoadMore loading={loading} />
    </View>
  )
}

export default connect(({
  home,
  loading
}: any) => ({
  home,
  loading: loading.models.home
}))(Home)
