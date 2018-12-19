import React from 'react'
import {connect} from '../../store'
import {
  logout,
  resetBeacon,
  toggleChat,
  toggleDocs,
  toggleMessaging,
  toggleOpen,
  toggleShowGetInTouch,
  toggleTranslation,
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
import MainModal from '../MainModal'
import FormSection from '../FormSection'
import ToggleGroup from '../ToggleGroup'
import Input from '../Input'
import Select from '../Select'
import {ScopeProvider} from '@helpscout/hsds-react/components/styled'
import {DevToolsUI, FormBlock, HeaderUI, FooterUI} from './DevTools.css'

export class DevTools extends React.PureComponent {
  static defaultProps = {
    beaconId: '',
    beaconIds: [],
    isAutoOpen: false,
    toggleDocs: () => undefined,
    toggleMessaging: () => undefined,
    toggleOpen: () => undefined,
    toggleTranslation: () => undefined,
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
    if (this.props.isAutoOpen) {
      window.Beacon('open')
    }
  }

  componentWillUnmount() {
    window.Beacon('off', 'open', this.props.openBeacon)
    window.Beacon('off', 'close', this.props.closeBeacon)
  }

  handleOnInputUpdateBeaconId = event => {
    if (event.key === 'Enter') {
      this.props.updateBeaconId(event)
    }
  }

  handleOnSelectUpdateBeaconId = event => {
    this.props.updateBeaconId(event)
  }

  renderBeaconIds() {
    const {beaconIds} = this.props
    if (!beaconIds.length) return null

    return (
      <Label>
        Beacon ID List
        <Select onChange={this.handleOnSelectUpdateBeaconId}>
          <option disabled selected>
            Select...
          </option>
          {beaconIds.map(({id, label}) => (
            <option value={id} key={id}>
              {label}
            </option>
          ))}
        </Select>
      </Label>
    )
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
      toggleTranslation,
      updateColor,
      updateDisplayText,
      updateIconImage,
      updateRoute,
      updateSearch,
      updateStyle,
      withText,
    } = this.props

    return (
      <ScopeProvider scope="#BeaconDevTools">
        <div id="BeaconDevTools">
          <MainModal>
            <HeaderUI>
              Beacon DevTools
              <Input
                onKeyUp={this.handleOnInputUpdateBeaconId}
                placeholder="Beacon ID"
              />
              {this.renderBeaconIds()}
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
                  <FormBlock>
                    <Button onClick={toggleTranslation}>
                      Translation Labels
                    </Button>
                  </FormBlock>
                  <FormBlock>
                    <Button onClick={logout}>Logout</Button>
                  </FormBlock>
                  <FormBlock>
                    <Button onClick={resetBeacon}>Reset Beacon</Button>
                  </FormBlock>
                </FormSection>
              </div>
            </DevToolsUI>
            <FooterUI>
              <Input onKeyUp={navigateToRoute} placeholder="Beacon URL: /ask" />
            </FooterUI>
          </MainModal>
        </div>
      </ScopeProvider>
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
  toggleTranslation,
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
