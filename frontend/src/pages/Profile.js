import { useState } from "react";

const Profile = () => {
  const [badge, setBadge] = useState("");

  return (
    <>
      <div className="p-6 sm:p-12 dark:text-gray-800 mx-40 hero-bg rounded-xl mt-32">
        <div className="flex space-y-4 md:space-y-0 md:space-x-6 md:flex-row justify-center">
          <img
            src="https://source.unsplash.com/75x75/?portrait"
            alt=""
            className="self-center flex-shrink-0 w-32 h-32 border rounded-full md:justify-self-start dark:bg-gray-500 dark:border-gray-300"
          />
          <div className="flex flex-col">
            <h4 className="text-lg font-bold text-left mb-0" id="profile-name">
              Frederich Elisafan
            </h4>
            <p className="text-[#818181] text-xs">
              frederich.elisafan@gmail.com
            </p>
            <p className="text-lg font-semibold mb-0">Statistik</p>
            <p className="dark:text-gray-600">Total Points: 1000</p>
          </div>
        </div>

        {/* Achievement badge */}
        <div className="text-center mt-10">
          <p className="text-xl">Achievement Badge</p>
          {badge ? (
            <p>Image badge</p>
          ) : (
            <p className="text-purple-500 font-bold">Not Available</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Profile;
