/**
 * User.props 参数类型
 * @interface UserProps
 */

export interface UserProps {
  dispatch: any,
  user: any
}

/**
 * UserInfo.props 参数类型
 * @interface UserInfoProps
 */

export interface UserInfoProps {
  Info: InfoProps
}

/**
 * Info.props 参数类型
 * @interface InfoProps
 */

export interface InfoProps {
  name: string,
  cover: string,
  followers_count: number,
  avatar_l: string,
  followings_count: number
}