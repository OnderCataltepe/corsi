import React from 'react'
import ReactDOM from 'react-dom/client'



import 'virtual:uno.css'

import '~/index.css'
import Routes from '~/Routes';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
)
