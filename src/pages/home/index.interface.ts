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
  home: any,
}

export interface IHome {
  GasLists: object[]
}
