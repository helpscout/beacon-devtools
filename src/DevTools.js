import React from 'react'
import App from './components/App'
import {loadState, saveState, asyncOnBeaconReady} from './utils'
import store from './store'

export class DevTools extends React.Component {
  state = {
    isReady: false,
  }

  componentWillMount() {
    const localState = loadState()

    this.setState({...localState}, () => {
      store.setState(localState)
      saveState(store.getState())
    })
  }

  componentWillUnmount() {
    saveState(store.getState())
  }

  componentDidMount() {
    asyncOnBeaconReady()
      .then(() => {
        this.setState({
          isReady: true,
        })
      })
      .catch(() => {
        console.log('Beacon DevTools: Could not locate Beacon!')
      })
  }

  render() {
    if (!this.state.isReady) return null

    return <App {...this.state} {...this.props} />
  }
}

export default DevTools
