/* eslint-disable react/prop-types */
import { deleteOneUser } from "../apis/UserApi";

const DeleteModal = ({ isOpen, onClose, onConfirm, userId }) => {
  if (!isOpen) return null;

  const handleConfirm = async () => {
    try {
      deleteOneUser(userId);
      onConfirm();
    } catch (error) {
      console.error("Error deleting record:", error);
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <div className="text-center">
          <p className="text-black p-3">
            Are you sure you want to delete the record?
          </p>
          <button
            className="bg-red-500 text-white px-4 py-2 rounded mr-2"
            onClick={handleConfirm}
          >
            Yes
          </button>
          <button
            className="bg-gray-300 text-gray-800 px-4 py-2 rounded"
            onClick={onClose}
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
