import React from 'react'
import {FrameUI, HeaderUI} from './Modal.css'
import ResizeAndDrag from '../ResizeAndDrag'

export class Modal extends React.PureComponent {
  render() {
    const {children, title, ...rest} = this.props

    return (
      <ResizeAndDrag {...rest}>
        <FrameUI>
          {title && <HeaderUI>{title}</HeaderUI>}
          {children}
        </FrameUI>
      </ResizeAndDrag>
    )
  }
}

export default Modal
