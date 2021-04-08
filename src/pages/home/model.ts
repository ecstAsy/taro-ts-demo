import { getUserInfo, gasList } from './service';

export default {
  namespace: 'home',
  state: {
    GasLists: null
  },
  effects: {
    * info(_, { call }) {
      const data = yield call(getUserInfo);
      console.log(data);
    },

    * list({ payload = {} }, { call }) {
      const data = yield call(gasList, payload);
      return data?.data
    }
  },
  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload }
    }
  }
}