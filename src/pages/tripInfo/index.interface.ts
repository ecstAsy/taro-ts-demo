import { InfoProps, } from '../../app.interface';

/**
 * TripInfo.props 参数类型
 * @interface TripInfoProps
 */

export interface TripInfoProps {
  dispatch?: any,
  tripInfo: any
}

/**
 * TripTip.props 参数类型
 * @interface TripTipProps
 */

export interface TripTipProps {
  Info: InfoProps
}

/**
 * Params.props 路由参数
 * @interface ParamsProps
 */

export interface ParamsProps {
  id?: string,
  name?: string,
  visit?: string
}