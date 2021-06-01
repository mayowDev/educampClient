import React,{Fragment} from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import GlobalPage from './containers/Global'
import store from './redux/configureStore'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './styles/global.scss'
const App = ()=> {
  // toast.configure(); 
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
