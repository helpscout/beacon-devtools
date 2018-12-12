import createStore from '@helpscout/wedux'

const store = createStore({
  beaconId: '',
  color: '#617DEC',
  displayText: 'Hello',
  open: false,
  docsEnabled: true,
  iconImage: 'message',
  messagingEnabled: true,
})

export default store
