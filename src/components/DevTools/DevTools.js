import React from 'react'
import {connect} from '@helpscout/wedux'
import {
  logout,
  resetBeacon,
  toggleChat,
  toggleDocs,
  toggleMessaging,
  toggleOpen,
  toggleShowGetInTouch,
  navigateToRoute,
  openBeacon,
  closeBeacon,
  updateBeaconId,
  updateColor,
  updateDisplayText,
  updateIconImage,
  updateRoute,
  updateSearch,
  updateStyle,
  updateSizePosition,
} from '../../actions'
import Button from '../Button'
import Label from '../Label'
import ColorPicker from '../ColorPicker'
import ResizeAndDrag from '../ResizeAndDrag'
import FormSection from '../FormSection'
import ToggleGroup from '../ToggleGroup'
import Input from '../Input'
import Select from '../Select'
import {FrameUI, DevToolsUI, HeaderUI, FooterUI} from './DevTools.css'

export class DevTools extends React.PureComponent {
  static defaultProps = {
    beaconId: '',
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
    window.Beacon('on', 'open', this.props.openBeacon)
    window.Beacon('on', 'close', this.props.closeBeacon)
    window.Beacon('open')
  }

  componentWillUnmount() {
    window.Beacon('off', 'open', this.props.openBeacon)
    window.Beacon('off', 'close', this.props.closeBeacon)
  }

  render() {
    const {
      chatEnabled,
      displayText,
      docsEnabled,
      isOpen,
      logout,
      messagingEnabled,
      navigateToRoute,
      resetBeacon,
      showGetInTouch,
      toggleChat,
      toggleDocs,
      toggleMessaging,
      toggleOpen,
      toggleShowGetInTouch,
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
          <HeaderUI>
            Beacon DevTools
            <Input onKeyUp={updateBeaconId} placeholder="Beacon ID" />
          </HeaderUI>
          <DevToolsUI>
            <div>
              <FormSection title="Interactions">
                <ToggleGroup
                  label="Open"
                  onChange={toggleOpen}
                  checked={isOpen}
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
              </FormSection>

              <FormSection title="Docs">
                <ToggleGroup
                  label="Enable Docs"
                  onChange={toggleDocs}
                  checked={docsEnabled}
                />

                <Label>
                  Search
                  <Input
                    onKeyUp={updateSearch}
                    placeholder="Example: Help Scout"
                  />
                </Label>
              </FormSection>

              <FormSection title="Messaging">
                <ToggleGroup
                  label="Enable Messaging"
                  onChange={toggleMessaging}
                  checked={messagingEnabled}
                />

                <ToggleGroup
                  label="Enable Chat"
                  onChange={toggleChat}
                  checked={chatEnabled}
                />

                <ToggleGroup
                  label='Show "Get in touch" link'
                  onChange={toggleShowGetInTouch}
                  checked={showGetInTouch}
                />
              </FormSection>

              <FormSection title="Display">
                <Label>
                  Style
                  <Select onChange={updateStyle}>
                    <option>icon</option>
                    <option>text</option>
                    <option>iconAndText</option>
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

              <FormSection title="Other Actions">
                <Label>
                  <Button onClick={logout}>Logout</Button>
                </Label>
                <Label>
                  <Button onClick={resetBeacon}>Reset Beacon</Button>
                </Label>
              </FormSection>
            </div>
          </DevToolsUI>
          <FooterUI>
            <Input onKeyUp={navigateToRoute} placeholder="Beacon URL: /ask" />
          </FooterUI>
        </FrameUI>
      </ResizeAndDrag>
    )
  }
}

const mapStateToProps = state => {
  const {
    chatEnabled,
    displayText,
    docsEnabled,
    iconImage,
    messagingEnabled,
    open,
    style,
    showGetInTouch,
  } = state

  return {
    chatEnabled,
    displayText,
    iconImage,
    docsEnabled,
    messagingEnabled,
    isOpen: open,
    withText: style === 'text' || style === 'iconAndText',
    style,
    showGetInTouch,
  }
}

const mapDispatchToProps = {
  logout,
  openBeacon,
  closeBeacon,
  resetBeacon,
  navigateToRoute,
  toggleOpen,
  toggleChat,
  toggleDocs,
  toggleMessaging,
  toggleShowGetInTouch,
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
