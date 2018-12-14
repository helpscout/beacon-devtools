import {connect} from '../../store'
import Modal from '../Modal'
import {updateSizePosition} from '../../actions'

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
)(Modal)
