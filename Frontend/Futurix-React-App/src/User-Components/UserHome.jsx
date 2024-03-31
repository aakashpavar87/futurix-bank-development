/*
import React, { useContext, useEffect, useState } from 'react'
import styles from '../style'
import { discount } from '../assets'
import { robot } from '../assets'
import { Business, Footer, Navbar } from '../components'
import ImageModal from '../helper-components/ImageModal'
import { UserContext } from '../contexts/userContext'
import { ladyAvatar, manAvatar } from '../assets'
import { getProfileImageById } from '../apis/UserApi'
import UserDetails from './UserDetails'

const UserHome = () => {
    const [showModal, setShowModal] = useState(false);
    const myUser = useContext(UserContext)
    const defaultAvatar = myUser && myUser.userData && myUser.userData.gender === 'male' ? manAvatar : ladyAvatar; // Conditional check

    const [userImage, setUserImage] = useState(defaultAvatar); // Initial value set to default avatar

    useEffect(() => {
        if (myUser && myUser.userData && myUser.userData.profile !== null) {
            showUserImage();
        }
    }, [showUserImage]);

    async function showUserImage() {
        try {
            let image = await getProfileImageById(myUser.userData.id);
            setUserImage(URL.createObjectURL(image.data))
        } catch (error) {
            console.error('Error fetching profile image:', error);
        }
    }

    return (
        <>
            <div className="bg-primary w-full overflow-hidden">
                <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                    <div className={`${styles.boxWidth}`}>
                        <Navbar isUser />
                    </div>
                </div>
                <ImageModal showModal={showModal} setShowModal={setShowModal} />
                <div className={`bg-primary ${styles.flexStart}`}>
                    <div className={`${styles.boxWidth}`}>
                        <section id='userHome' className={`flex md:flex-row flex-col ${styles.paddingY}`} >Hero

                            <div className={`flex-1 ${styles.flexStart} w-[40%] flex-col xl:px-0 sm:px-16 px-6`}>
                                <div className="flex flex-row just-between items-center w-full">
                                    <img
                                        src={
                                            userImage !== null
                                                ? userImage // Assuming it's a PNG image
                                                : myUser.userData.gender === 'male'
                                                    ? manAvatar
                                                    : ladyAvatar
                                        }
                                        onClick={() => setShowModal(true)}
                                        className="rounded-full w-72 h-72"
                                    />
                                </div>
                                <div className="flex flex-row items-center py[6px] px-4 bg-discount-gradient rounded-[10px] mb-2 ml-20">

                                    <img src={discount} className="w-[32px] h-[32px]" />
                                    <p className={`${styles.paragraph} ml-2`}>

                                        <span className='text-white'>Bharat </span>
                                        
                                        <span className='text-white'>Kumavat  </span>
                                        

                                    </p>
                                </div>
                            </div>

                            <div className={`flex-1 flex ${styles.flexCenter} w-[60%] md:my-0 my-10 relative`}>
                                {/* <img src={robot} className="w-[100%] h-[100%] relative z-[5]" /> *///}
//                                 <UserDetails />
//                                 <div className='absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient' />
//                                 <div className='absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient' />
//                                 <div className='absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient' />

//                             </div>
//                         </section>
//                     </div>
//                 </div>
//                 <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
//                     <div className={`${styles.boxWidth}`}>
//                         <Business />
//                         <Footer />
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default UserHome

import React, { useContext, useEffect, useState } from 'react';
import styles from '../style';
import { discount } from '../assets';
import { robot } from '../assets';
import { Business, Footer, Navbar } from '../components';
import ImageModal from '../helper-components/ImageModal';
import { UserContext } from '../contexts/userContext';
import { ladyAvatar, manAvatar } from '../assets';
import { getProfileImageById } from '../apis/UserApi';
import UserDetails from './UserDetails';
import UserKyc from './UserKyc';
import {logo} from "../assets"
import { createOrder } from '../apis/InvestorApi';

const ImageSection = React.memo(({ userImage, showModal, setShowModal }) => {
    return (
        <div className={`flex-1 ${styles.flexStart} w-[40%] flex-col xl:px-0 sm:px-16 px-6`}>
            <div className="flex flex-row just-between items-center w-full">
                <img
                    src={userImage !== null ? userImage : manAvatar} // Assuming it's a PNG image
                    onClick={() => setShowModal(true)}
                    className="rounded-full w-72 h-72"
                />
            </div>
            <div className="flex flex-row items-center py[6px] px-4 bg-discount-gradient rounded-[10px] mb-2 ml-20">
                <img src={discount} className="w-[32px] h-[32px]" />
                <p className={`${styles.paragraph} ml-2`}>
                    <span className='text-white'>Bharat </span>
                    <span className='text-white'>Kumavat  </span>
                </p>
            </div>
        </div>
    );
});

const UserHome = () => {
    const [showModal, setShowModal] = useState(false);
    const myUser = useContext(UserContext);
    const defaultAvatar = myUser && myUser.userData && myUser.userData.gender === 'male' ? manAvatar : ladyAvatar;
    const [userImage, setUserImage] = useState(defaultAvatar);
    const [sendAmount, setSendAmount] = useState();
    

    const loadScript = (src)=> {
        return new Promise((resolve) => {
            const script = document.createElement("script");
            script.src = src;
            script.onload = () => {
                resolve(true);
            };
            script.onerror = () => {
                resolve(false);
            };
            document.body.appendChild(script);
        });
    }

    const displayRazorpay = async () => {
        const res = await loadScript(
            "https://checkout.razorpay.com/v1/checkout.js"
        );

        if (!res) {
            alert("Razorpay SDK failed to load. Are you online?");
            return;
        }

        let orderData = {
            customerName:"Bharat",
            email:"bharat@gmail.com",
            phoneNumber:"9999999999",
            amount: Number.parseInt(sendAmount)
          }
        const result = await createOrder(orderData);

        if (!result) {
            alert("Server error. Are you online?");
            return;
        }

        const { secretKey,applicationFee: amount, razorpayOrderId: order_id } = result.data;

        const options = {
            key: secretKey || "rzp_test_lbJvn1SAUOyaff", // Enter the Key ID generated from the Dashboard
            amount: amount+"00" || "20000",
            currency: "INR",
            name: "Futurix Bank",
            description: "Test Transaction",
            image: { logo },
            order_id: order_id || "order_Nt2JIRUUGBKDa1",
            handler: async function (response) {
                const data = {
                    orderCreationId: order_id || "order_Nt2JIRUUGBKDa1",
                    razorpayPaymentId: response.razorpay_payment_id,
                    razorpayOrderId: response.razorpay_order_id,
                    razorpaySignature: response.razorpay_signature,
                };

                alert("Your Payment Successfully completed !!!")
            },
            prefill: {
                name: "Aakash Pavar",
                email: "aakashpavar87@gmail.com",
                contact: "9999999999",
            },
            notes: {
                address: "Aakash Pavar Sarangpur Office",
            },
            theme: {
                color: "#61dafb",
            },
        };

        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
    }

    useEffect(() => {
        if (myUser && myUser.userData && myUser.userData.profile !== null) {
            showUserImage();
        }
    },[]);

    async function showUserImage() {
        try {
            let image = await getProfileImageById(myUser.userData.id);
            setUserImage(URL.createObjectURL(image.data))
        } catch (error) {
            console.error('Error fetching profile image:', error);
        }
    }

    return (
        <>
            <div className="bg-primary w-full overflow-hidden">
                <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                    <div className={`${styles.boxWidth}`}>
                        <Navbar isUser />
                    </div>
                </div>
                <ImageModal showModal={showModal} setShowModal={setShowModal} />
                <div className={`bg-primary ${styles.flexStart}`}>
                    <div className={`${styles.boxWidth}`}>
                        <section id='userHome' className={`flex md:flex-row flex-col ${styles.paddingY}`} >
                            <ImageSection userImage={userImage} showModal={showModal} setShowModal={setShowModal} />
                            <div className={`flex-1 flex ${styles.flexCenter} w-[60%] md:my-0 my-10 relative`}>
                                <UserDetails />
                                <div className='absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient' />
                                <div className='absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient' />
                                <div className='absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient' />
                            </div>
                        </section>
                    </div>
                </div>
                <div className="flex justify-center items-center gap-6">
                    <input type="text" className='w-52 p-2 text-gray-800 border border-gray-600 rounded-md' placeholder='Enter Your Amount' onChange={(e)=>setSendAmount(e.target.value)} />
                    <button onClick={()=>displayRazorpay()} className='p-2 rounded-lg bg-sky-800 text-neutral-400 text-xl shadow-md'>Pay</button>
                </div>
                <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
                    <div className={`${styles.boxWidth}`}>
                        <Business />
                        <Footer />
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserHome;
