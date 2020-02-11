import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './containers/App'
import store from './store/configureStore'

const renderApp = () =>
  render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  )
if (process.env.NODE_ENV !== 'production' && module.hot) {
  module.hot.accept('./containers/App', renderApp)
}
renderApp()