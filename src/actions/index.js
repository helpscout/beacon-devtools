import {saveState} from '../utils'

export const updateBeaconId = (state, event) => {
  if (event.key === 'Enter') {
    const beaconId = event.target.value
    console.log('Beacon DevTools: Initializing', beaconId)
    window.Beacon('destroy')
    window.Beacon('init', beaconId)

    return {
      beaconId,
      open: false,
    }
  }
}

export const updateColor = (state, color) => {
  window.Beacon('config', {display: {color}})
}

export const updateDisplayText = (state, event) => {
  const displayText = event.target.value
  window.Beacon('config', {display: {text: displayText}})

  const nextState = {...state, displayText}
  saveState(nextState)

  return nextState
}

export const updateIconImage = (state, event) => {
  const iconImage = event.target.value
  window.Beacon('config', {display: {iconImage}})

  const nextState = {...state, iconImage}
  saveState(nextState)

  return nextState
}

export const updateStyle = (state, event) => {
  const style = event.target.value
  const nextStyleState = {
    display: {style, text: state.displayText, iconImage: state.iconImage},
  }

  window.Beacon('config', nextStyleState)

  const nextState = {...state, style}
  saveState(nextState)

  return nextState
}

export const updateSizePosition = (state, props) => {
  const nextState = {...state, ...props}
  saveState(nextState)

  return nextState
}

export const updateSearch = (state, event) => {
  if (event.key === 'Enter') {
    const query = event.target.value
    window.Beacon('search', query)
  }
}

export const updateRoute = (state, event) => {
  const route = event.target.value
  window.Beacon('navigate', route)
}

export const toggleOpen = state => {
  if (state.open) {
    window.Beacon('close')
  } else {
    window.Beacon('open')
  }

  return {
    open: !state.open,
  }
}

export const toggleDocs = state => {
  window.Beacon('config', {
    docsEnabled: !state.docsEnabled,
  })

  return {
    docsEnabled: !state.docsEnabled,
  }
}

export const toggleMessaging = state => {
  window.Beacon('config', {
    messagingEnabled: !state.messagingEnabled,
  })

  return {
    messagingEnabled: !state.messagingEnabled,
  }
}
