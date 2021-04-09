import { InfoProps } from '../app.interface';
/**
 * PageButton.props 参数类型
 * @interface PageButtonProps
 */

export interface PageButtonProps {
  BtnTxt: string,
  theme?: string,
  onClick?: any
}

/**
 * LoadMore.props 参数类型
 * @interface LoadMorenProps
 */

export interface LoadMorenProps {
  loading: boolean
}

/**
 * TripCard.props 参数类型
 * @interface TripCardProps
 */

export interface TripCardProps {
  trip?: boolean,
  Info: InfoProps,
  onClick?: any
}