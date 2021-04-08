import { Request, Api } from '../../Http';

export const getUserInfo = async () =>
  Request(`${Api.user.info}`, {
    method: 'GET'
  })