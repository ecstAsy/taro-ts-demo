import { Request, Api } from '../../Http';

export const TripInfo = async ({ id }) =>
  Request(`${Api.home.info}${id}/waypoints/`, {
    method: 'GET'
  })