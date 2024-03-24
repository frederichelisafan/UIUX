import React, { useState } from "react";
import VideoPlayer from "./VideoPlayer.js";
import "./leftarrow.css";
import Footer from "../component/Footer.js";

function UserInterface() {
  const [currentVideo, setCurrentVideo] = useState("");
  const handleVideoPlay = async (url) => {
    try {
      const videoId = new URL(url).searchParams.get("v");
      if (videoId) {
        setCurrentVideo(videoId);
      } else {
        console.error("Invalid YouTube URL");
      }
    } catch (error) {
      console.error("Error parsing YouTube URL:", error);
    }
  };

  return (
    <div>
      <nav className="flex justify-between px-20 py-4 items-center bg-white shadow">
        <img src="logoUI.png" alt="logo ui" />
        <div className="flex items-center">
          <ul className="flex items-center space-x-6 my-auto font-raleway cursor-pointer">
            <li className="font-semibold text-gray-700">Quiz</li>
            <li className="font-semibold text-gray-700">Materi</li>
            <li className="font-semibold text-gray-700">Leaderboard</li>
            <li className="font-semibold text-white bg-red-500 px-4 py-2 border rounded">
              Log out
            </li>

            {/* <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
            </li> */}
          </ul>
        </div>
      </nav>

      {/*  Main Content */}
      <div className="flex justify-center">
        {/* konten belajar */}
        <div className="flex">
          <div className="container">
            <h2 className="mt-14 font-semibold text-lg">
              Konten belajar
              <hr />
            </h2>

            {/* Youtube video button */}
            <div className="math font-raleway grid">
              <button
                className="border bg-transparent text-black grid"
                onClick={() =>
                  handleVideoPlay(
                    "https://www.youtube.com/watch?v=c9Wg6Cb_YlU&pp=ygUUbGVhcm4gdXNlciBpbnRlcmZhY2U%3D"
                  )
                }
              >
                <span className="text-start">
                  Using place value to add 3-digitn..
                </span>
                <div className="flex">
                  <svg
                    id="Layer_1"
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 122.88 111.34"
                    className="w-3 mr-2"
                    fill="grey"
                  >
                    <title>video</title>
                    <path d="M23.59,0h75.7a23.68,23.68,0,0,1,23.59,23.59V87.75A23.56,23.56,0,0,1,116,104.41l-.22.2a23.53,23.53,0,0,1-16.44,6.73H23.59a23.53,23.53,0,0,1-16.66-6.93l-.2-.22A23.46,23.46,0,0,1,0,87.75V23.59A23.66,23.66,0,0,1,23.59,0ZM54,47.73,79.25,65.36a3.79,3.79,0,0,1,.14,6.3L54.22,89.05a3.75,3.75,0,0,1-2.4.87A3.79,3.79,0,0,1,48,86.13V50.82h0A3.77,3.77,0,0,1,54,47.73ZM7.35,26.47h14L30.41,7.35H23.59A16.29,16.29,0,0,0,7.35,23.59v2.88ZM37.05,7.35,28,26.47H53.36L62.43,7.38v0Zm32,0L59.92,26.47h24.7L93.7,7.35Zm31.32,0L91.26,26.47h24.27V23.59a16.32,16.32,0,0,0-15.2-16.21Zm15.2,26.68H7.35V87.75A16.21,16.21,0,0,0,12,99.05l.17.16A16.19,16.19,0,0,0,23.59,104h75.7a16.21,16.21,0,0,0,11.3-4.6l.16-.18a16.17,16.17,0,0,0,4.78-11.46V34.06Z" />
                  </svg>
                  <p className="text-xs font-normal my-auto">1hr</p>
                </div>
              </button>
              <button
                className="border bg-transparent text-black grid"
                onClick={() =>
                  handleVideoPlay(
                    "https://www.youtube.com/watch?v=9McJ3GobPaY&list=PLSQl0a2vh4HDsruFoOhyeLDr4w1o9dhe6"
                  )
                }
              >
                <span className="text-start">
                  Addition and subtraction within..
                </span>
                <div className="flex">
                  <svg
                    id="Layer_1"
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 122.88 111.34"
                    className="w-3 mr-2"
                    fill="grey"
                  >
                    <title>video</title>
                    <path d="M23.59,0h75.7a23.68,23.68,0,0,1,23.59,23.59V87.75A23.56,23.56,0,0,1,116,104.41l-.22.2a23.53,23.53,0,0,1-16.44,6.73H23.59a23.53,23.53,0,0,1-16.66-6.93l-.2-.22A23.46,23.46,0,0,1,0,87.75V23.59A23.66,23.66,0,0,1,23.59,0ZM54,47.73,79.25,65.36a3.79,3.79,0,0,1,.14,6.3L54.22,89.05a3.75,3.75,0,0,1-2.4.87A3.79,3.79,0,0,1,48,86.13V50.82h0A3.77,3.77,0,0,1,54,47.73ZM7.35,26.47h14L30.41,7.35H23.59A16.29,16.29,0,0,0,7.35,23.59v2.88ZM37.05,7.35,28,26.47H53.36L62.43,7.38v0Zm32,0L59.92,26.47h24.7L93.7,7.35Zm31.32,0L91.26,26.47h24.27V23.59a16.32,16.32,0,0,0-15.2-16.21Zm15.2,26.68H7.35V87.75A16.21,16.21,0,0,0,12,99.05l.17.16A16.19,16.19,0,0,0,23.59,104h75.7a16.21,16.21,0,0,0,11.3-4.6l.16-.18a16.17,16.17,0,0,0,4.78-11.46V34.06Z" />
                  </svg>
                  <p className="text-xs font-normal my-auto">1hr</p>
                </div>
              </button>
              <button
                className="border bg-transparent text-black grid"
                onClick={() =>
                  handleVideoPlay(
                    "https://www.youtube.com/watch?v=9McJ3GobPaY&list=PLSQl0a2vh4HDsruFoOhyeLDr4w1o9dhe6"
                  )
                }
              >
                <span className="text-start">
                  Addition and subtraction within..
                </span>
                <div className="flex">
                  <svg
                    id="Layer_1"
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 122.88 111.34"
                    className="w-3 mr-2"
                    fill="grey"
                  >
                    <title>video</title>
                    <path d="M23.59,0h75.7a23.68,23.68,0,0,1,23.59,23.59V87.75A23.56,23.56,0,0,1,116,104.41l-.22.2a23.53,23.53,0,0,1-16.44,6.73H23.59a23.53,23.53,0,0,1-16.66-6.93l-.2-.22A23.46,23.46,0,0,1,0,87.75V23.59A23.66,23.66,0,0,1,23.59,0ZM54,47.73,79.25,65.36a3.79,3.79,0,0,1,.14,6.3L54.22,89.05a3.75,3.75,0,0,1-2.4.87A3.79,3.79,0,0,1,48,86.13V50.82h0A3.77,3.77,0,0,1,54,47.73ZM7.35,26.47h14L30.41,7.35H23.59A16.29,16.29,0,0,0,7.35,23.59v2.88ZM37.05,7.35,28,26.47H53.36L62.43,7.38v0Zm32,0L59.92,26.47h24.7L93.7,7.35Zm31.32,0L91.26,26.47h24.27V23.59a16.32,16.32,0,0,0-15.2-16.21Zm15.2,26.68H7.35V87.75A16.21,16.21,0,0,0,12,99.05l.17.16A16.19,16.19,0,0,0,23.59,104h75.7a16.21,16.21,0,0,0,11.3-4.6l.16-.18a16.17,16.17,0,0,0,4.78-11.46V34.06Z" />
                  </svg>
                  <p className="text-xs font-normal my-auto">1hr</p>
                </div>
              </button>
              <button
                className="border bg-transparent text-black grid"
                onClick={() =>
                  handleVideoPlay("https://www.youtube.com/watch?v=9hM32lsQ4aI")
                }
              >
                <span className="text-start">Adding 3-digit numbers</span>
                <div className="flex">
                  <svg
                    id="Layer_1"
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 122.88 111.34"
                    className="w-3 mr-2"
                    fill="grey"
                  >
                    <title>video</title>
                    <path d="M23.59,0h75.7a23.68,23.68,0,0,1,23.59,23.59V87.75A23.56,23.56,0,0,1,116,104.41l-.22.2a23.53,23.53,0,0,1-16.44,6.73H23.59a23.53,23.53,0,0,1-16.66-6.93l-.2-.22A23.46,23.46,0,0,1,0,87.75V23.59A23.66,23.66,0,0,1,23.59,0ZM54,47.73,79.25,65.36a3.79,3.79,0,0,1,.14,6.3L54.22,89.05a3.75,3.75,0,0,1-2.4.87A3.79,3.79,0,0,1,48,86.13V50.82h0A3.77,3.77,0,0,1,54,47.73ZM7.35,26.47h14L30.41,7.35H23.59A16.29,16.29,0,0,0,7.35,23.59v2.88ZM37.05,7.35,28,26.47H53.36L62.43,7.38v0Zm32,0L59.92,26.47h24.7L93.7,7.35Zm31.32,0L91.26,26.47h24.27V23.59a16.32,16.32,0,0,0-15.2-16.21Zm15.2,26.68H7.35V87.75A16.21,16.21,0,0,0,12,99.05l.17.16A16.19,16.19,0,0,0,23.59,104h75.7a16.21,16.21,0,0,0,11.3-4.6l.16-.18a16.17,16.17,0,0,0,4.78-11.46V34.06Z" />
                  </svg>
                  <p className="text-xs font-normal my-auto">1hr</p>
                </div>
              </button>
              <button
                className="border bg-transparent text-black mb-16 grid"
                onClick={() =>
                  handleVideoPlay(
                    "https://www.youtube.com/watch?v=ZgzpTx-s9Zo&list=PLSQl0a2vh4HDsruFoOhyeLDr4w1o9dhe6&index=5"
                  )
                }
              >
                <span className="text-start">Add 7 + 6</span>
                <div className="flex">
                  <svg
                    id="Layer_1"
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 122.88 111.34"
                    className="w-3 mr-2"
                    fill="grey"
                  >
                    <title>video</title>
                    <path d="M23.59,0h75.7a23.68,23.68,0,0,1,23.59,23.59V87.75A23.56,23.56,0,0,1,116,104.41l-.22.2a23.53,23.53,0,0,1-16.44,6.73H23.59a23.53,23.53,0,0,1-16.66-6.93l-.2-.22A23.46,23.46,0,0,1,0,87.75V23.59A23.66,23.66,0,0,1,23.59,0ZM54,47.73,79.25,65.36a3.79,3.79,0,0,1,.14,6.3L54.22,89.05a3.75,3.75,0,0,1-2.4.87A3.79,3.79,0,0,1,48,86.13V50.82h0A3.77,3.77,0,0,1,54,47.73ZM7.35,26.47h14L30.41,7.35H23.59A16.29,16.29,0,0,0,7.35,23.59v2.88ZM37.05,7.35,28,26.47H53.36L62.43,7.38v0Zm32,0L59.92,26.47h24.7L93.7,7.35Zm31.32,0L91.26,26.47h24.27V23.59a16.32,16.32,0,0,0-15.2-16.21Zm15.2,26.68H7.35V87.75A16.21,16.21,0,0,0,12,99.05l.17.16A16.19,16.19,0,0,0,23.59,104h75.7a16.21,16.21,0,0,0,11.3-4.6l.16-.18a16.17,16.17,0,0,0,4.78-11.46V34.06Z" />
                  </svg>
                  <p className="text-xs font-normal my-auto">1hr</p>
                </div>
              </button>
            </div>
          </div>
        </div>
        {/* end konten belajar */}

        {/* Watch and learn with video */}
        <div class="col-8 text-center">
          <h1 className="font-raleway mt-9 mb-3">Watch and Learn with Fun</h1>

          <div className="video-player">
            {currentVideo ? (
              <VideoPlayer videoId={currentVideo} />
            ) : (
              //   <p>Click on button to Play Video</p>
              <div>
                <p>Click on button to Play Video</p>
                <div id="arrowAnim">
                  <div class="arrowSliding">
                    <div class="arrow"></div>
                  </div>
                  <div class="arrowSliding delay1">
                    <div class="arrow"></div>
                  </div>
                  <div class="arrowSliding delay2">
                    <div class="arrow"></div>
                  </div>
                  <div class="arrowSliding delay3">
                    <div class="arrow"></div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div>
            <br />
            <br />
          </div>
        </div>
      </div>
      {/* end watch and learn */}
      <Footer />
    </div>
  );
}

export default UserInterface;
