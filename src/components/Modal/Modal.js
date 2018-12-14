import React from 'react'
import {FrameUI, HeaderUI, CloseUI} from './Modal.css'
import ResizeAndDrag from '../ResizeAndDrag'

export class Modal extends React.PureComponent {
  static defaultProps = {
    withClose: false,
    onClickClose: () => undefined,
  }
  render() {
    const {children, onClickClose, withClose, title, ...rest} = this.props

    return (
      <ResizeAndDrag {...rest}>
        {withClose && <CloseUI onClick={onClickClose} />}
        <FrameUI>
          {title && <HeaderUI>{title}</HeaderUI>}
          {children}
        </FrameUI>
      </ResizeAndDrag>
    )
  }
}

export default Modal
