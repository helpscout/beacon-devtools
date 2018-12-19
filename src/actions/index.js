import {saveState} from '../utils'
import {initialState} from '../store'

export const updateBeaconId = (state, event, {isAutoOpen}) => {
  const beaconId = event.target.value
  if (state.beaconId === beaconId) return

  console.log('Beacon DevTools: Initializing', beaconId)

  window.Beacon('destroy')
  window.Beacon('init', beaconId)

  if (isAutoOpen) {
    window.Beacon('open')
  }

  const open = isAutoOpen ? true : state.open
  const nextState = {...state, beaconId, open}

  saveState(nextState)

  return {
    beaconId,
    open,
  }
}

export const updateColor = (state, color) => {
  window.Beacon('config', {color})
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

export const navigateToRoute = (state, event) => {
  if (event.key === 'Enter') {
    return updateRoute(state, event)
  }
}

export const updateRoute = (state, event) => {
  const route = event.target.value
  window.Beacon('navigate', route)
}

export const openBeacon = state => {
  if (state.open) return

  const nextState = {...state, open: true}
  saveState(nextState)

  return {
    open: true,
  }
}

export const closeBeacon = state => {
  if (!state.open) return

  const nextState = {...state, open: false}
  saveState(nextState)

  return {
    open: false,
  }
}

export const toggleOpen = state => {
  if (!state.open) {
    window.Beacon('open')
    return openBeacon(state)
  } else {
    window.Beacon('close')
    return closeBeacon(state)
  }
}

export const toggleChat = state => {
  window.Beacon('config', {
    messaging: {
      chatEnabled: !state.chatEnabled,
    },
  })

  return {
    chatEnabled: !state.chatEnabled,
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

export const toggleShowGetInTouch = state => {
  window.Beacon('config', {
    messaging: {
      contactForm: {
        showGetInTouch: !state.showGetInTouch,
      },
    },
  })

  return {
    showGetInTouch: !state.showGetInTouch,
  }
}

export const resetBeacon = state => {
  window.Beacon('reset')

  saveState(initialState)

  return {
    initialState,
  }
}

export const logout = state => {
  window.Beacon('logout')
}

export const setActiveModal = (state, activeModal) => {
  return {
    activeModal,
  }
}

export const updateLabel = (state, labelProps) => {
  const {id, value} = labelProps
  if (!id) return

  window.Beacon('config', {
    labels: {
      [id]: value,
    },
  })

  return {
    labels: {
      ...state.labels,
      [id]: value,
    },
  }
}

export const toggleTranslation = state => {
  return {
    showTranslation: !state.showTranslation,
  }
}

export const toggleMinimize = state => {
  const nextState = {...state, isMinimized: !state.isMinimized}
  saveState(nextState)

  return {
    isMinimized: !state.isMinimized,
  }
}
