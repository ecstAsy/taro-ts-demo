/**
 * index.props 参数类型
 * @interface IndexProps
 */
export interface HomeProps {
  dispatch?: any,
  home: any,
  loading: boolean
}

export interface IHome {
  GasLists: object[]
}

/**
 * HomeBanner.Props
 * @interface IHomeBanner
 */

export interface IHomeBanner {

}

/**
 * SwiperItem.Props
 * @interface ISwiperItem
 */

export interface ISwiperItem {
  id: number,
  url: any
}

/**
 * HomeItem.Props
 * @interface CardItemProps
 */

import { InfoProps } from '../../app.interface';

export interface CardItemProps {
  Info: InfoProps,
  type: string,
  onClick?: any
}