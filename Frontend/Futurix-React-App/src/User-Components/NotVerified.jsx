/* eslint-disable react/prop-types */
import { CheckCircle, XCircle } from "react-feather"; // Import icons from Feather Icons

const NotVerifiedText = ({ verified }) => {
  return (
    <div className="flex items-center">
      {verified ? (
        <CheckCircle className="text-green-500 mr-1" />
      ) : (
        <XCircle className="text-red-500 mr-1" />
      )}
      <span className="text-gray-700">
        {verified ? "Verified" : "Not Verified"}
      </span>
    </div>
  );
};

export default NotVerifiedText;
