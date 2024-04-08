import { useContext, useEffect, useState } from "react";
import { postInvestorProfileImage } from "../apis/InvestorApi";
import { UserContext } from "../contexts/userContext";
import client from "../apis/ApiClient";
export const ServiceSection = () => {
  const [profileImage, setProfileImage] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [previewImage, setPreviewImage] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  // let [myNumber, setMyNumber] = useState(1);
  const [number, setNumber] = useState(1)
  const myUser = useContext(UserContext)

  useEffect(() => {
    console.log("In Service Section");
    (async ()=>{
        const res = await client.get(`/investor/${myUser?.userData.id}/profileImage`,{
          responseType: 'blob'
        })      
        setProfileImage(URL.createObjectURL(res.data))
      })()
      console.log(number)
  }, [number]);

  const handleFileChange = (event) => {
    setNumber((prev) => prev + 1);
    const file = event.target.files[0];
    console.log(file);
    setImageFile(file)

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
      const response = await postInvestorProfileImage(
        myUser?.userData.id,
        formData
      );
      console.log("Profile image updated successfully:", response.data);
      setNumber((prev) => prev + 1);
      closeModal();
    } catch (error) {
      console.error("Error updating profile image:", error);
      closeModal();
    }
  };

  return (
    <div className="tiles flex flex-row m-4 mt-10 w-500 border border-red rounded-xl h-80 p-4 shadow-inner shadow-white">
      <article className="tile flex flex-col justify-between mt-6 m-2 h-52 w-44 bg-olive-500 bg-[#e3ffa8] text-gray-900 rounded-lg p-4 relative transition-transform hover:-translate-y-5 focus-within:ring-2 focus-within:ring-gray-800 border border-gray-800 ">
        <label
          htmlFor="file-upload"
          className="cursor-pointer flex pt-5 items-center justify-center"
          onClick={() => setShowModal(true)}
        >
          {profileImage ? (
            <img
              src={profileImage}
              alt="Profile"
              className="object-contain rounded-full"
            />
          ) : (
            <div className="w-12 h-12 rounded-full flex items-center justify-center text-gray-900 whitespace-nowrap">
              Upload Profile Pic
            </div>
          )}
        </label>
      </article>
      <div className="flex flex-col text-left ml-10 p-4">
        <span className="text-lg align-start font-semibold p-2 text-gray-500 hover:text-cyan-300">
          {"Name : "}
          {myUser?.userData.investorName}
        </span>
        <span className="text-lg align-start font-semibold p-2 text-gray-500 hover:text-cyan-300">
          {"Email : "}
          {myUser?.userData.investorEmail}
        </span>
        <span className="text-lg align-start font-semibold p-2 text-gray-500 hover:text-cyan-300">
          {"Date of Birth : "}
          {myUser?.userData.investorDob}
        </span>
        <span className="text-lg align-start font-semibold p-2 text-gray-500 text-wrap hover:text-cyan-300">
          {"Address : "}
          {myUser?.userData.investorAddress}
        </span>
        <span className="text-lg align-start font-semibold p-2 text-gray-500 hover:text-cyan-300">
          {"Phone Number : "}
          {myUser?.userData.investorPhoneNumber}
        </span>
      </div>
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
    </div>
  );
};
