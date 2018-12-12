import React from 'react'
import {Provider} from '@helpscout/wedux'
import store from '../../store'
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
