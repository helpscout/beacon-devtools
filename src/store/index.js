import createStore from '@helpscout/wedux'

const store = createStore({
  beaconId: '',
  open: false,
  chatEnabled: true,
  docsEnabled: true,
  messagingEnabled: true,
  showGetInTouch: true,
  displayText: 'Hello',
  style: 'icon',
  iconImage: 'message',
  x: 40,
  y: 40,
  width: 320,
  height: 480,
  zIndex: 9999,
})

export default store
