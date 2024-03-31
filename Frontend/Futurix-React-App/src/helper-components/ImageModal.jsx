import React, { useContext, useState } from 'react';
import { postProfileImage } from '../apis/UserApi';
import { UserContext } from '../contexts/userContext';

const ImageModal = ({ showModal, setShowModal }) => {

  const [imageFile, setImageFile] = useState(null);
  const myUser = useContext(UserContext)

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setImageFile(file);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleSubmit = async (event) => {
    
    event.preventDefault();

    try {
      const formData = new FormData();
      formData.append('image', imageFile);

      const response = await postProfileImage(myUser.userData.id, formData);

      console.log('Profile image updated successfully:', response.data);

      closeModal()
      // Optionally, reset the form or perform any other actions after successful upload
    } catch (error) {
      console.error('Error updating profile image:', error);
      closeModal()
      // Optionally, display an error message or handle the error in another way
    }
  };


  return (
    <>
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <form onSubmit={handleSubmit} method='GET' className="bg-white p-8 rounded-lg shadow-lg w-1/2">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Upload Profile Image</h2>
              <button
                className="text-gray-500 hover:text-gray-700"
                onClick={closeModal}
              >
                Close
              </button>
            </div>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="mb-4"
              name='image'
            />
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              type='submit'
            >
              Save
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default ImageModal;