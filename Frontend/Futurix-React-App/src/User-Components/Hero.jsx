/* eslint-disable react-hooks/exhaustive-deps */
import styles from "../style";
import { discount } from "../assets";
import { Link, useLocation, useNavigate } from "react-router-dom";

import "./user.css";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../contexts/userContext";
import client from "../apis/ApiClient";
import { getUserKyc, postProfileImage } from "../apis/UserApi";
import { ToastContainer, toast } from "react-toastify";

export const Hero = () => {
  const navigate = useNavigate();
  const [profileImage, setProfileImage] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [previewImage, setPreviewImage] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [number, setNumber] = useState(1);
  const myUser = useContext(UserContext);

  const { state } = useLocation();

  const [userKyc, setUserKyc] = useState({});

  const showToastMessage = (msg, isError) => {
    if (!isError) toast.success(msg);
    else toast.error(msg);
  };

  useEffect(() => {
    console.log("In User Section");
    console.log(myUser);
    state && showToastMessage(state, false);
    (async () => {
      try {
        const id = myUser?.userData?.id
          ? myUser?.userData?.id
          : myUser?.userData?.id;

        getUserKyc(myUser?.userData?.id).then((res) => setUserKyc(res.data));
        const res = await client.get(`/users/${id}/profileImage`, {
          responseType: "blob",
        });
        setProfileImage(URL.createObjectURL(res.data));
      } catch (error) {
        showToastMessage(error.response, true);
        console.log("Error from Hero", error.response);
      }
    })();
    console.log(number);
  }, [number]);

  const handleFileChange = (event) => {
    setNumber((prev) => prev + 1);
    const file = event.target.files[0];
    console.log(file);
    setImageFile(file);

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setPreviewImage(null);
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData();
      formData.append("image", imageFile);
      const response = await postProfileImage(myUser?.userData.id, formData);
      console.log("Profile image updated successfully:", response.data);
      setNumber((prev) => prev + 1);
      closeModal();
    } catch (error) {
      console.error("Error updating profile image:", error);
      closeModal();
    }
  };

  const onsubmit = () => {
    navigate("/profile/update");
  };

  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col  p-2 ${styles.paddingY}`}
    >
      <ToastContainer />
      <div className="flex flex-col gap-5 items-center justify-center">
        <article className="flex ml-12 flex-col justify-between h-fit w-44 bg-olive-500 bg-[#9eedf0] text-gray-900 rounded-lg p-4 relative transition-transform hover:-translate-y-5 focus-within:ring-2 focus-within:ring-gray-800 border border-gray-800 ">
          <label
            htmlFor="file-upload"
            className="cursor-pointer flex pt-5 items-center justify-center"
            onClick={() => setShowModal(true)}
          >
            {profileImage ? (
              <img
                src={profileImage}
                alt="Profile"
                className="object-contain h-fit rounded-full"
              />
            ) : (
              <div className="w-12 h-12 rounded-full flex items-center justify-center text-gray-900 whitespace-nowrap">
                Upload Profile Pic
              </div>
            )}
          </label>
        </article>
        <div className="flex flex-row items-center py[6px] px-4 bg-discount-gradient rounded-[10px] mb-2 ml-20">
          <img src={discount} className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">{myUser?.userData?.name} </span>
            {/* type of {" "} */}
            {/* for small Businesses */}
          </p>
        </div>
      </div>
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        {/* <h1 className='font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full'>
        Banking Method
      </h1> */}
      </div>

      <div className={`flex flex-col mx-3 md:my-0 my-10 relative`}>
        <p
          className={`${styles.paragraph} w-[100%] h-[100%] max-w-[470px] mt-5`}
        >
          {/* <b>Account Number </b> : 123123123123 <br /> */}
          {/* <b>Address :</b> C-402 , Shyamved Saffire , Zundal <br /> */}
          {/* <b>City :</b>Gandhinagar <br /> */}
          {/* <b>State :</b> Gujarat <br /> */}
          {myUser?.userData?.address && (
            <>
              <b>Address :</b> C-402 , Shyamved Saffire , Zundal <br />
              <b>City :</b>Gandhinagar <br />
              <b>State :</b> Gujarat <br />
            </>
          )}
          {myUser?.userData?.account && (
            <>
              <b>Account Number </b> : 123123123123 <br />
              <b>IFSC Code </b> : FUTU7777001 <br />
            </>
          )}
          <b>Phone No:</b>
          {myUser?.userData?.phone}
          <br />
          <b>Email :</b> {myUser?.userData?.email}
          <br />
          <b>Date of Birth :</b> {myUser?.userData?.dob} <br />
          <br />
        </p>
        <button
          className="bg-transparent hover:bg-blue-700 text-white font-bold py-2 px-4 roundedo"
          onClick={onsubmit}
        >
          Edit
        </button>

        {/* <img src={robot} className="w-[100%] h-[100%] relative z-[5]" /> */}

        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
      </div>
      {/* chakedu complete kyc maate */}
      {(!myUser?.userData?.userKycDocument || !userKyc) && (
        <div
          className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}
          data-aos="zoom-in"
        >
          <div
            className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}
          >
            <div className={`${styles.flexStart} flex-row`}>
              <p className="font-poppins font-medium text-[18px] leading-[23px] mr-1">
                <Link to={"/profile/address"}>
                  <span className="text-gradient">Complete </span>
                </Link>
              </p>
            </div>

            <p className="font-poppins font-medium text-[18px] leading-[23px] mr-2">
              <Link to={"/profile/address"}>
                <span className="text-gradient">Your KYC</span>
              </Link>
            </p>
          </div>
        </div>
      )}

      <div className={`ss:hidden ${styles.flexCenter}`}></div>
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 w-[100%] h-[100%] flex items-center justify-center z-50">
          <form
            onSubmit={handleSubmit}
            method="GET"
            className="bg-white flex flex-col justify-between items-center h-1/2 p-8 rounded-lg shadow-lg w-1/2"
          >
            <div className="flex justify-between items-center w-full mb-4">
              <h2 className="text-lg font-semibold">Upload Profile Image</h2>
              <button
                className="text-gray-500 hover:text-gray-700"
                onClick={closeModal}
              >
                Close
              </button>
            </div>
            <div className="flex justify-center items-center w-[70%] h-1/3">
              <img src={previewImage} className="h-[140%] w-[50%]" alt="" />
            </div>
            <div className="flex">
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="mb-4"
                name="image"
              />
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                type="submit"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      )}
    </section>
  );
};
