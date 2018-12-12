const LOCAL_STORAGE_KEY = '__HS_BEACON_DEVTOOLS__'

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

// export function loadSessionState(id) {
//   if (!id) return {};

//   try {
//     const localState = loadState();
//     if (!localState || !localState[id]) {
//       // Save the initial state, if not defined
//       saveSessionState(id, {});
//       return {};
//     }

//     return localState[id];
//   } catch (err) {
//     return {};
//   }
// }

// export function saveSessionState(id, state) {
//   if (!id) return undefined;

//   try {
//     const localState = loadState();
//     if (!localState) return undefined;

//     const nextState = {
//       ...localState,
//       [id]: state
//     };

//     saveState(nextState);

//     return undefined;
//   } catch (err) {
//     return undefined;
//   }
// }
