/**
 * GasItem.props 参数类型
 * @interface GasItemProps
 */

export interface GasItemProps {
  name: string,
  theme?: string,
  onClick?: any,
  address: string,
  unitPrice: number,
  worldPrice: number,
  remarks: Array<object>,
  range: number
}

export interface RemarkProps {
  id: number,
  type: string,
  remark: string
}