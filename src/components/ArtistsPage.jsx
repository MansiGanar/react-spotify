import React from "react";
import booksimg from "../assets/booksimg.jpg";

const ArtistsPage = () => {
  return (
    <>
      <div className="container-fluid general">
        <div className="row">
          {/* side bar */}
          <div className="col-2 d-none d-lg-inline">
            <div className="row">
              {/*?xml version="1.0" encoding="UTF-8" standalone="no"?*/}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                style={{ height: 35, width: 100, margin: 20 }}
                viewBox="0 0 559 168"
              >
                <path
                  fill="white"
                  d="m83.996 0.277c-46.249 0-83.743 37.493-83.743 83.742 0 46.251 37.494 83.741 83.743 83.741 46.254 0 83.744-37.49 83.744-83.741 0-46.246-37.49-83.738-83.745-83.738l0.001-0.004zm38.404 120.78c-1.5 2.46-4.72 3.24-7.18 1.73-19.662-12.01-44.414-14.73-73.564-8.07-2.809 0.64-5.609-1.12-6.249-3.93-0.643-2.81 1.11-5.61 3.926-6.25 31.9-7.288 59.263-4.15 81.337 9.34 2.46 1.51 3.24 4.72 1.73 7.18zm10.25-22.802c-1.89 3.072-5.91 4.042-8.98 2.152-22.51-13.836-56.823-17.843-83.448-9.761-3.453 1.043-7.1-0.903-8.148-4.35-1.04-3.453 0.907-7.093 4.354-8.143 30.413-9.228 68.222-4.758 94.072 11.127 3.07 1.89 4.04 5.91 2.15 8.976v-0.001zm0.88-23.744c-26.99-16.031-71.52-17.505-97.289-9.684-4.138 1.255-8.514-1.081-9.768-5.219-1.254-4.14 1.08-8.513 5.221-9.771 29.581-8.98 78.756-7.245 109.83 11.202 3.73 2.209 4.95 7.016 2.74 10.733-2.2 3.722-7.02 4.949-10.73 2.739zm94.56 3.072c-14.46-3.448-17.03-5.868-17.03-10.953 0-4.804 4.52-8.037 11.25-8.037 6.52 0 12.98 2.455 19.76 7.509 0.2 0.153 0.46 0.214 0.71 0.174 0.26-0.038 0.48-0.177 0.63-0.386l7.06-9.952c0.29-0.41 0.21-0.975-0.18-1.288-8.07-6.473-17.15-9.62-27.77-9.62-15.61 0-26.52 9.369-26.52 22.774 0 14.375 9.41 19.465 25.67 23.394 13.83 3.187 16.17 5.857 16.17 10.629 0 5.29-4.72 8.58-12.32 8.58-8.44 0-15.33-2.85-23.03-9.51-0.19-0.17-0.45-0.24-0.69-0.23-0.26 0.02-0.49 0.14-0.65 0.33l-7.92 9.42c-0.33 0.4-0.29 0.98 0.09 1.32 8.96 8 19.98 12.22 31.88 12.22 16.82 0 27.69-9.19 27.69-23.42 0.03-12.007-7.16-18.657-24.77-22.941l-0.03-0.013zm62.86-14.26c-7.29 0-13.27 2.872-18.21 8.757v-6.624c0-0.523-0.42-0.949-0.94-0.949h-12.95c-0.52 0-0.94 0.426-0.94 0.949v73.601c0 0.52 0.42 0.95 0.94 0.95h12.95c0.52 0 0.94-0.43 0.94-0.95v-23.23c4.94 5.53 10.92 8.24 18.21 8.24 13.55 0 27.27-10.43 27.27-30.369 0.02-19.943-13.7-30.376-27.26-30.376l-0.01 0.001zm12.21 30.375c0 10.149-6.25 17.239-15.21 17.239-8.85 0-15.53-7.41-15.53-17.239 0-9.83 6.68-17.238 15.53-17.238 8.81-0.001 15.21 7.247 15.21 17.237v0.001zm50.21-30.375c-17.45 0-31.12 13.436-31.12 30.592 0 16.972 13.58 30.262 30.91 30.262 17.51 0 31.22-13.39 31.22-30.479 0-17.031-13.62-30.373-31.01-30.373v-0.002zm0 47.714c-9.28 0-16.28-7.46-16.28-17.344 0-9.929 6.76-17.134 16.07-17.134 9.34 0 16.38 7.457 16.38 17.351 0 9.927-6.8 17.127-16.17 17.127zm68.27-46.53h-14.25v-14.566c0-0.522-0.42-0.948-0.94-0.948h-12.95c-0.52 0-0.95 0.426-0.95 0.948v14.566h-6.22c-0.52 0-0.94 0.426-0.94 0.949v11.127c0 0.522 0.42 0.949 0.94 0.949h6.22v28.795c0 11.63 5.79 17.53 17.22 17.53 4.64 0 8.49-0.96 12.12-3.02 0.3-0.16 0.48-0.48 0.48-0.82v-10.6c0-0.32-0.17-0.63-0.45-0.8-0.28-0.18-0.63-0.19-0.92-0.04-2.49 1.25-4.9 1.83-7.6 1.83-4.15 0-6.01-1.89-6.01-6.11v-26.76h14.25c0.52 0 0.94-0.426 0.94-0.949v-11.126c0.02-0.523-0.4-0.949-0.93-0.949l-0.01-0.006zm49.64 0.057v-1.789c0-5.263 2.02-7.61 6.54-7.61 2.7 0 4.87 0.536 7.3 1.346 0.3 0.094 0.61 0.047 0.85-0.132 0.25-0.179 0.39-0.466 0.39-0.77v-10.91c0-0.417-0.26-0.786-0.67-0.909-2.56-0.763-5.84-1.546-10.76-1.546-11.95 0-18.28 6.734-18.28 19.467v2.74h-6.22c-0.52 0-0.95 0.426-0.95 0.948v11.184c0 0.522 0.43 0.949 0.95 0.949h6.22v44.405c0 0.53 0.43 0.95 0.95 0.95h12.94c0.53 0 0.95-0.42 0.95-0.95v-44.402h12.09l18.52 44.402c-2.1 4.66-4.17 5.59-6.99 5.59-2.28 0-4.69-0.68-7.14-2.03-0.23-0.12-0.51-0.14-0.75-0.07-0.25 0.09-0.46 0.27-0.56 0.51l-4.39 9.63c-0.21 0.46-0.03 0.99 0.41 1.23 4.58 2.48 8.71 3.54 13.82 3.54 9.56 0 14.85-4.46 19.5-16.44l22.46-58.037c0.12-0.292 0.08-0.622-0.1-0.881-0.17-0.257-0.46-0.412-0.77-0.412h-13.48c-0.41 0-0.77 0.257-0.9 0.636l-13.81 39.434-15.12-39.46c-0.14-0.367-0.49-0.61-0.88-0.61h-22.12v-0.003zm-28.78-0.057h-12.95c-0.52 0-0.95 0.426-0.95 0.949v56.481c0 0.53 0.43 0.95 0.95 0.95h12.95c0.52 0 0.95-0.42 0.95-0.95v-56.477c0-0.523-0.42-0.949-0.95-0.949v-0.004zm-6.4-25.719c-5.13 0-9.29 4.152-9.29 9.281 0 5.132 4.16 9.289 9.29 9.289s9.28-4.157 9.28-9.289c0-5.128-4.16-9.281-9.28-9.281zm113.42 43.88c-5.12 0-9.11-4.115-9.11-9.112s4.04-9.159 9.16-9.159 9.11 4.114 9.11 9.107c0 4.997-4.04 9.164-9.16 9.164zm0.05-17.365c-4.67 0-8.2 3.71-8.2 8.253 0 4.541 3.51 8.201 8.15 8.201 4.67 0 8.2-3.707 8.2-8.253 0-4.541-3.51-8.201-8.15-8.201zm2.02 9.138l2.58 3.608h-2.18l-2.32-3.31h-1.99v3.31h-1.82v-9.564h4.26c2.23 0 3.69 1.137 3.69 3.051 0.01 1.568-0.9 2.526-2.21 2.905h-0.01zm-1.54-4.315h-2.37v3.025h2.37c1.18 0 1.89-0.579 1.89-1.514 0-0.984-0.71-1.511-1.89-1.511z"
                />
              </svg>
            </div>
            <div className="row line">
              <div className="card mb-3" id="sideBar">
                <div className="row no-gutters alignedCards">
                  <div className="col-md-2 sideImg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="currentColor"
                      className="bi bi-house-door"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5z" />
                    </svg>
                  </div>
                  <div className="col-md-10">
                    <div className="card-body" id="sidebarBody">
                      <a href="homepage.html">
                        <p className="card-title">Home</p>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card mb-3" id="sideBar">
                <div className="row no-gutters alignedCards">
                  <div className="col-md-2 sideImg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="currentColor"
                      className="bi bi-search"
                      viewBox="0 0 16 16"
                    >
                      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                    </svg>
                  </div>
                  <div className="col-md-10">
                    <div className="card-body" id="sidebarBody">
                      <p className="card-title">Search</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card mb-3" id="sideBar">
                <div className="row no-gutters alignedCards">
                  <div className="col-md-2 sideImg">
                    <img
                      src="library.png"
                      alt="..."
                      style={{ width: 16, height: 16 }}
                    />
                  </div>
                  <div className="col-md-10">
                    <div className="card-body" id="sidebarBody">
                      <a href="Library page.html">
                        <p className="card-title">Your Library</p>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card mb-3" id="sideBar" style={{ marginTop: 15 }}>
                <div className="row no-gutters alignedCards">
                  <div className="col-md-2 sideImg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      id="createPlaylist"
                      width={16}
                      height={16}
                      fill="currentColor"
                      className="bi bi-plus"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                    </svg>
                  </div>
                  <div className="col-md-10">
                    <div className="card-body" id="sidebarBody">
                      <p className="card-title">Create Playlist</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card mb-3" id="sideBar">
                <div className="row no-gutters alignedCards">
                  <div className="col-md-2 sideImg">
                    <img
                      src="favoritesongs.png"
                      alt="..."
                      style={{ width: 16, height: 16 }}
                    />
                  </div>
                  <div className="col-md-10">
                    <div className="card-body" id="sidebarBody">
                      <p className="card-title">Liked Songs</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row" style={{ paddingTop: 5 }}>
              <ul>
                <li>Funky Heavy Bluesy</li>
                <li>Your Top Songs 2020</li>
                <li>In LOve With You</li>
                <li>This is Rod Stewart</li>
                <li>FRANCHISE ft. Young Thug...</li>
                <li>Your Top Songs 2019</li>
                <li>Palleggio</li>
                <li>This Is Joe Bonamassa</li>
                <li>Jun19</li>
                <li>
                  Jack 30th Party 2
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    className="bi bi-people"
                    viewBox="0 0 16 16"
                    id="people"
                  >
                    <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" />
                  </svg>
                </li>
                <li>
                  Jack 30th Party
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    className="bi bi-people"
                    viewBox="0 0 16 16"
                    id="people"
                  >
                    <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" />
                  </svg>
                </li>
                <li>This Is Opeth</li>
                <li>Metal Ballads</li>
                <li>New Playlist</li>
                <li>Your Top Songs 2018</li>
                <li>Jazz Classics Blue Note Editi..</li>
                <li>Funky Heavy Bluesy</li>
                <li>Your Top Songs 2020</li>
                <li>In LOve With You</li>
                <li>This is Rod Stewart</li>
                <li>FRANCHISE ft. Young Thug...</li>
                <li>Your Top Songs 2019</li>
                <li>Palleggio</li>
                <li>This Is Joe Bonamassa</li>
                <li>Jun19</li>
                <li>Jack 30th Party 2</li>
                <li>Jack 30th Party</li>
                <li>This Is Opeth</li>
                <li>Metal Ballads</li>
                <li>New Playlist</li>
                <li>Your Top Songs 2018</li>
                <li>Jazz Classics Blue Note Editi..</li>
              </ul>
            </div>
            <div className="row">
              <div className="card mb-3" id="sideBar">
                <div className="row no-gutters alignedCards">
                  <div className="col-md-2 sideImg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="currentColor"
                      className="bi bi-arrow-down-circle"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"
                      />
                    </svg>
                  </div>
                  <div className="col-md-10">
                    <div className="card-body" id="sidebarBody">
                      <p className="card-title" style={{ padding: "0%" }}>
                        Install App
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-10">
            <div className="row" style={{ position: "relative" }}>
              <a href="homepage.html">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="currentColor"
                  className="bi bi-chevron-left"
                  viewBox="0 0 16 16"
                  id="arrow-left"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
                  />
                </svg>
              </a>
              <a href="Album page.html">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="currentColor"
                  className="bi bi-chevron-right"
                  viewBox="0 0 16 16"
                  id="arrow-right"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                  />
                </svg>
              </a>
              <div
                className="container-fluid"
                style={{ padding: "0%", height: 330 }}
              >
                <img
                  src="queen-cover.png"
                  className="img-fluid"
                  alt="..."
                  id="queen-cover"
                />
                <div className="card mb-3" id="verified">
                  <div
                    className="row no-gutters"
                    style={{ alignItems: "baseline" }}
                  >
                    <div className="col-1">
                      <img
                        src="Schermata 2021-09-07 alle 00.28.12.png"
                        alt="verified"
                        style={{ width: 15, height: 15 }}
                      />
                      <path
                        fillRule="evenodd"
                        d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"
                      ></path>
                    </div>
                    <div className="col-10">
                      <div className="card-body" id="sidebarBody">
                        <p className="card-title" style={{ padding: "0%" }}>
                          Verified Artist
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <h1 id="queen">Queen</h1>
                <p id="queenListeners" style={{ fontSize: 10 }}>
                  37,120,733 monthly listeners
                </p>
              </div>
              <div
                className="dropdown d-flex justify-content-end"
                style={{ marginTop: 10 }}
              >
                <button
                  className="btn btn-dark  badge-pill dropdown-toggle"
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
                    className="dropdown-item  topdropdwon text-white"
                    type="button"
                  >
                    Log out
                  </button>
                </div>
              </div>
            </div>
            <div className="row gradBg">
              <div className="col-12 col-md-8">
                <div className="row">
                  <div id="pause">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={45}
                      height={45}
                      fill="currentColor"
                      className="bi bi-pause-circle-fill"
                      viewBox="0 0 16 16"
                      style={{
                        color: "#1ed760",
                        backgroundColor: "white",
                        borderRadius: 26,
                        borderColor: "rgb(64, 197, 64)",
                      }}
                    >
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.25 5C5.56 5 5 5.56 5 6.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C7.5 5.56 6.94 5 6.25 5zm3.5 0c-.69 0-1.25.56-1.25 1.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C11 5.56 10.44 5 9.75 5z" />
                    </svg>
                  </div>
                  <div id="follow">
                    <p
                      style={{ position: "absolute", top: "20%", left: "15%" }}
                    >
                      follow
                    </p>
                  </div>
                  <div id="threeDots">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={25}
                      height={25}
                      fill="currentColor"
                      className="bi bi-three-dots"
                      viewBox="0 0 16 16"
                      style={{ color: "grey" }}
                    >
                      <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                    </svg>
                  </div>
                </div>
                <h4>Popular</h4>
                <table className="table table-borderless">
                  <tbody>
                    <tr>
                      <th scope="row">
                        <div className="card mb-3">
                          <div className="row no-gutters alignedCards">
                            <div className="col-2 songImg">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={13}
                                height={13}
                                fill="rgb(64, 197, 64)"
                                className="bi bi-reception-3"
                                viewBox="0 0 16 16"
                                style={{ display: "-ms-inline-flexbox" }}
                              >
                                <path d="M0 11.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2zm4-3a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-5zm4-3a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-8zm4 8a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z" />
                              </svg>
                              <img
                                src="another.jpeg"
                                alt="..."
                                style={{ width: 35, height: 35, marginLeft: 4 }}
                              />
                            </div>
                            <div className="col-10">
                              <div className="card-body">
                                <p
                                  className="card-title"
                                  style={{ color: "#1ed760" }}
                                >
                                  Another One Bites The Dust - Remastered 2011
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </th>
                      <td>1,013,328,772</td>
                      <td>3:34</td>
                    </tr>
                    <tr>
                      <th scope="row">
                        <div className="card mb-3">
                          <div className="row no-gutters alignedCards">
                            <div className="col-2 songImg">
                              2{" "}
                              <img
                                src="img/bohemian.jpeg"
                                alt="..."
                                id="cardImg"
                              />
                            </div>
                            <div className="col-10">
                              <div className="card-body">
                                <p className="card-title">
                                  Bohemian Rhapsody - Remastered 2011
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </th>
                      <td>1,497,986,258</td>
                      <td>5:54</td>
                    </tr>
                    <tr>
                      <th scope="row">
                        <div className="card mb-3">
                          <div className="row no-gutters alignedCards">
                            <div className="col-2 songImg">
                              3{" "}
                              <img
                                src="img/don'tstopmenow.jpg"
                                alt="..."
                                id="cardImg"
                              />
                            </div>
                            <div className="col-10">
                              <div className="card-body">
                                <p className="card-title">
                                  Don't Stop Me Now - Remastered 2011
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </th>
                      <td>1,063,959,983</td>
                      <td>3:29</td>
                    </tr>
                    <tr>
                      <th scope="row">
                        <div className="card mb-3">
                          <div className="row no-gutters alignedCards">
                            <div className="col-2 songImg">
                              4{" "}
                              <img
                                src="img/underpressure.png"
                                alt="..."
                                id="cardImg"
                              />
                            </div>
                            <div className="col-10">
                              <div className="card-body">
                                <p className="card-title">
                                  Under Pressure - Remastered 2011
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </th>
                      <td>900,225,096</td>
                      <td>4:08</td>
                    </tr>
                    <tr>
                      <th scope="row">
                        <div className="card mb-3">
                          <div className="row no-gutters alignedCards">
                            <div className="col-2 songImg">
                              5{" "}
                              <img
                                src="img/wewillrockyou.jpeg"
                                id="cardImg"
                                alt="..."
                              />
                            </div>
                            <div className="col-10">
                              <div className="card-body">
                                <p className="card-title">
                                  We Will Rock You - Remastered
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </th>
                      <td>705,225,721</td>
                      <td>2:02</td>
                    </tr>
                  </tbody>
                </table>
                <p className="seeMore">see more</p>
              </div>
              <div className="col-12 col-md-4">
                <div className="row" style={{ height: 85 }} />
                <h4>Artist pick</h4>
                <div className="card mb-3" style={{ maxWidth: 200 }}>
                  <div className="row no-gutters alignedCards">
                    <div className="col-4">
                      <img
                        src="img/artistpick.jpg"
                        alt="..."
                        style={{ width: 40, height: 40 }}
                      />
                    </div>
                    <div className="col-8" style={{ position: "relative" }}>
                      <div className="card-body">
                        <p
                          style={{ fontSize: 10, position: "absolute", top: 5 }}
                        >
                          Posted by Queen
                        </p>
                        <p
                          className="card-title"
                          style={{ fontSize: 10, fontWeight: "bold" }}
                        >
                          Queen Best of
                        </p>
                        <p style={{ fontSize: 10 }}>Playlist</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="music-player d-flex justify-content-around"
        style={{ position: "sticky", bottom: 0 }}
      >
        <div className="d-flex lmusic" style={{ width: "auto" }}>
          <img
            className=" pt-3 pl-3 pb-3 mr-2"
            src="another.jpeg"
            alt
            id="mpImg"
          />
          <div className="d-flex flex-column">
            <p
              className="align-self-center text-white mb-0 mt-4"
              style={{ fontSize: "12p", fontWeight: "bold" }}
            >
              Another One Bites The Dust
            </p>
            <p className="mb-0 text-white" style={{ fontSize: 11 }}>
              Queen
            </p>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={16}
            height={16}
            fill="white"
            className="bi bi-heart align-self-center ml-3 mt-3"
            viewBox="0 0 16 16"
          >
            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={16}
            height={16}
            fill="white"
            className="bi bi-pip align-self-center ml-3 mt-3"
            viewBox="0 0 16 16"
          >
            <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h13A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5v-9zM1.5 3a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-13z" />
            <path d="M8 8.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5v-3z" />
          </svg>
        </div>
        <div className="d-flex flex-column">
          <div
            className="mt-3 d-flex align-items-center justify-content-center"
            style={{ width: "auto" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={20}
              height={20}
              fill="white"
              className="bi bi-shuffle mr-4"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M0 3.5A.5.5 0 0 1 .5 3H1c2.202 0 3.827 1.24 4.874 2.418.49.552.865 1.102 1.126 1.532.26-.43.636-.98 1.126-1.532C9.173 4.24 10.798 3 13 3v1c-1.798 0-3.173 1.01-4.126 2.082A9.624 9.624 0 0 0 7.556 8a9.624 9.624 0 0 0 1.317 1.918C9.828 10.99 11.204 12 13 12v1c-2.202 0-3.827-1.24-4.874-2.418A10.595 10.595 0 0 1 7 9.05c-.26.43-.636.98-1.126 1.532C4.827 11.76 3.202 13 1 13H.5a.5.5 0 0 1 0-1H1c1.798 0 3.173-1.01 4.126-2.082A9.624 9.624 0 0 0 6.444 8a9.624 9.624 0 0 0-1.317-1.918C4.172 5.01 2.796 4 1 4H.5a.5.5 0 0 1-.5-.5z"
              />
              <path d="M13 5.466V1.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192zm0 9v-3.932a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={20}
              height={20}
              fill="white"
              className="bi bi-arrow-bar-left mr-4"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M12.5 15a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5zM10 8a.5.5 0 0 1-.5.5H3.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L3.707 7.5H9.5a.5.5 0 0 1 .5.5z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={35}
              height={35}
              fill="white"
              className="bi bi-play-circle-fill mr-4"
              viewBox="0 0 16 16"
            >
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={20}
              height={20}
              fill="white"
              className="bi bi-arrow-bar-right mr-4"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M6 8a.5.5 0 0 0 .5.5h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L12.293 7.5H6.5A.5.5 0 0 0 6 8zm-2.5 7a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={20}
              height={20}
              fill="white"
              className="bi bi-arrow-repeat mr-4"
              viewBox="0 0 16 16"
            >
              <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z" />
              <path
                fillRule="evenodd"
                d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"
              />
            </svg>
          </div>
          <div className="d-flex align-items-center">
            <p className="p-music pr-1">0:00</p>
            <input type="range" name id="slider" className="mb-3" />
            <p className="p-music pl-1">5:00</p>
          </div>
        </div>
        <div
          className="d-flex align-items-center rmusic"
          style={{ width: "auto" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={20}
            height={20}
            fill="white"
            className="bi bi-list mr-1"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={20}
            height={20}
            fill="white"
            className="bi bi-laptop mr-1"
            viewBox="0 0 16 16"
          >
            <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5h11zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={20}
            height={20}
            fill="white"
            className="bi bi-volume-up mr-1"
            viewBox="0 0 16 16"
          >
            <path d="M11.536 14.01A8.473 8.473 0 0 0 14.026 8a8.473 8.473 0 0 0-2.49-6.01l-.708.707A7.476 7.476 0 0 1 13.025 8c0 2.071-.84 3.946-2.197 5.303l.708.707z" />
            <path d="M10.121 12.596A6.48 6.48 0 0 0 12.025 8a6.48 6.48 0 0 0-1.904-4.596l-.707.707A5.483 5.483 0 0 1 11.025 8a5.483 5.483 0 0 1-1.61 3.89l.706.706z" />
            <path d="M10.025 8a4.486 4.486 0 0 1-1.318 3.182L8 10.475A3.489 3.489 0 0 0 9.025 8c0-.966-.392-1.841-1.025-2.475l.707-.707A4.486 4.486 0 0 1 10.025 8zM7 4a.5.5 0 0 0-.812-.39L3.825 5.5H1.5A.5.5 0 0 0 1 6v4a.5.5 0 0 0 .5.5h2.325l2.363 1.89A.5.5 0 0 0 7 12V4zM4.312 6.39 6 5.04v5.92L4.312 9.61A.5.5 0 0 0 4 9.5H2v-3h2a.5.5 0 0 0 .312-.11z" />
          </svg>
          <input type="range" id="slider2" />
        </div>
      </div>
      {/*  <div class="d-flex align-items-center rmusic" style="width: auto;">
       <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" class="bi bi-list mr-1" viewBox="0 0 16 16">
         <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
       </svg>
       <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" class="bi bi-laptop mr-1" viewBox="0 0 16 16">
         <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5h11zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z"/>
       </svg>
       <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" class="bi bi-volume-up mr-1" viewBox="0 0 16 16">
         <path d="M11.536 14.01A8.473 8.473 0 0 0 14.026 8a8.473 8.473 0 0 0-2.49-6.01l-.708.707A7.476 7.476 0 0 1 13.025 8c0 2.071-.84 3.946-2.197 5.303l.708.707z"/>
         <path d="M10.121 12.596A6.48 6.48 0 0 0 12.025 8a6.48 6.48 0 0 0-1.904-4.596l-.707.707A5.483 5.483 0 0 1 11.025 8a5.483 5.483 0 0 1-1.61 3.89l.706.706z"/>
         <path d="M10.025 8a4.486 4.486 0 0 1-1.318 3.182L8 10.475A3.489 3.489 0 0 0 9.025 8c0-.966-.392-1.841-1.025-2.475l.707-.707A4.486 4.486 0 0 1 10.025 8zM7 4a.5.5 0 0 0-.812-.39L3.825 5.5H1.5A.5.5 0 0 0 1 6v4a.5.5 0 0 0 .5.5h2.325l2.363 1.89A.5.5 0 0 0 7 12V4zM4.312 6.39 6 5.04v5.92L4.312 9.61A.5.5 0 0 0 4 9.5H2v-3h2a.5.5 0 0 0 .312-.11z"/>
       </svg>
       <input type="range" id="slider2">
      </div>
      */}
    </>
  );
};
export default ArtistsPage;
