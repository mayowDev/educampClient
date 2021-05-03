import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import GlobalPage from './containers/Global'
import store from './redux/configureStore'
import './styles/global.scss'



function App () {
  return (
    // <Provider store={store}>
      // <Router>
        <GlobalPage />
      // </Router>
    // </Provider>
  )
}

export default App
