/**
 * UserInfo.props 参数类型
 * @interface UserInfoProps
 */

export interface UserInfoProps {
  unionId?: string,
  nickName?: string,
  phone?: string,
  headImgUrl?: string,
  collectNum?: number | 0,
  couponNum?: number | 0,
  coinpurse?: number | 0,
  onGetUserInfo?: any,
  onGetPhoneNumber?: any
}

/**
 * AccountsItem.props 参数类型
 * @interface AccountsProps
 */

export interface AccountsProps {
  id: number,
  name: string,
  url: string
}

/**
 * ActionItem.props 参数类型
 * @interface ActionItemProps
 */

export interface ActionItemProps {
  icon: any,
  label: string,
  value?: any,
  AtType?: string,
  url?: any
}

/**
 * OrderTab.props 参数类型
 * @interface OrderTabProps
 */

export interface OrderTabProps {
  // Tabs: Array<object>
}

/**
 * TabItem.props 参数类型
 * @interface TabItemProps
 */

export interface TabItemProps {
  id: string,
  name: string,
  url: any
}