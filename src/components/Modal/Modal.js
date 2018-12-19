import React from 'react'
import {
  FrameUI,
  HeaderUI,
  CloseUI,
  ModalContentWrapperUI,
  MinimizeUI,
} from './Modal.css'
import ResizeAndDrag from '../ResizeAndDrag'

export class Modal extends React.PureComponent {
  static defaultProps = {
    isOpen: false,
    minimizeTitle: 'Beacon DevTools',
    withClose: false,
    withMinimize: false,
    onToggleMinimize: () => undefined,
    onClickClose: () => undefined,
  }

  renderMinimize() {
    const {minimizeTitle, withMinimize, onToggleMinimize} = this.props
    if (!withMinimize) return

    return (
      <MinimizeUI onClick={onToggleMinimize} title={minimizeTitle}>
        B
      </MinimizeUI>
    )
  }

  render() {
    const {
      children,
      isOpen,
      onClickClose,
      withClose,
      withMinimize,
      title,
      ...rest
    } = this.props

    return (
      <div className="ModalWrapper">
        <ModalContentWrapperUI isOpen={isOpen}>
          <ResizeAndDrag {...rest}>
            {withClose && <CloseUI onClick={onClickClose} />}
            <FrameUI>
              {title && <HeaderUI>{title}</HeaderUI>}
              {children}
            </FrameUI>
          </ResizeAndDrag>
        </ModalContentWrapperUI>
        {this.renderMinimize()}
      </div>
    )
  }
}

export default Modal
