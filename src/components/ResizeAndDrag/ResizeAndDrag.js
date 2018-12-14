import React from 'react'
import {Rnd} from 'react-rnd'
import {connect} from '../../store'
import {uuid} from '../../utils'
import {setActiveModal} from '../../actions'

export class ResizeAndDrag extends React.PureComponent {
  static defaultProps = {
    activeModal: undefined,
    x: 40,
    y: 40,
    width: 320,
    height: 480,
    setActiveModal: () => undefined,
    updateSizePosition: () => undefined,
    maxZIndex: 999999999,
    zIndex: 9999999,
  }

  state = {
    id: uuid(),
  }

  getZIndex() {
    const {activeModal, maxZIndex} = this.props
    const isActive = activeModal === this.state.id

    return isActive ? maxZIndex : maxZIndex - 1
  }

  handleOnClick = () => {
    if (this.state.id === this.props.activeModal) return
    this.props.setActiveModal(this.state.id)
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
    this.props.setActiveModal(this.state.id)
  }

  render() {
    const {children, x, y, height, width} = this.props
    const zIndex = this.getZIndex()

    return (
      <div
        style={{position: 'fixed', top: 0, left: 0, zIndex}}
        onClick={this.handleOnClick}
      >
        <Rnd
          cancel="input, .ColorPicker *, .c-Switch, select, button"
          default={{x, y, height, width}}
          minWidth={320}
          maxWidth={480}
          minHeight={200}
          style={{zIndex}}
          onResize={this.handleOnResize}
          onDrag={this.handleOnDrag}
        >
          {children}
        </Rnd>
      </div>
    )
  }
}

const mapStateToProps = state => {
  const {activeModal} = state

  return {activeModal}
}

const mapDispatchToProps = {
  setActiveModal,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ResizeAndDrag)
