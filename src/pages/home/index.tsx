import React, { useEffect } from 'react';
import Taro from '@tarojs/taro';
import { connect } from 'react-redux';
import { View, Block } from '@tarojs/components'
import { HomeProps } from './index.interface';
import { GasItem } from '../../components';
import './index.scss';

const Home: React.FC<HomeProps> = ({
  dispatch, home
}) => {

  const { GasLists } = home;

  const getUserInfo = async () => {
    await dispatch({
      type: 'home/info'
    })

  }

  const getLists = async () => {
    const data = await dispatch({
      type: 'home/list'
    })
    await dispatch({
      type: 'home/save',
      payload: {
        GasLists: data.list
      }
    })
  }

  useEffect(() => {
    getUserInfo();
    getLists();
  }, [])

  const handleClick = id => {
    console.log(id);
  }

  return (
    <View className='index'>
      <Block>
        {
          GasLists && GasLists.length ?
            GasLists.map(item =>
              <Block>
                <GasItem
                  {...item}
                  onClick={() => handleClick(item.id)}
                />
              </Block>
            )
            :
            null
        }
      </Block>
    </View>
  )
}

export default connect(({
  home
}: any) => ({
  home
}))(Home)
