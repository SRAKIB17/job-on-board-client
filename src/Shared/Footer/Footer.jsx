import React from "react";
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="bg-base-300">
      <footer className="pt-20 pb-10 lg:px-8 container mx-auto text-center ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-customWidth ">
          <div className="lg:my-2">
            <h2 className="text-2xl font-bold">Job OnBoard</h2>
            <h4 className="pt-5 pb-2">Contact with us </h4>
            <div className="flex justify-center items-center pt-5 gap-5">
              <a
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-4  hover:text-primary"
              >
                <span className="text-2xl text-[#2479ce] hover:text-[#023b74]">
                  <BsLinkedin />
                </span>
              </a>
              <a
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-4   hover:text-primary"
              >
                <span className="text-2xl text-red-500 hover:text-red-700">
                  <BsInstagram />
                </span>
              </a>
              <a
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-4  text-green-800 "
              >
                <span className="text-2xl text-[#2479ce] hover:text-[#023b74]">
                  <BsFacebook />
                </span>
              </a>
              <a
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-4  text-green-800 "
              >
                <span className="text-2xl text-[#2479ce] hover:text-[#023b74]">
                  <BsTwitter />
                </span>
              </a>
            </div>
          </div>
          <div className="space-y-2 my-10 lg:my-2">
            <p>
              <Link
                to="/carrer"
                className="link link-hover hover:text-primary text-lg"
              >
                Carrer{" "}
              </Link>
            </p>
            <p>
              <Link
                to="/team"
                className="link link-hover hover:text-primary text-lg"
              >
                Our Team
              </Link>
            </p>
            <p>
              <Link
                to="/hr-resources"
                className="link link-hover hover:text-primary text-lg"
              >
                HR Resources
              </Link>
            </p>
            <p>
              <Link
                to="/about"
                className="link link-hover hover:text-primary text-lg"
              >
                About Us
              </Link>
            </p>
          </div>
          <div className="space-y-2 lg:my-2">
            <p>
              <Link
                to="/pricing"
                className="link link-hover hover:text-primary text-lg"
              >
                Our Pricing{" "}
              </Link>
            </p>
            <p>
              <Link
                to="/partner"
                className="link link-hover hover:text-primary text-lg"
              >
                {" "}
                Partner Us
              </Link>
            </p>
            <p>
              <Link
                to="/contact"
                className="link link-hover hover:text-primary text-lg"
              >
                Contact Us
              </Link>
            </p>
            <p>
              <Link
                to="/sitemap"
                className="link link-hover hover:text-primary text-lg"
              >
                Site Map
              </Link>
            </p>
          </div>
          <div className="space-y-2 my-10 lg:my-2">
            <p>
              <Link
                to="/guide"
                className="link link-hover hover:text-primary text-lg"
              >
                Guide Lines
              </Link>
            </p>
            <p>
              <Link
                to="/success"
                className="link link-hover hover:text-primary text-lg"
              >
                Our History
              </Link>
            </p>
            <p>
              <Link
                to="/strategy"
                className="link link-hover hover:text-primary text-lg"
              >
                User Strategy
              </Link>
            </p>
            <p>
              <Link
                to="/trust-safety"
                className="link link-hover hover:text-primary text-lg"
              >
                Trust and Safety{" "}
              </Link>
            </p>
          </div>
          <div className="md:hidden lg:block">
            <div className="space-y-3 border-0 lg:border-2 rounded-lg lg:ml-10 pl-0 lg:pl-3 py-4">
              <h3 className="text-lg font-bold ">Apply on the go</h3>
              <p>Get real time job update on our App</p>
              <div className="flex flex-col lg:flex-row justify-center items-center gap-4">
                <svg
                  className="cursor-pointer w-32"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 68.31 22.83"
                >
                  <g data-name="Layer 2">
                    <g data-name="Layer 1">
                      <path
                        d="M62.87 0h-58a4.52 4.52 0 00-.57 0 7.44 7.44 0 00-1.15.1 4 4 0 00-1.08.39 3.62 3.62 0 00-.92.67 3.74 3.74 0 00-.67.92 4.29 4.29 0 00-.36 1.08A9 9 0 000 4.31v14.21a6.29 6.29 0 00.11 1.14 4.11 4.11 0 00.36 1.09 3.56 3.56 0 00.67.92 3.9 3.9 0 002 1 8.63 8.63 0 001.15.1H64a7.44 7.44 0 001.15-.1 3.9 3.9 0 001.09-.37 3.43 3.43 0 00.92-.66 4.43 4.43 0 00.69-.92 3.54 3.54 0 00.34-1.09 7.22 7.22 0 00.11-1.14V4.31a7.58 7.58 0 00-.11-1.15 4.11 4.11 0 00-.34-1.08 3.71 3.71 0 00-1.6-1.6 4 4 0 00-1.09-.36A8.78 8.78 0 0064 0h-1.13z"
                        fill="#a2b3d1"
                      />
                      <path
                        d="M4.82 22.35H4.3a7.72 7.72 0 01-1.07-.09 3.53 3.53 0 01-1-.31 3.76 3.76 0 01-.8-.57 3.31 3.31 0 01-.59-.8 3.51 3.51 0 01-.3-.95 6.46 6.46 0 01-.1-1.07V4.33a6.36 6.36 0 01.1-1.07 3.3 3.3 0 01.3-.95 3.48 3.48 0 01.58-.8 3.52 3.52 0 01.8-.59 3.31 3.31 0 011-.31A7.72 7.72 0 014.29.52H64a7.32 7.32 0 011 .09 3.42 3.42 0 011 .31 3.2 3.2 0 011.37 1.38 3.06 3.06 0 01.31.94 8.14 8.14 0 01.09 1.09v14.23a7.19 7.19 0 01-.09 1.05 3 3 0 01-.31.95 2.8 2.8 0 01-.57.79 3.31 3.31 0 01-.8.59 4.43 4.43 0 01-1 .32 7.6 7.6 0 01-1.07.09z"
                        fill="#010101"
                      />
                      <path
                        d="M14.14 11.6a2.8 2.8 0 011.35-2.37A2.84 2.84 0 0013.21 8c-1-.11-1.89.57-2.38.57S9.57 8 8.77 8a3 3 0 00-2.55 1.59c-1.11 1.91-.28 4.72.78 6.26.53.76 1.14 1.6 2 1.57s1.08-.5 2-.5 1.23.5 2.06.48 1.39-.76 1.89-1.52a6.48 6.48 0 00.87-1.77 2.7 2.7 0 01-1.68-2.51zM12.58 7a2.83 2.83 0 00.64-2 2.87 2.87 0 00-1.83 1 2.62 2.62 0 00-.65 1.92A2.33 2.33 0 0012.58 7zm11.57 8.5h-2.69l-.66 1.92h-1.15l2.57-7.09h1.19L26 17.42h-1.19zm-2.43-.88h2.14l-1.05-3.11zm9.78.21c0 1.61-.86 2.65-2.17 2.65a1.74 1.74 0 01-1.62-.91v2.56h-1.09v-6.87h1v.85a1.81 1.81 0 011.64-.91c1.32 0 2.19 1 2.19 2.63zm-1.1 0c0-1-.54-1.73-1.36-1.73s-1.36.71-1.36 1.73.55 1.74 1.36 1.74 1.36-.68 1.36-1.74zm6.79 0c0 1.61-.86 2.65-2.17 2.65a1.75 1.75 0 01-1.63-.91v2.56h-1.08v-6.87h1v.85A1.84 1.84 0 0135 12.2c1.32 0 2.19 1.03 2.19 2.63zm-1.1 0c0-1-.55-1.73-1.36-1.73s-1.36.71-1.36 1.73.54 1.74 1.36 1.74 1.36-.68 1.36-1.74zm4.85.62c.08.71.76 1.16 1.69 1.16s1.54-.47 1.54-1.09-.39-.89-1.31-1.11l-.92-.23c-1.31-.32-1.91-.92-1.91-1.91C40 11 41.1 10.2 42.61 10.2a2.28 2.28 0 012.56 2.07H44.1c-.06-.71-.65-1.13-1.51-1.13s-1.44.42-1.44 1 .37.8 1.28 1l.79.19c1.46.34 2.06.93 2.06 2 0 1.32-1.06 2.16-2.74 2.16s-2.63-.81-2.7-2.1h1.1zM47.59 11v1.23h1v.84h-1v2.84c0 .44.2.66.62.66h.35v.84a2.94 2.94 0 01-.59.05c-1 0-1.45-.38-1.45-1.4v-3h-.75v-.84h.75V11zm1.55 3.8a2.46 2.46 0 114.91 0 2.46 2.46 0 11-4.91 0zm3.81 0c0-1.12-.5-1.77-1.37-1.77s-1.38.67-1.38 1.77.51 1.78 1.38 1.78S53 16 53 14.83zm2-2.57h1v.88a1.25 1.25 0 011.24-.94 2.2 2.2 0 01.36 0v1a1.58 1.58 0 00-.48-.06 1.07 1.07 0 00-1.11 1v3.23h-1zm7.53 3.64a2.09 2.09 0 01-2.23 1.59 2.36 2.36 0 01-2.45-2.63 2.39 2.39 0 012.39-2.67 2.28 2.28 0 012.33 2.55v.36h-3.68v.07a1.34 1.34 0 001.23 1.45h.17a1.13 1.13 0 001.19-.72zm-3.59-1.53h2.59a1.24 1.24 0 00-1.18-1.31h-.09a1.3 1.3 0 00-1.32 1.31zM21.59 5a1.52 1.52 0 011.62 1.39 1 1 0 010 .3 1.51 1.51 0 01-1.6 1.71h-1.25V5zm-.69 2.92h.64a1.08 1.08 0 001.13-1 1.55 1.55 0 000-.22 1.09 1.09 0 00-.92-1.21.71.71 0 00-.2 0h-.65zm2.89-.8a1.22 1.22 0 011.1-1.33 1.21 1.21 0 011.32 1.1.88.88 0 010 .23 1.22 1.22 0 01-2.43.24 1.93 1.93 0 00.01-.24zm1.91 0c0-.56-.25-.88-.69-.88s-.7.32-.7.88.26.88.7.88.69-.32.69-.88zm3.74 1.28h-.52l-.53-1.9-.54 1.9h-.52l-.71-2.58h.52l.46 2 .53-2h.48l.54 2 .45-2h.51zm1.31-2.57h.49v.42a.77.77 0 01.76-.46.83.83 0 01.9.78v1.86h-.51V6.86c0-.41-.17-.61-.56-.61a.59.59 0 00-.61.56v1.6h-.51V5.83zm3-1h.51v3.58h-.51zM35 7.12a1.21 1.21 0 112.41-.23.45.45 0 010 .23 1.21 1.21 0 01-1.09 1.33 1.23 1.23 0 01-1.34-1.09 1 1 0 01.02-.24zm1.89 0c0-.56-.25-.88-.69-.88s-.7.32-.7.88.26.88.7.88.65-.32.65-.88zm1.06.56c0-.47.34-.74 1-.76h.69v-.27c0-.27-.17-.43-.52-.43s-.48.11-.53.28H38c.06-.44.47-.72 1.06-.72s1 .32 1 .87v1.76h-.49v-.36a.85.85 0 01-.78.4.78.78 0 01-.85-.69zm1.65-.23v-.21h-.63c-.36 0-.52.14-.52.37s.2.36.48.36a.61.61 0 00.67-.55zm1.18-.33c0-.82.41-1.33 1.07-1.33a.84.84 0 01.78.46V4.83h.51v3.58h-.48V8a.9.9 0 01-.8.46c-.67 0-1.08-.54-1.08-1.35zm.52 0c0 .54.25.86.68.86s.69-.33.69-.86-.26-.87-.69-.87-.72.32-.72.87zm4 0a1.21 1.21 0 112.41-.23.45.45 0 010 .23 1.21 1.21 0 01-1.09 1.33 1.23 1.23 0 01-1.34-1.09 1 1 0 01-.04-.24zm1.89 0c0-.56-.25-.88-.69-.88s-.7.32-.7.88.26.88.7.88.63-.32.63-.88zm1.2-1.29h.5v.42a.76.76 0 01.76-.46.82.82 0 01.89.78v1.86H50V6.86c0-.41-.18-.61-.56-.61a.61.61 0 00-.62.56v1.6h-.51zm5.06-.64v.66H54v.43h-.57V7.6c0 .26.11.38.37.38h.18v.42a2.4 2.4 0 01-.28 0c-.56 0-.79-.21-.79-.7V6.28h-.4v-.43h.42v-.66zm1.25-.36h.5v1.42a.77.77 0 01.8-.46.87.87 0 01.9.81v1.81h-.52V6.86c0-.41-.19-.61-.55-.61a.61.61 0 00-.66.55v1.6h-.5zm5.1 2.87a1 1 0 01-1.1.75 1.18 1.18 0 01-1.21-1.13.55.55 0 010-.19 1.19 1.19 0 011-1.34h.18c.72 0 1.14.5 1.14 1.3v.17H58a.67.67 0 00.61.73h.07a.61.61 0 00.61-.31zM58 6.88h1.29a.61.61 0 00-.57-.67.66.66 0 00-.67.67z"
                        fill="#fff"
                      />
                    </g>
                  </g>
                </svg>
                <svg
                  className="cursor-pointer w-32"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 68.46 22.87"
                >
                  <defs>
                    <linearGradient
                      id="playstore-badge-a"
                      x1="11.06"
                      y1="-645.7"
                      x2="2.54"
                      y2="-654.21"
                      gradientTransform="matrix(1 0 0 -1 0 -640.35)"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0" stop-color="#4997d2" />
                      <stop offset=".01" stop-color="#4a98d3" />
                      <stop offset=".26" stop-color="#45b9ea" />
                      <stop offset=".51" stop-color="#44c6f0" />
                      <stop offset=".76" stop-color="#57c8e8" />
                      <stop offset="1" stop-color="#5dc9e6" />
                    </linearGradient>
                    <linearGradient
                      id="playstore-badge-b"
                      x1="17.16"
                      y1="-651.42"
                      x2="4.89"
                      y2="-651.42"
                      gradientTransform="matrix(1 0 0 -1 0 -640.35)"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0" stop-color="#fcdf00" />
                      <stop offset=".41" stop-color="#fbbc16" />
                      <stop offset=".78" stop-color="#f9a41b" />
                      <stop offset="1" stop-color="#f89a1f" />
                    </linearGradient>
                    <linearGradient
                      id="playstore-badge-c"
                      x1="12.59"
                      y1="-652.59"
                      x2="1.05"
                      y2="-664.14"
                      gradientTransform="matrix(1 0 0 -1 0 -640.35)"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0" stop-color="#ee414a" />
                      <stop offset="1" stop-color="#c21e63" />
                    </linearGradient>
                    <linearGradient
                      id="playstore-badge-d"
                      x1="3.7"
                      y1="-641.37"
                      x2="8.86"
                      y2="-646.52"
                      gradientTransform="matrix(1 0 0 -1 0 -640.35)"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0" stop-color="#309f73" />
                      <stop offset=".07" stop-color="#2ba672" />
                      <stop offset=".48" stop-color="#4cb970" />
                      <stop offset=".8" stop-color="#60bc6b" />
                      <stop offset="1" stop-color="#66be6b" />
                    </linearGradient>
                  </defs>
                  <g data-name="Layer 2">
                    <g data-name="Layer 1">
                      <path d="M65.94 22.44H2.53A2.65 2.65 0 010 19.7V3.2A2.65 2.65 0 012.53.46h63.4a2.65 2.65 0 012.53 2.74v16.5a2.63 2.63 0 01-2.52 2.74z" />
                      <path
                        d="M65.94.45a2.27 2.27 0 012.13 2.4V20a2.27 2.27 0 01-2.13 2.4H2.53A2.27 2.27 0 01.4 20V2.87A2.27 2.27 0 012.53.47h63.41m0-.47H2.53A2.71 2.71 0 000 2.85V20a2.71 2.71 0 002.53 2.85h63.4A2.71 2.71 0 0068.46 20V2.87A2.7 2.7 0 0065.94 0z"
                        fill="#a2b3d1"
                      />
                      <path
                        d="M24.05 6.13a1.37 1.37 0 01-.37 1 1.48 1.48 0 01-1.13.46A1.57 1.57 0 0121 6a1.57 1.57 0 011.58-1.59 1.38 1.38 0 01.63.14 1.32 1.32 0 01.48.33l-.26.27a1 1 0 00-.83-.36 1.09 1.09 0 00-.83.33 1.19 1.19 0 00-.35.88 1.2 1.2 0 00.35.89 1.09 1.09 0 00.83.33 1.14 1.14 0 00.85-.33 1 1 0 00.26-.62h-1.14v-.36H24v.22zm2.34-1.28H25v1h1.25v.36H25v1h1.39v.38h-1.78v-3h1.78zM28 7.53h-.39V4.85h-.81v-.37h2.08v.37H28v2.68zm2.36 0v-3h.38v3zm2.12 0h-.38V4.85h-.86v-.37h2.09v.37h-.86v2.68zm4.82-.4a1.46 1.46 0 01-1.11.45 1.47 1.47 0 01-1.11-.45 1.66 1.66 0 010-2.25 1.47 1.47 0 011.11-.45 1.5 1.5 0 011.11.46A1.58 1.58 0 0137.8 6a1.64 1.64 0 01-.46 1.13zm-2-.26a1.11 1.11 0 00.83.35 1.13 1.13 0 00.83-.35 1.15 1.15 0 00.42-.87 1.18 1.18 0 00-.33-.87 1.16 1.16 0 00-.83-.34 1.14 1.14 0 00-.83.34 1.19 1.19 0 00-.34.87 1.2 1.2 0 00.34.87zm2.94.66v-3h.48l1.58 2.32h0V4.48h.39v3h-.4L38.72 5h0v2.53z"
                        fill="#fff"
                        stroke="#fff"
                        stroke-miterlimit="10"
                        stroke-width=".2"
                      />
                      <path
                        d="M34.56 12a2.16 2.16 0 102.17 2.16A2.13 2.13 0 0034.56 12zm0 3.47a1.32 1.32 0 111.22-1.31 1.25 1.25 0 01-1.22 1.27zM29.83 12A2.16 2.16 0 1032 14.12 2.13 2.13 0 0029.83 12zm0 3.47a1.32 1.32 0 111.22-1.31 1.25 1.25 0 01-1.22 1.27zm-5.62-2.8v.91h2.2a1.92 1.92 0 01-.5 1.15 2.22 2.22 0 01-1.68.67 2.44 2.44 0 010-4.87 2.3 2.3 0 011.64.65l.64-.64a3.18 3.18 0 00-2.3-.92 3.35 3.35 0 100 6.69 3 3 0 002.34-.94 3 3 0 00.79-2.14 2.47 2.47 0 00-.05-.57zm23 .71A2 2 0 0045.35 12a2.05 2.05 0 00-2 2.16 2.11 2.11 0 002.14 2.15 2.14 2.14 0 001.8-.95l-.74-.5a1.2 1.2 0 01-1.06.61 1.08 1.08 0 01-1-.66l2.89-1.19zm-2.93.72a1.19 1.19 0 011.13-1.26.85.85 0 01.8.46zm-2.35 2.09h1V9.81h-1zm-1.56-3.71a1.52 1.52 0 00-1.18-.48 2.16 2.16 0 000 4.32 1.47 1.47 0 001.14-.49v.31c0 .83-.44 1.27-1.15 1.27a1.21 1.21 0 01-1.08-.76l-.83.34a2 2 0 001.91 1.27 2 2 0 002-2.24v-3.91h-.9zm-1.08 3a1.31 1.31 0 010-2.61 1.22 1.22 0 011.15 1.31 1.21 1.21 0 01-1.17 1.25zm12.35-5.67h-2.27v6.34h1v-2.4h1.32a2 2 0 100-3.94zm0 3.06h-1.33V10.7h1.35a1.09 1.09 0 110 2.17zm5.87-.87a1.77 1.77 0 00-1.68 1l.84.35a1 1 0 011.86.34v.07a2.21 2.21 0 00-1-.24c-.91 0-1.83.49-1.83 1.43a1.45 1.45 0 001.58 1.39 1.31 1.31 0 001.2-.61v.49h.91v-2.49A1.73 1.73 0 0057.51 12zm-.12 3.47c-.31 0-.73-.16-.73-.54s.53-.68 1-.68a1.74 1.74 0 01.87.21 1.17 1.17 0 01-1.14.97zm5.37-3.34l-1.08 2.75-1.13-2.75h-1l1.68 3.85-1 2.14h1l2.6-6zm-8.51 4.06h1V9.81h-1z"
                        fill="#fff"
                      />
                      <path
                        d="M5.29 4.76a1 1 0 00-.24.71v11.22a1 1 0 00.24.7l6.29-6.27V11L5.33 4.71z"
                        fill="url(#playstore-badge-a)"
                      />
                      <path
                        d="M13.71 13.25l-2.09-2.11V11l2.1-2.1 2.48 1.41a.77.77 0 010 1.46l-2.49 1.43z"
                        fill="url(#playstore-badge-b)"
                      />
                      <path
                        d="M13.76 13.22l-2.14-2.14-6.32 6.31a.81.81 0 001.06 0l7.4-4.2"
                        fill="url(#playstore-badge-c)"
                      />
                      <path
                        d="M13.76 8.94L6.34 4.72a.84.84 0 00-1 0l6.31 6.31z"
                        fill="url(#playstore-badge-d)"
                      />
                      <path
                        d="M13.71 13.18l-7.37 4.19a.85.85 0 01-1 0 .85.85 0 001 0l7.42-4.22z"
                        fill="#010101"
                        opacity=".2"
                      />
                      <path
                        d="M5.29 17.33a1 1 0 01-.24-.71v.08a1 1 0 00.24.71zm10.95-5.6l-2.53 1.44v.05l2.48-1.41a.91.91 0 00.53-.73.91.91 0 01-.48.65z"
                        fill="#010101"
                        opacity=".12"
                      />
                      <path
                        d="M6.34 4.8l9.9 5.62a1 1 0 01.53.66.88.88 0 00-.53-.74l-9.9-5.62c-.71-.4-1.28-.07-1.28.75v.08c0-.82.57-1.15 1.28-.75z"
                        fill="#fff"
                        opacity=".25"
                      />
                    </g>
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="flex  justify-between items-center flex-col-reverse lg:flex-row pt-10 lg:pt-16 px-10">
          <div>
            <span className="text-center py-5 mt-10">
              Copyright © {currentYear} - All Rights Reserved{" "}
            </span>
          </div>
          <div className="md:space-x-5 space-y-1 md:space-y-0 flex flex-col md:flex-row py-5 lg:pt-0 justify-center items-center ">
            <Link
              to="/policy"
              className="link link-hover hover:text-primary text-md"
            >
              Privacy policy
            </Link>
            <Link
              to="/terms"
              className="link link-hover hover:text-primary text-md"
            >
              Terms of use
            </Link>
            <Link
              to="/cookie"
              className="link link-hover hover:text-primary text-md"
            >
              Cookie policy
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
