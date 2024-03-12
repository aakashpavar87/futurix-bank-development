import React from 'react'
import ReactDOM from 'react-dom/client'
import { Demo } from './App.jsx'
import BankingRegistrationForm from "./components/BankingRegistrationForm.jsx"
import Address from './components/Address.jsx'
import Kyc from './components/Kyc.jsx'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Demo />,  
  },
  {
    path: "/register",
    element: <BankingRegistrationForm />,
  },
  {
    path: "/address",
    element: <Address />,
  },
  {
    path: "/kyc",
    element: <Kyc />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
