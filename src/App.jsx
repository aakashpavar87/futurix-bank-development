import React, { useEffect } from 'react'

import WithdrawalForm from './Withdraw.jsx'
import './index.css'
import DepositForm from './deposit.jsx'
import LoginForm from './login.jsx'
// import FeedbackForm from './feedback.jsx'
import ProfileUpdateForm from './profileupdate.jsx'
// import InvestorLoginForm from './investorlogin.jsx'
import InvestmentForm from './Investment.jsx'
import AdminLogin from './admin.jsx'
import AdminUpdateForm from './adminupdata.jsx'
import BankingRegistrationForm from './AccRegistration.jsx'
import Address from './Acc_adress.jsx'
import Kyc from './Acc_kyc.jsx'
import DebitCardApplicationForm from './debit.jsx'
import CreditCardApplicationForm from './Credit.jsx'
import PersonalLoanVerificationForm from './Personal_loan2.jsx'
// import LoanForm from './Personal_loan.jsx'
import BusinessForm from './Business_loan.jsx'
import BusinessForm1 from './Business_loan1.jsx'
import { getUsersApi } from './api/helloWorldApiService.js'
import Loan from './Loan.jsx'
import Card from './Card.jsx'
import Customer_Reg from './Forms/Customer_Reg.jsx'
import 'tailwindcss/tailwind.css';
import Login from './Forms/Login.jsx'
import AddressForm from './Forms/AddressForm.jsx'
import Investor_Reg from './Forms/Investor_Reg.jsx'
import Chatbox from './Forms/Chatbot.jsx'
import Chatbot from './Forms/Chatbot.jsx'
import AdminRegistrationForm from './Forms/AdminRegistrationForm.jsx'
// import CardForm from './Forms/CardForm .jsx'
import KYCForm from './Forms/KYCForm.jsx'
import CreditCardForm from './Forms/CreditCardForm.jsx'
import FeedbackForm from './Forms/FeedbackForm.jsx'
import InvestorReg from './Forms/InvestorReg.jsx'
import InvestorLogin from './Forms/InvestorLogin.jsx'
import InvestorRegistrationPage2 from './Forms/InvestorRegistrationPage2.jsx'
import LoanForm from './Forms/LoanForm.jsx'
export function App() {

  useEffect(() => {
    getUsersApi().then( (res) => console.log(res.data))
      .catch( (err) => console.log(err))
  }, [])
  

  return (
    <>

    {/* <Customer_Reg/>  */}
    {/* <Investor_Reg/>  */}
    {/* <Chatbot/> */}
    {/* <Login/>  */}
    {/* <KYCForm/> */}
    {/* <AddressForm /> */}
    {/* <AdminRegistrationForm /> */}
    {/* <FeedbackForm /> */}
    {/* <CreditCardForm/> */}
    
    {/* <InvestmentForm /> */}
      {/* <InvestorReg/> */}
{/* <InvestorRegistrationPage2/> */}

    {/* <InvestorLogin/> */}
{/* <Loan /> */}
           <LoanForm/>
      {/* <BusinessForm />
      <DepositForm />
      <WithdrawalForm />  */}
      {/* <AdminLogin /> */}
      {/* <AdminUpdateForm />
      
      
      {/* <Kyc /> */}
      {/* <LoginForm />
      <ProfileUpdateForm /> */}
      {/* <PersonalLoanVerificationForm /> */}
      {/* <BusinessForm1 /> */}
    </>
  )
}


