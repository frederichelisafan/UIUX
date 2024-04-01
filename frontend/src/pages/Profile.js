import { useState } from "react";

const Profile = () => {
  const [badge, setBadge] = useState("");

  return (
    <>
      <div className="p-6 sm:p-12 dark:text-gray-800 md:mx-40 hero-bg rounded-xl mt-32">
        <div className="flex flex-col md:space-y-0 md:space-x-6 justify-center md:flex-row">
          <img
            src=""
            alt=""
            className="self-center flex-shrink-0 w-32 h-32 border rounded-full md:justify-self-start dark:bg-gray-500 dark:border-gray-300"
          />
          <div className="flex flex-col text-center">
            <h4
              className="text-lg font-bold mb-0 mt-3 md:text-left"
              id="profile-name"
            >
              Frederich Elisafan
            </h4>
            <p className="text-[#818181] text-xs md:text-left">
              frederich.elisafan@gmail.com
            </p>
            <p className="text-lg font-semibold mb-0 md:text-left">Statistik</p>
            <p className="dark:text-gray-600 md:text-left">
              Total Points: 1000
            </p>
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
