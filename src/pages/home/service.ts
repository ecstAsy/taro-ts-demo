import { Request, Api } from '../../Http';

export const getUserInfo = async () =>
  Request(`${Api.user.info}`, {
    method: 'GET'
  })

export const gasList = async data =>
  Request(`${Api.gas.list}`, {
    method: 'POST',
    data
  })