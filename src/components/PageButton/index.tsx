import React from 'react';
import { Button } from '@tarojs/components';
import { PageButtonProps } from './index.interface';
import './index.scss';

const PageButton: React.FC<PageButtonProps> = props => {
  const { BtnTxt, theme = '#E50112', onClick, ...rest } = props;
  return (
    <Button
      className='page-button'
      style={{ background: `${theme}` }}
      onClick={e => {
        e.preventDefault();
        onClick();
      }}
      {...rest}
    >
      {BtnTxt}
    </Button>
  )
}

export default PageButton