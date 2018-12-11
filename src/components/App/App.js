import React from "react";
import { Provider } from "@helpscout/wedux";
import store from "../../store";
import Beacon from "../Beacon";
import DevTools from "../DevTools";
import Frame from "../Frame";
import "./App.css";

class App extends React.PureComponent {
  renderDevTools = () => <DevTools />;
  renderBeacon = () => <Beacon />;

  render() {
    return (
      <Provider store={store}>
        <Frame
          renderLeft={this.renderDevTools}
          renderBeacon={this.renderBeacon}
        />
      </Provider>
    );
  }
}

export default App;
