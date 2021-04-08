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
  return Taro.request({
    url: baseUrl + url,
    data: {
      ...data
    },
    header: {
      'Content-Type': contentType || 'application/json',
      ptNumber: 'GAS',
      ...headers
    },
    method: method.toUpperCase(),
  }).then((res) => {
    const { statusCode, data } = res;
    if (statusCode >= 200 && statusCode < 300) {
      // if (!noConsole) {
      //   console.log(`${new Date().toLocaleString()}【 M=${options.url} 】【接口响应：】`, res.data);
      // }
      if (data.statusCode && data.statusCode === '200') {
        return data
      } else {
        if (data.statusCode === '700') {
          return data
        }
        if (!url.match('/gatherUserBehLog')) {
          Taro.showToast({
            icon: 'none',
            title: `网络异常！`,
            mask: true
          })
        }
      }
    } else {
      if (!url.match('/gatherUserBehLog')) {
        Taro.showToast({
          icon: 'none',
          title: `系统异常！`,
          mask: true
        })
      }
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
