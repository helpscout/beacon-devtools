import React from 'react'
import store, {Provider} from '../../store'
import DevTools from '../DevTools'

class App extends React.PureComponent {
  render() {
    return (
      <Provider store={store}>
        <DevTools {...this.props} />
      </Provider>
    )
  }
}

export default App
