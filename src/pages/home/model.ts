import { getUserInfo } from './service';

export default {
  namespace: 'home',
  state: {},
  effects: {
    * info(_, { call }) {
      const data = yield call(getUserInfo);
      console.log(data);
    }
  },
  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload }
    }
  }
}