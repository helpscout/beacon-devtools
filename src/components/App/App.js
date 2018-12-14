import React from 'react'
import store, {Provider} from '../../store'
import DevTools from '../DevTools'
import TranslationModal from '../TranslationModal'

class App extends React.PureComponent {
  render() {
    return (
      <Provider store={store}>
        <div>
          <DevTools {...this.props} />
          <TranslationModal />
        </div>
      </Provider>
    )
  }
}

export default App
