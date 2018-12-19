import {createUniqueStore} from '@helpscout/wedux'
import labels from '../data/labels'

export const initialState = {
  activeModal: '',
  beaconId: '',
  open: false,
  chatEnabled: true,
  docsEnabled: true,
  messagingEnabled: true,
  showGetInTouch: true,
  displayText: 'Hello',
  style: 'icon',
  iconImage: 'message',
  isMinimized: false,
  x: 40,
  y: 40,
  width: 320,
  height: 480,
  zIndex: 999999,
  showTranslation: false,
  labels,
}

const store = createUniqueStore(initialState)

export const Provider = store.Provider
export const connect = store.connect

export default store.store
