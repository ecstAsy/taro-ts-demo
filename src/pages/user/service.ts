import { Request, Api } from '../../Http';

export const getUserInfo = async () =>
  Request(`${Api.user.info}/v2/`, {
    method: 'GET'
  })