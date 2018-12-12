import React from 'react'
import {connect} from '@helpscout/wedux'
import {Rnd} from 'react-rnd'
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
} from '../../actions'
import Label from '../Label'
import ColorPicker from '../ColorPicker'
import FormSection from '../FormSection'
import ToggleGroup from '../ToggleGroup'
import Input from '../Input'
import Select from '../Select'
import {FrameUI, DevToolsUI, HeaderUI} from './DevTools.css'

export class DevTools extends React.PureComponent {
  static defaultProps = {
    beaconId: '',
  }

  render() {
    const {
      beaconId,
      displayText,
      docsEnabled,
      messagingEnabled,
      isOpen,
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
      <Rnd
        cancel="input, .ColorPicker *, .c-Switch"
        default={{
          x: 40,
          y: 40,
          width: 320,
          height: 480,
        }}
        minWidth={320}
        maxWidth={480}
        minHeight={320}
        style={{zIndex: 9999}}
      >
        <FrameUI>
          <HeaderUI>Beacon DevTools</HeaderUI>
          <DevToolsUI>
            <div>
              <FormSection>
                <Label>
                  Beacon ID
                  <Input
                    onChange={updateBeaconId}
                    placeholder="Example: 1234a123-a1b2-12a1-ab12-a123b1234123"
                    value={beaconId}
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
      </Rnd>
    )
  }
}

const mapStateToProps = state => {
  const {open, style} = state

  return {
    ...state,
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
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DevTools)
