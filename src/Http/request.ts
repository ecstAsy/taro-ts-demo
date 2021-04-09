import Taro from '@tarojs/taro';
import { HttpProps } from './index.interface';
import { baseUrl, noConsole } from './config';

/**
|--------------------------------------------------
| @ptNumber
| #String
| 平台编号，后台通过请求头判断客户端类型
|--------------------------------------------------
*/

export default (url: string, options: HttpProps) => {
  const { method = 'GET', data = {}, headers = {}, contentType } = options;
  // 根据不同的环境来补全请求地址
  let Url = ''
  if (Taro.getEnv() === 'WEB') {
    Url = `/${url}`
  } else {
    Url = `${baseUrl}${url}`
  }
  return Taro.request({
    url: Url,
    data: {
      ...data
    },
    header: {
      'Content-Type': contentType || 'application/json',
      ptNumber: 'GAS',
      ...headers
    },
    method
  }).then((res) => {
    const { statusCode, data } = res;
    if (statusCode >= 200 && statusCode < 300) {
      return data
    }
  })
    .catch(() => {
      Taro.showToast({
        icon: 'none',
        title: '系统出错！',
        mask: true
      })
    })
}
