import React from 'react'
import ReactDOM from 'react-dom/client'
import WithdrawalForm from './App.jsx'
import './index.css'
import DepositForm from './deposit.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DepositForm />
  </React.StrictMode>,
)
