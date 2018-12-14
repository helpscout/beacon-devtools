import React from 'react'
import {connect} from '../../store'
import {updateLabel} from '../../actions'
import Modal from '../Modal'
import Input from '../Input'
import Label from '../Label'

export class TranslationModal extends React.PureComponent {
  static defaultProps = {
    labels: {},
    onLabelChange: () => undefined,
    show: true,
  }

  handleOnChange = event => {
    const {id, value} = event.target

    this.props.onLabelChange({id, value})
  }

  renderLabels() {
    const {labels} = this.props
    const labelKeys = Object.keys(labels)

    return labelKeys.map(key => {
      return (
        <Label key={key}>
          {key}
          <Input id={key} value={labels[key]} onChange={this.handleOnChange} />
        </Label>
      )
    })
  }

  render() {
    if (!this.props.show) return null

    return (
      <Modal title="Translations" zIndex={999}>
        {this.renderLabels()}
      </Modal>
    )
  }
}

const mapStateToProps = state => {
  const {labels, showTranslation} = state

  return {labels, show: showTranslation}
}

const mapDispatchToProps = {
  onLabelChange: updateLabel,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TranslationModal)
