import React from "react";
import Flexy from "@helpscout/hsds-react/components/Flexy";
import Label from "../Label";
import Switch from "../Switch";

export class ToggleGroup extends React.PureComponent {
  render() {
    const { label, ...rest } = this.props;
    return (
      <Flexy>
        <Flexy.Item>
          <Label>{label}</Label>
        </Flexy.Item>
        <Flexy.Item>
          <Switch size="sm" {...rest} />
        </Flexy.Item>
      </Flexy>
    );
  }
}

export default ToggleGroup;
