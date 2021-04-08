/**
 * PageButton.props 参数类型
 * @interface PageButtonProps
 */

export interface HttpProps {
  method: 'GET' | 'POST' | 'DELETE' | 'PUT',
  data?: object,
  headers?: object,
  contentType?: object
}