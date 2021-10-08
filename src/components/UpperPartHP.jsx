import React from "react";
import booksimg from "../assets/booksimg.jpg";
import HomePage from "./HomePage";

const UpperPartHP = () => {
  return (
    <>
      <div className="con text-white">
        <nav className="navbar sticky-top navbar-light bg-trans">
          <div className="ml-2">
            <a href="./Album page.html">
              <button className="btn text-white" type="button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  data-name="Layer 1"
                  viewBox="0 0 100 100"
                  x="0px"
                  y="0px"
                  fill="white"
                  transform="rotate(180)"
                >
                  <path d="M24.42,99.16a2.84,2.84,0,0,0,2,.84,2.74,2.74,0,0,0,2-.84L75.58,52a2.81,2.81,0,0,0,0-4L28.42.83a2.83,2.83,0,1,0-4,4L69.58,50,24.42,95.16A2.82,2.82,0,0,0,24.42,99.16Z" />
                </svg>
              </button>
            </a>
            <a href="./artist.html">
              <button
                className="btn text-white"
                type="button"
                style={{ width: 40 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  data-name="Layer 1"
                  viewBox="0 0 100 100"
                  x="0px"
                  y="0px"
                  fill="white"
                >
                  <path d="M24.42,99.16a2.84,2.84,0,0,0,2,.84,2.74,2.74,0,0,0,2-.84L75.58,52a2.81,2.81,0,0,0,0-4L28.42.83a2.83,2.83,0,1,0-4,4L69.58,50,24.42,95.16A2.82,2.82,0,0,0,24.42,99.16Z" />
                </svg>
              </button>
            </a>
          </div>
          <div
            className="dropdown d-flex justify-content-end"
            style={{ marginTop: 10 }}
          >
            <button
              className="btn-user btn-dark badge-pill dropdown-toggle"
              type="button"
              id="dropdownMenu2"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <img id="profilePic" src={booksimg} />
              Username
            </button>
            <div
              className="dropdown-menu bg-dark"
              aria-labelledby="dropdownMenu2"
            >
              <button
                className="dropdown-item topdropdwon text-white"
                type="button"
              >
                Account
              </button>
              <button
                className="dropdown-item topdropdwon text-white"
                type="button"
              >
                Profile
              </button>
              <button
                onclick="location.href='https://www.spotify.com/us/premium/'"
                className="dropdown-item topdropdwon text-white"
                type="button"
              >
                Upgrade to Permium
              </button>
              <button
                className="dropdown-item topdropdwon text-white"
                type="button"
              >
                Settings
              </button>
              <div className="dropdown-divider" />
              <button
                onclick="location.href='https://support.spotify.com/us/article/updating-spotify/'"
                className="dropdown-item topdropdwon text-white"
                type="button"
              >
                Update Spotify now
              </button>
              <button
                onclick="location.href='profile.html'"
                className="dropdown-item topdropdwon text-white"
                type="button"
              >
                Log out
              </button>
            </div>
          </div>
        </nav>
        <div className="ml-4">
          <h3>Good morning</h3>
        </div>
        <div className="d-flex justify-content-between">
          <div className="music-card ml-4">
            <div className="media d-flex">
              <img src={booksimg} className="mr-3 img-fluid img1" alt="..." />
              <div className="media-body d-flex align-self-center">
                <h6 className="mt-0">KOD</h6>
              </div>
            </div>
          </div>
          <div className="music-card ml-3 d-none d-md-block">
            <div className="media gm flex-fill">
              <img src={booksimg} className="mr-3 img-fluid img1" alt="..." />
              <div className="media-body d-flex align-self-center">
                <h6 className="mt-0">All eyez on me</h6>
              </div>
            </div>
          </div>
          <div className="music-card ml-3 d-none d-lg-block">
            <div className="media gm">
              <img src={booksimg} className="mr-3 img-fluid img1" alt="..." />
              <div className="media-body d-flex align-self-center">
                <h6 className="mt-0">Psychodrama</h6>
              </div>
            </div>
          </div>
          <div className="music-card ml-3 d-none d-xl-block">
            <div className="media gm">
              <img src={booksimg} className="mr-3 img-fluid img1" alt="..." />
              <div className="media-body d-flex align-self-center">
                <h6 className="mt-0">Ready to die</h6>
              </div>
            </div>
          </div>
          <div className="music-card ml-3 mr-3 d-none d-sm-block">
            <div className="media gm">
              <img src={booksimg} className="mr-3 img-fluid img1" alt="..." />
              <div className="media-body d-flex align-self-center">
                <h6 className="mt-0">Sad</h6>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex mt-3">
          <div className="music-card ml-4">
            <div className="media gm">
              <img src={booksimg} className="mr-3 img-fluid img1" alt="..." />
              <div className="media-body d-flex align-self-center">
                <h6 className="mt-0">Illmatic</h6>
              </div>
            </div>
          </div>
          <div className="music-card ml-3 d-none d-md-block">
            <div className="media gm">
              <img src={booksimg} className="mr-3 img-fluid img1" alt="..." />
              <div className="media-body d-flex align-self-center">
                <h6 className="mt-0">4 your eyez only</h6>
              </div>
            </div>
          </div>
          <div className="music-card ml-3 d-none d-lg-block">
            <div className="media gm">
              <img src={booksimg} className="mr-3 img-fluid img1" alt="..." />
              <div className="media-body d-flex align-self-center">
                <h6 className="mt-0">Legends never die</h6>
              </div>
            </div>
          </div>
          <div className="music-card ml-3 d-none d-xl-block">
            <div className="media gm">
              <img src={booksimg} className="mr-3 img-fluid img1" alt="..." />
              <div className="media-body d-flex align-self-center">
                <h6 className="mt-0">Don't smile at me</h6>
              </div>
            </div>
          </div>
          <div className="music-card ml-3 mr-3 d-none d-sm-block">
            <div className="media gm">
              <img src={booksimg} className="mr-3 img-fluid img1" alt="..." />
              <div className="media-body d-flex align-self-center">
                <h6 className="mt-0">Konnichiwa</h6>
              </div>
            </div>
          </div>
        </div>
        <HomePage />
      </div>
    </>
  );
};
export default UpperPartHP;
