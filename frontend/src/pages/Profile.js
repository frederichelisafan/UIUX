import useAuth from "../store/useAuth";
import { SOAL_QUIZ } from "../Data/SoalQuiz";
import CONSTANTS from "../helpers/constants";

const Profile = () => {
  const { user } = useAuth((state) => state);
  const badge = Object.values(SOAL_QUIZ).filter(
    (val) => user.points[val.name] >= CONSTANTS.MINIMUM_POINTS
  );

  // console.log(badge);

  return (
    <>
      <div className="grow p-6 sm:p-12 dark:text-gray-800 md:mx-40 hero-bg rounded-xl mt-32">
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
              {user.username}
            </h4>
            <p className="text-[#818181] text-xs md:text-left">{user.email}</p>
            <p className="text-lg font-semibold mb-0 md:text-left">Statistik</p>
            <p className="dark:text-gray-600 md:text-left">
              Total Points: 1000
            </p>
          </div>
        </div>

        {/* Achievement badge */}
        <div className="text-center mt-10">
          <p className="text-xl">Achievement Badge</p>
          {badge.length > 0 ? (
            <div className="flex justify-center items-center gap-4 flex-wrap">
              {badge.map((item) => (
                <img
                  key={item.name}
                  src={item.badge}
                  alt={`badge-${item.label.replaceAll(" ", "-")}`}
                  className="w-36"
                />
              ))}
            </div>
          ) : (
            <p className="text-purple-500 font-bold">Not Available</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Profile;
