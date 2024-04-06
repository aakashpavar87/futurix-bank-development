import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import ProfileUp from './components/profileup';
import User from './user';
import Cardapply from './components/cardapply';
import CreditCardForm from './components/forms/creditcard';
import DepositForm from './components/forms/deposit';
import Loandashboard from './components/forms/loandashboard';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<User />} />
      <Route path="/profileup" element={<ProfileUp />} />
      <Route path='/cardapply' element={<Cardapply/>} />
      <Route path='/creditcardform' element={<CreditCardForm/>}/>
      <Route path='depositform' element={<DepositForm/>}/>
      <Route path='loandashboard' element={<Loandashboard/>}/>
    </Routes>
  </BrowserRouter>
);

export default App;
