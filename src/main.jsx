import React from 'react'
import ReactDOM from 'react-dom/client'
import {AppProdDrilling} from './components'
import { AppComposition } from './components'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppProdDrilling />
    {/* <AppComposition /> */}
  </React.StrictMode>
)
