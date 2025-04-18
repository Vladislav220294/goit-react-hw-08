import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { store, persistor } from './redux/store.js'
import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter } from "react-router";

import './index.css'
import App from './components/app/App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
       
       <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </PersistGate>
      
    </Provider>
    
  </StrictMode>,
)
