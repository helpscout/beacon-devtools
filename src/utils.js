const LOCAL_STORAGE_KEY = '__HS_BEACON_DEVTOOLS__'
const addBeaconListenerAttemptsMax = 10

export function loadState() {
  try {
    const serializedState = localStorage.getItem(LOCAL_STORAGE_KEY)
    if (serializedState === null) {
      // Save the initial state, if not defined
      saveState({})
      return {}
    }

    return JSON.parse(serializedState)
  } catch (err) {
    return {}
  }
}

export function saveState(state = {}) {
  if (!state) return undefined

  try {
    const serializedState = JSON.stringify(state)

    localStorage.setItem(LOCAL_STORAGE_KEY, serializedState)

    return undefined
  } catch (err) {
    return undefined
  }
}

function mockEvent() {
  return undefined
}

export function asyncOnBeaconReady() {
  return new Promise((resolve, reject) => {
    return onBeaconReady(resolve, reject)
  })
}

export function onBeaconReady(callback, err, addBeaconListenerAttempts = 0) {
  if (addBeaconListenerAttempts >= addBeaconListenerAttemptsMax) {
    return err()
  }
  try {
    window.Beacon('on', 'open', mockEvent)
    callback()
  } catch (error) {
    setTimeout(() => {
      onBeaconReady(callback, err, addBeaconListenerAttempts + 1)
    }, 60)
  }
}
