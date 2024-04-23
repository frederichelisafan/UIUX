import { useEffect, useState } from "react";
import { getAllUsers } from "../service/auth";
import LeaderboardCard from "../component/LeaderboardCard";
import numeral from "numeral";
import { BiSolidUserCircle } from "react-icons/bi";

const Leaderboard = () => {
  const [allUsers, setAllUsers] = useState(null);

  function reducePoints(obj) {
    return Object.values(obj.points).reduce(
      (total, current) => total + current
    );
  }

  async function getUsers() {
    await getAllUsers()
      .then((res) => {
        setAllUsers(res.sort((a, b) => reducePoints(b) - reducePoints(a)));
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    getUsers();
  }, []);

  if (!allUsers) {
    return (
      <>
        <div className="grow text-center">loading...</div>
      </>
    );
  }

  return (
    <div className="grow">
      <p className="mt-24 text-[#443091] mb-10 text-4xl font-bold font-inter text-center">
        Leaderboard!
      </p>
      {/* Peringkat 2 */}
      <svg
        className="absolute"
        width="400"
        height="400"
        viewBox="0 0 374 557"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="76" cy="291" r="266" fill="#AD8FEF" fillOpacity="0.15" />
        <circle cx="108" cy="266" r="266" fill="#AD8FEF" fillOpacity="0.15" />
      </svg>

      <div className="grid grid-cols-1 grid-rows-1 md:grid-cols-3 place-items-center font-inter">
        {/* Peringkat 2 */}
        {allUsers[1] && (
          <LeaderboardCard
            name={allUsers[1].username}
            email={allUsers[1].email}
            points={numeral(reducePoints(allUsers[1])).format("0,0.00")}
            position={2}
          />
        )}
        {/* Peringkat 1 */}
        {allUsers[0] && (
          <LeaderboardCard
            name={allUsers[0].username}
            email={allUsers[0].email}
            points={numeral(reducePoints(allUsers[0])).format("0,0.00")}
            position={1}
          />
        )}
        {/* Peringkat 3 */}
        {allUsers[2] && (
          <LeaderboardCard
            name={allUsers[2].username}
            email={allUsers[2].email}
            points={numeral(reducePoints(allUsers[2])).format("0,0.00")}
            position={3}
          />
        )}
      </div>

      {/* Peringkat 4 dan seterusnya */}
      {allUsers.slice(3, 10).map((user, index) => (
        <div className="grid lg:grid-cols-6 place-items-center border-b-4 md:grid-cols-1 sm:grid-cols-1 mt-20 font-inter">
          <p className="text-xl font-bold">#{index + 4}</p>
          <BiSolidUserCircle className="w-12 h-12 mb-3 mt-3 rounded-full shadow-lg" />
          <p className="text-md font-bold">{user.username}</p>
          <p className="text-xs text-gray-500">{user.email}</p>

          <p className="text-sm font-bold">
            {numeral(reducePoints(user)).format("0,0.00")} <br />{" "}
            <span className="font-normal">Points</span>
          </p>
        </div>
      ))}
    </div>
  );
};

export default Leaderboard;
