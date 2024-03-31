import { useState } from 'react'
import "./App.css"

import InvestorePage from './InvestorComponent/InvestorePage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="max-h-screen body">

    <InvestorePage/> 
    </div>
    </>
  )
}

export default App
