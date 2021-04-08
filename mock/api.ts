import Gas from './gas';

export default {
  'GET /api/user/1': {
    data: {
      name: 'luckyadam'
    },
    statusCode: '200',
    errorMessage: ''
  },
  'POST /api/gas/list': {
    data: Gas,
    statusCode: '200',
    errorMessage: ''
  }
}
