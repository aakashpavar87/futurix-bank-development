import React from 'react'
import styles from '../style'
import { discount } from '../assets'
import { robot } from '../assets'

import GetStarted from "./GetStarted"
import { useNavigate } from 'react-router-dom'
// import { useNavigate } from 'react-router-dom'

const Hero = () =>
{
const navigate = useNavigate();

  // const navigate = useNavigate();
  const onsubmit = () => {
    navigate("/profileup")
  }
  
  return (

  <section id='home' className={`flex md:flex-row flex-col ${styles.paddingY}`} >

    <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>


      <div className="flex flex-row just-between items-center w-full">



        <img src='https://st2.depositphotos.com/2605379/49847/i/450/depositphotos_498472352-stock-photo-businessman-pointing-abstract-glowing-interface.jpg' className="rounded-full w-96 h-96"></img>
      </div>
      <div className="flex flex-row items-center py[6px] px-4 bg-discount-gradient rounded-[10px] mb-2 ml-20">

        <img src={discount} className="w-[32px] h-[32px]" />
        <p className={`${styles.paragraph} ml-2`}>


          <span className='text-white'>Bharat </span>
          {/* type of {" "} */}
          <span className='text-white'>Kumavat  </span>
          {/* for small Businesses */}

        </p>
      </div>

      {/* <h1 className='font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full'>
        Banking Method
      </h1> */}
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        <b>Account Number </b> : 123123123123 <br></br>
        <b>Address :</b> C-402 , Shyamved Saffire , Zundal <br></br>
        <b>City :</b>Gandhinagar <br></br>
        <b>State :</b> Gujarat <br></br>
        <b>Phone No:</b>7863096311<br></br>
        <b>Email :</b> harshvgajjar@gmail.com<br></br>
        <b>Date of Birth :</b> 22/09/2003 <br></br>

        <br></br>
        <button className='bg-transparent hover:bg-blue-700 text-white font-bold py-2 px-4 roundedo' onClick={onsubmit} >
        Edit</button><br></br>

      </p>
    </div>

    <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
      <img src={robot} className="w-[100%] h-[100%] relative z-[5]" />

      <div className='absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient' />
      <div className='absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient' />
      <div className='absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient' />

    </div>

    <div className={`ss:hidden ${styles.flexCenter}`}>
      {/* <GetStarted /> */}
    </div>

  </section>
);
    };

export default Hero