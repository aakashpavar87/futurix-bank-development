import { useState } from "react";
export const ServiceSection = () => {
    const [profileImage, setProfileImage] = useState(null);

    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        if (selectedFile) {
            const reader = new FileReader();
            reader.onload = () => {
                setProfileImage(reader.result);
            };
            reader.readAsDataURL(selectedFile);
        }
    };

    return (
        <div className="tiles flex flex-row m-4 mt-10 w-500 border border-red rounded-xl h-80 p-4 shadow-inner shadow-white">
            <article className="tile flex flex-col justify-between mt-6 m-2 h-52 w-44 bg-olive-500 bg-[#e3ffa8] text-gray-900 rounded-lg p-4 relative transition-transform hover:-translate-y-5 focus-within:ring-2 focus-within:ring-gray-800 border border-gray-800 ">
                <label htmlFor="file-upload" className="cursor-pointer flex pt-5 items-center justify-center">
                    {profileImage ? (
                        <img src={profileImage} alt="Profile" className="object-contain rounded-full" />
                    ) : (
                        <div className="w-12 h-12 rounded-full flex items-center justify-center text-gray-900 whitespace-nowrap">Upload Profile Pic</div>
                    )}
                </label>
                <input id="file-upload" type="file" className="absolute top-0 left-0 opacity-0 w-full h-full cursor-pointer" onChange={handleFileChange} accept="image/*" />
            </article>
            <div className="flex flex-col text-left ml-10 p-4">
                <span className="text-lg align-start font-semibold p-2 text-gray-500 hover:text-cyan-300"> John Doe</span>
                <span className="text-lg align-start font-semibold p-2 text-gray-500 hover:text-cyan-300">john.doe@example.com</span>
                <span className="text-lg align-start font-semibold p-2 text-gray-500 hover:text-cyan-300">30-10-2002</span>
                <span className="text-lg align-start font-semibold p-2 text-gray-500 hover:text-cyan-300">john.doe@example.com</span>

            </div>
        </div>
    );


}