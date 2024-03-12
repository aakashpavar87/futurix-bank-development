import React from 'react'
import ReactDOM from 'react-dom/client'
import WithdrawalForm from './Withdraw.jsx'
import './index.css'
import DepositForm from './deposit.jsx'
import LoginForm from './login.jsx'
import FeedbackForm from './feedback.jsx'
import ProfileUpdateForm from './profileupdate.jsx'
import InvestorLoginForm from './investorlogin.jsx'
import InvestmentForm from './Investment.jsx'
import AdminRegistrationForm from './Adminregistration.jsx'
import AdminLogin from './admin.jsx'
import AdminUpdateForm from './adminupdata.jsx'
import BankingRegistrationForm from './AccRegistration.jsx'
import Address from './Acc_adress.jsx'
import Kyc from './Acc_kyc.jsx'
import DebitCardApplicationForm from './debit.jsx'
import CreditCardApplicationForm from './Credit.jsx'
import PersonalLoanVerificationForm from './Personal_loan2.jsx'
import LoanForm from './Personal_loan.jsx'
import BusinessForm from './Business_loan.jsx'
import BusinessForm1 from './Business_loan1.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <AdminRegistrationForm />
  <AdminLogin />
  <AdminUpdateForm />
  <BankingRegistrationForm />
  <Address />
  <Kyc />
  <LoginForm />
  <ProfileUpdateForm />
  <InvestorLoginForm />
  <InvestmentForm />
  <DebitCardApplicationForm />
  <CreditCardApplicationForm />
  <LoanForm />
  <PersonalLoanVerificationForm />
  <BusinessForm />
  <BusinessForm1 />
    <DepositForm />
    <WithdrawalForm />
    <FeedbackForm />
  </React.StrictMode>,
)
