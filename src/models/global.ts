import Taro from '@tarojs/taro';

const getSystemInfo = () => {
  let SystemInfo = Taro.getSystemInfoSync();
  SystemInfo.windowHeight = SystemInfo.windowHeight + 48;
  SystemInfo['RPX'] = SystemInfo.windowWidth / 375;
  let res = SystemInfo.model.indexOf('iPhone X');
  SystemInfo['mobile'] = res === 0 ? 'IPhoneX' : 'IPhoneY';
  SystemInfo['cate'] = SystemInfo.system.indexOf('iOS') > -1 ? 'ios' : 'android'
  return SystemInfo
}

export default {
  namespace: 'global',
  state: {
    SystemInfo: getSystemInfo(),
    userId: 1,
    userInfo: null,
  },

  effects: {

  },

  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload }
    }
  }
}