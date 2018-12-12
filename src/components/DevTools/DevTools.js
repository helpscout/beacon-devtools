import React from 'react'
import {connect} from '@helpscout/wedux'
import {
  toggleDocs,
  toggleMessaging,
  toggleOpen,
  updateBeaconId,
  updateColor,
  updateDisplayText,
  updateIconImage,
  updateRoute,
  updateSearch,
  updateStyle,
  updateSizePosition,
} from '../../actions'
import Label from '../Label'
import ColorPicker from '../ColorPicker'
import ResizeAndDrag from '../ResizeAndDrag'
import FormSection from '../FormSection'
import ToggleGroup from '../ToggleGroup'
import Input from '../Input'
import Select from '../Select'
import {FrameUI, DevToolsUI, HeaderUI} from './DevTools.css'

export class DevTools extends React.PureComponent {
  static defaultProps = {
    beaconId: '',
    loadTimeout: 600,
    toggleDocs: () => undefined,
    toggleMessaging: () => undefined,
    toggleOpen: () => undefined,
    updateBeaconId: () => undefined,
    updateColor: () => undefined,
    updateDisplayText: () => undefined,
    updateIconImage: () => undefined,
    updateRoute: () => undefined,
    updateSearch: () => undefined,
    updateStyle: () => undefined,
  }

  componentDidMount() {
    setTimeout(() => {
      window.Beacon('on', 'open', this.props.toggleOpen)
      window.Beacon('on', 'close', this.props.toggleOpen)
      window.Beacon('open')
    }, this.props.loadTimeout)
  }

  componentWillUnmount() {
    window.Beacon('off', 'open', this.props.toggleOpen)
    window.Beacon('off', 'close', this.props.toggleOpen)
  }

  render() {
    const {
      displayText,
      docsEnabled,
      isOpen,
      messagingEnabled,
      toggleDocs,
      toggleMessaging,
      toggleOpen,
      updateBeaconId,
      updateColor,
      updateDisplayText,
      updateIconImage,
      updateRoute,
      updateSearch,
      updateStyle,
      withText,
    } = this.props

    return (
      <ResizeAndDrag>
        <FrameUI>
          <HeaderUI>Beacon DevTools</HeaderUI>
          <DevToolsUI>
            <div>
              <FormSection>
                <Label>
                  Beacon ID
                  <Input
                    onKeyUp={updateBeaconId}
                    placeholder="Example: 1234a123-a1b2-12a1-ab12-a123b1234123"
                  />
                </Label>
              </FormSection>

              <FormSection title="Interactions">
                <ToggleGroup
                  label="Open"
                  onChange={toggleOpen}
                  checked={isOpen}
                />

                <ToggleGroup
                  label="Enable Docs"
                  onChange={toggleDocs}
                  checked={docsEnabled}
                />

                <ToggleGroup
                  label="Enable Messaging"
                  onChange={toggleMessaging}
                  checked={messagingEnabled}
                />
                <Label>
                  Navigate
                  <Select onChange={updateRoute}>
                    <option value="/">Home</option>
                    <option value="/docs/search">Answers</option>
                    <option value="/ask">Ask</option>
                    <option value="/ask/message">Ask/Message</option>
                    <option value="/ask/chat">Ask/Chat</option>
                    <option value="/previous-messages">
                      Previous Messages
                    </option>
                    /option>
                  </Select>
                </Label>

                <Label>
                  Search
                  <Input
                    onKeyUp={updateSearch}
                    placeholder="Example: Help Scout"
                  />
                </Label>
              </FormSection>

              <FormSection title="Display">
                <Label>
                  Style
                  <Select onChange={updateStyle}>
                    <option>icon</option>
                    <option>text</option>
                    <option>iconOrText</option>
                    <option>manual</option>
                  </Select>
                </Label>

                {withText && (
                  <Label>
                    Beacon Text
                    <Input value={displayText} onChange={updateDisplayText} />
                  </Label>
                )}

                <Label>
                  Icon Image
                  <Select onChange={updateIconImage}>
                    <option>message</option>
                    <option>beacon</option>
                    <option>buoy</option>
                    <option>search</option>
                    <option>question</option>
                  </Select>
                </Label>

                <Label>
                  Color
                  <ColorPicker onChange={updateColor} />
                </Label>
              </FormSection>
            </div>
          </DevToolsUI>
        </FrameUI>
      </ResizeAndDrag>
    )
  }
}

const mapStateToProps = state => {
  const {docsEnabled, messagingEnabled, open, style} = state

  return {
    docsEnabled,
    messagingEnabled,
    isOpen: open,
    withText: style === 'text' || style === 'iconOrText',
  }
}

const mapDispatchToProps = {
  toggleOpen,
  toggleDocs,
  toggleMessaging,
  updateBeaconId,
  updateColor,
  updateStyle,
  updateDisplayText,
  updateIconImage,
  updateSearch,
  updateRoute,
  updateSizePosition,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DevTools)
