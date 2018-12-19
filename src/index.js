import React from 'react'
import ReactDOM from 'react-dom'
import DevTools from './DevTools'
const mountNode = document.createElement('div')
mountNode.id = 'BeaconDevToolsRoot'
document.body.appendChild(mountNode)

ReactDOM.render(<DevTools isAutoOpen />, mountNode)
