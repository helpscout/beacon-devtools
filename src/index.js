import React from 'react'
import ReactDOM from 'react-dom'
import DevTools from './DevTools'

const mountNode = document.createElement('div')
document.body.appendChild(mountNode)

ReactDOM.render(<DevTools />, mountNode)
