import React from 'react';
import { View, Text, Block } from '@tarojs/components'
import { HomeProps } from './index.interface';
import { PageButton, GasItem } from '../../components';
import './index.scss';

const Home: React.FC<HomeProps> = () => {
  const DataArray = [
    {
      id: 1,
      name: '盛大',
      address: '长江路556号',
      unitPrice: 5.64,
      worldPrice: 7.56,
      remarks: [
        {
          id: 1,
          type: '服',
          remark: '服务优先'
        }, {
          id: 2,
          type: '惠',
          remark: '超级特惠'
        }
      ],
      range: 1.23
    }, {
      id: 2,
      name: '恒能',
      address: '长江路556号',
      unitPrice: 5.64,
      worldPrice: 7.56,
      remarks: [
        {
          id: 1,
          type: '服',
          remark: '服务优先'
        }, {
          id: 2,
          type: '惠',
          remark: '超级特惠'
        }
      ],
      range: 1.23
    }, {
      id: 3,
      name: '长江',
      address: '长江路556号',
      unitPrice: 5.64,
      worldPrice: 7.56,
      remarks: [
        {
          id: 1,
          type: '服',
          remark: '服务优先'
        }, {
          id: 2,
          type: '惠',
          remark: '超级特惠'
        }
      ],
      range: 1.23
    }, {
      id: 4,
      name: '黄河',
      address: '长江路556号',
      unitPrice: 5.64,
      worldPrice: 7.56,
      remarks: [
        {
          id: 1,
          type: '服',
          remark: '服务优先'
        }, {
          id: 2,
          type: '惠',
          remark: '超级特惠'
        }
      ],
      range: 1.23
    },
  ]
  const handleClick = id => {
    console.log(id);
  }
  return (
    <View className='index'>
      <Block>
        {
          DataArray.map(item =>
            <Block>
              <GasItem
                {...item}
                onClick={() => handleClick(item.id)}
              />
            </Block>
          )
        }
      </Block>
    </View>
  )
}

export default Home
