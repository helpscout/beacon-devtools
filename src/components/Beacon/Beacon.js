import React from "react";

export class Beacon extends React.PureComponent {
  static defaultProps = {
    beaconId: "3555c5f0-b9d7-41e5-ac76-f341e9093933"
  };
  componentDidMount() {
    if (this.props.beaconId) {
      window.Beacon("init", this.props.beaconId);
      window.Beacon("open");
    }
  }

  render() {
    return null;
  }
}

export default Beacon;
