import React from 'react'
import {connect} from '../../store'
import {toggleTranslation, updateLabel} from '../../actions'
import Modal from '../Modal'
import Input from '../Input'
import Label from '../Label'

export class TranslationModal extends React.PureComponent {
  static defaultProps = {
    labels: {},
    onLabelChange: () => undefined,
    toggleTranslation: () => undefined,
    isOpen: true,
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
    return (
      <Modal
        isOpen={this.props.isOpen}
        title="Translations"
        zIndex={999}
        onClickClose={this.props.toggleTranslation}
        withClose
      >
        {this.renderLabels()}
      </Modal>
    )
  }
}

const mapStateToProps = state => {
  const {isMinimized, labels, showTranslation} = state

  return {isOpen: !isMinimized && showTranslation, labels}
}

const mapDispatchToProps = {
  toggleTranslation,
  onLabelChange: updateLabel,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TranslationModal)
