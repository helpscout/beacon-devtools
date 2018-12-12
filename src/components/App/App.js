import React from "react";
import { Provider } from "@helpscout/wedux";
import store from "../../store";
import DevTools from "../DevTools";

class App extends React.PureComponent {
  render() {
    return (
      <Provider store={store}>
        <DevTools />
      </Provider>
    );
  }
}

export default App;
