import { TripInfo } from './service';

export default {
  namespace: 'tripInfo',
  state: {
    hotNoteInfo: '',
    userNoteInfo: '',
    wayPoints: {},
    visit: '',
  },
  effects: {
    * info({ payload = {} }, { call }) {
      const data = yield call(TripInfo, payload);
      return data
    }
  },
  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload }
    }
  }
}