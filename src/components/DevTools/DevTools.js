import React from "react";
import styled from "@helpscout/fancy";
import { connect } from "@helpscout/wedux";
import Button from "../Button";
import Label from "../Label";
import Input from "../Input";
import Switch from "../Switch";
import Select from "../Select";

export class DevTools extends React.PureComponent {
  static defaultProps = {
    beaconId: ""
  };

  render() {
    const {
      beaconId,
      displayText,
      isOpen,
      withText,
      toggleOpen,
      updateBeaconId,
      updateDisplayText,
      updateStyle,
      updateSearch,
      updateRoute
    } = this.props;

    return (
      <DevToolsUI>
        <HeaderUI>Beacon 2.0 DevTools</HeaderUI>
        <Label>
          Beacon ID
          <Input
            onChange={updateBeaconId}
            placeholder="Example: 1234a123-a1b2-12a1-ab12-a123b1234123"
            value={beaconId}
          />
        </Label>

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
          Open
          <br />
          <Switch size="sm" onChange={toggleOpen} checked={isOpen} />
        </Label>

        <Label>
          Search
          <Input onChange={updateSearch} placeholder="Example: Help Scout" />
        </Label>

        <Label>
          Navigate
          <Select onChange={updateRoute}>
            <option value="/">Home</option>
            <option value="/docs/search">Answers</option>
            <option value="/ask">Ask</option>
            <option value="/ask/message">Ask/Message</option>
            <option value="/ask/chat">Ask/Chat</option>
          </Select>
        </Label>
      </DevToolsUI>
    );
  }
}

const DevToolsUI = styled("div")`
  font-size: 13px;
  max-width: 600px;
  position: relative;
`;

const HeaderUI = styled("div")`
  background: black;
  font-size: 32px;
  left: 0;
  line-height: 1;
  padding: 0 0 20px;
  position: sticky;
  top: 0;
`;

const updateBeaconId = (state, event) => {
  const beaconId = event.target.value;
  window.Beacon("init", beaconId);

  return {
    beaconId
  };
};

const updateDisplayText = (state, event) => {
  const displayText = event.target.value;
  window.Beacon("config", { display: { text: displayText } });

  return {
    displayText
  };
};

const updateStyle = (state, event) => {
  const style = event.target.value;

  window.Beacon("config", { display: { style, text: state.displayText } });

  return {
    style
  };
};

const updateSearch = (state, event) => {
  const query = event.target.value;
  window.Beacon("search", query);
};

const updateRoute = (state, event) => {
  const route = event.target.value;
  window.Beacon("navigate", route);
};

const toggleOpen = state => {
  if (state.open) {
    window.Beacon("close");
  } else {
    window.Beacon("open");
  }

  return {
    open: !state.open
  };
};

const mapStateToProps = state => {
  const { beaconId, displayText, open, style } = state;

  return { beaconId, displayText, isOpen: open, withText: style === "text" };
};

const mapDispatchToProps = {
  toggleOpen,
  updateBeaconId,
  updateStyle,
  updateDisplayText,
  updateSearch,
  updateRoute
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DevTools);
