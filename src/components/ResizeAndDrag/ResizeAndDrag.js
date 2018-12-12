import React from 'react'
import {connect} from '@helpscout/wedux'
import {Rnd} from 'react-rnd'
import {updateSizePosition} from '../../actions'

export class ResizeAndDrag extends React.PureComponent {
  static defaultProps = {
    x: 40,
    y: 40,
    width: 320,
    height: 480,
    zIndex: 9999,
  }

  handleOnResize = (event, direction, ref, delta, position) => {
    const height = ref.style.height
    const width = ref.style.width
    const {x, y} = position

    this.props.updateSizePosition({height, width, x, y})
  }

  handleOnDrag = (event, position) => {
    const {x, y} = position

    this.props.updateSizePosition({x, y})
  }

  render() {
    const {children, x, y, height, width, zIndex} = this.props

    return (
      <Rnd
        cancel="input, .ColorPicker *, .c-Switch, select, button"
        default={{x, y, height, width}}
        minWidth={320}
        maxWidth={480}
        minHeight={200}
        style={{position: 'fixed', zIndex}}
        onResize={this.handleOnResize}
        onDrag={this.handleOnDrag}
      >
        {children}
      </Rnd>
    )
  }
}

const mapStateToProps = state => {
  const {x, y, height, width, zIndex} = state
  return {
    x,
    y,
    height,
    width,
    zIndex,
  }
}

const mapDispatchToProps = {
  updateSizePosition,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ResizeAndDrag)
