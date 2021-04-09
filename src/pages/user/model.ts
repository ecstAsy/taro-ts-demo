import { getUserInfo } from './service';

export default {
  namespace: 'user',
  state: {
    userInfo: '',
    trips: []
  },
  effects: {
    * info(_, { call }) {
      const data = yield call(getUserInfo);
      return data
    }
  },
  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload }
    }
  }
}