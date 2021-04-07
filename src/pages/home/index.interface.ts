/**
 * index.state 参数类型
 * @interface IndexState
 */
export interface HomeState {

}

/**
 * index.props 参数类型
 *
 * @export
 * @interface IndexProps
 */
export interface HomeProps {
  dispatch?: any,
  data?: Array<DataInterface>
}

export interface DataInterface {
  des: string,
  lunar: string,
  thumbnail_pic_s: string,
  title: string,
  _id: string
}
