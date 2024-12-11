import React, { useState } from "react";
import { BiCaretDown } from "react-icons/bi";

const UserProfile = ({ userInfo, signIn }) => {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => setShowPopup(!showPopup);

  return (
    <div>
      {userInfo ? (
        <div
          className="flex items-center px-2 border border-transparent hover:border-white cursor-pointer duration-300 h-[70%] gap-1"
        >
          <img
            src={userInfo.image || "/default-profile.png"}
            alt="userImage"
            className="w-8 h-8 rounded-full object-cover"
          />
          <div className="text-xs text-gray-100 flex flex-col justify-between">
            <p className="text-white font-bold">{userInfo.name}</p>
            <p>{userInfo.email}</p>
          </div>
          <a 
            href="#!" 
            onClick={(e) => {
              e.preventDefault(); // Prevent default anchor behavior
              togglePopup(); // Toggle the popup visibility
            }} 
            className="ml-2 text-blue-400 hover:underline"
          >
            More Info
          </a>
        </div>
      ) : (
        <div
          onClick={() => signIn()}
          className="text-xs text-gray-100 flex flex-col justify-center px-2 border border-transparent hover:border-white cursor-pointer duration-300 h-[70%]"
        >
          <p>Hello, sign in</p>
          <p className="text-white font-bold flex">
            Account & Lists{" "}
            <span>
              <BiCaretDown />
            </span>
          </p>
        </div>
      )}

      {/* Popup Component */}
      {showPopup && (
        <div className="absolute top-16 right-4 bg-white border border-gray-300 rounded-lg shadow-lg w-64 p-4 z-50">
          <button
            className="absolute top-2 right-2 text-gray-500 hover:text-black"
            onClick={togglePopup}
          >
            ✖
          </button>
          <h3 className="text-lg font-bold mb-2">User Details</h3>
          <p><strong>Name:</strong> {userInfo?.name}</p>
          <p><strong>Email:</strong> {userInfo?.email}</p>
          <p><strong>Role:</strong> User</p>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
