import delay from 'mocker-api/utils/delay'; // 延时 模拟请求异步问题
import mockjs from 'mockjs';
import User from './user';

const data = {
  ...User
}

// 使用delay方法可以延迟返回数据
module.exports = delay(data, 1000);