import {connect} from '../../store'
import Modal from '../Modal'
import {toggleMinimize, updateSizePosition} from '../../actions'

const mapStateToProps = state => {
  const {isMinimized, x, y, height, width, zIndex} = state
  return {
    isOpen: !isMinimized,
    withMinimize: true,
    x,
    y,
    height,
    width,
    zIndex,
  }
}

const mapDispatchToProps = {
  onToggleMinimize: toggleMinimize,
  updateSizePosition,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Modal)
