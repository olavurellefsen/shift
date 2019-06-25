import React from 'react'
import ReactDOM from 'react-dom'
import './i18n';
import Root from './Root'

const render = Component => {
  ReactDOM.render(
    <div>
      <Component />
    </div>,
    document.getElementById('root'),
  )
}
 
render(Root)
 
// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./Root', () => { render(Root) })
}
