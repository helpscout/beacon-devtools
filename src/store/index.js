import createStore from '@helpscout/wedux'

const store = createStore({
  beaconId: '',
  open: false,
  docsEnabled: true,
  messagingEnabled: true,
  x: 40,
  y: 40,
  width: 320,
  height: 480,
  zIndex: 9999,
})

export default store
