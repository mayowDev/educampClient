import React,{Fragment} from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'

import GlobalPage from './containers/Global'
import store from './store/configureStore'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './styles/global.scss'

const App = ()=> {
  return (
    <Fragment>
    <Provider store={store}>
    <ToastContainer position="bottom-left"/>
     <Router>
        <GlobalPage />
      </Router>
   </Provider>
   </Fragment>
  )
}

export default App
