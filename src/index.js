// import React from 'react'
// import ReactDOM from 'react-dom'
// import './index.css'
// import App from './App'
// import { AppProvider } from './context'
// ReactDOM.render(
//   <React.StrictMode>
//     <AppProvider>
//     <App />
//     </AppProvider>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA


import React from 'react'
// import ReactDOM from 'react-dom'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { AppProvider } from './context'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <AppProvider>
     <App />
     </AppProvider>
    
  </React.StrictMode>
);