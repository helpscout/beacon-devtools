import React from "react";
import { connect } from "@helpscout/wedux";

export class Beacon extends React.PureComponent {
  componentDidMount() {
    if (this.props.beaconId) {
      window.Beacon("init", this.props.beaconId);
      window.Beacon("open");
    }

    window.Beacon("on", "open", this.props.onOpen);
    window.Beacon("on", "close", this.props.onClose);
  }

  render() {
    return null;
  }
}

const mapStateToProps = state => {
  const { beaconId } = state;

  return { beaconId };
};

const mapDispatchToProps = {
  onOpen: () => ({ open: true }),
  onClose: () => ({ open: false })
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Beacon);
