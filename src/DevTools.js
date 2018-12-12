import React from 'react'
import App from './components/App'
import {loadState} from './utils'
import store from './store'

export class DevTools extends React.Component {
  state = {
    isReady: false,
  }

  componentWillMount() {
    const localState = loadState()

    this.setState({...localState}, () => {
      const {open, ...rest} = localState
      store.setState(rest)
    })
  }

  componentDidMount() {
    this.setState({
      isReady: true,
    })
  }

  render() {
    if (!this.state.isReady) return null

    return <App {...this.state} {...this.props} />
  }
}

export default DevTools
