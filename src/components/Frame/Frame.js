import React from 'react'
import {FrameUI, FrameLeftUI, FrameRightUI} from './Frame.css'

export class Frame extends React.PureComponent {
  static defaultProps = {
    renderBeacon: () => undefined,
    renderLeft: () => undefined,
    renderRight: () => undefined,
  }

  render() {
    return (
      <FrameUI>
        <FrameLeftUI>{this.props.renderLeft()}</FrameLeftUI>
        <FrameRightUI>{this.props.renderBeacon()}</FrameRightUI>
      </FrameUI>
    )
  }
}

export default Frame
