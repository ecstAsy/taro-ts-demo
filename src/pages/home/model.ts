import { getUserInfo, gasList, v1_list } from './service';

export default {
  namespace: 'home',
  state: {
    Trips: [],
    next_start: 0
  },
  effects: {
    * info(_, { call }) {
      const data = yield call(getUserInfo);
      console.log(data);
    },

    * list({ payload = {} }, { call }) {
      const data = yield call(gasList, payload);
      return data?.data
    },

    * load({ payload = {} }, { call, put }) {
      const data = yield call(v1_list, payload);
      return data?.data
    }
  },
  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload }
    }
  }
}