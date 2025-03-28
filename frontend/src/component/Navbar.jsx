import React, { useState } from "react";

const Navbar = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <div>
      <section>
        <nav className="relative px-6  flex justify-between items-center dark:bg-green-900">
          <a className="text-3xl font-bold leading-none" href="#">
            <img
              className="h-20"
              src="logoo.png"
              alt="Logo"
            />
          </a>
          <div className="lg:hidden">
            <button
              onClick={() => setMobileNavOpen(!mobileNavOpen)}
              className="flex items-center text-green-600 p-3"
            >
              <svg
                className="block h-4 w-4 fill-current"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Mobile menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
              </svg>
            </button>
          </div>
          <ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto  lg:items-center lg:w-auto lg:space-x-6">
            <li>
              <a className="text-sm text-gray-400 hover:text-gray-500" href="/home">
                Dashboard
              </a>
            </li>
            <li>
              <a className="text-sm text-green-600 font-bold" href="/">
                About Us
              </a>
            </li>
            <li>
              <a className="text-sm text-gray-400 hover:text-gray-500" href="#">
                Services
              </a>
            </li>
            <li>
              <a className="text-sm text-gray-400 hover:text-gray-500" href="#">
                Platform
              </a>
            </li>
            <li>
              <a className="text-sm text-gray-400 hover:text-gray-500" href="#">
                Testimonials
              </a>
            </li>
          </ul>
          <a
            className="hidden lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 bg-gray-50 hover:bg-gray-100 text-sm text-gray-900 font-bold rounded-l-xl rounded-t-xl transition duration-200"
            href="#"
          >
            Sign In
          </a>
          <a
            className="hidden lg:inline-block py-2 px-6 bg-green-500 hover:bg-green-600 text-sm text-white font-bold rounded-l-xl rounded-t-xl transition duration-200"
            href="#"
          >
            Sign up
          </a>
        </nav>
        {mobileNavOpen && (
          <div className="fixed top-0 left-0 bottom-0 w-5/6 max-w-sm z-50">
            <div
              onClick={() => setMobileNavOpen(false)}
              className="fixed inset-0 bg-gray-800 opacity-25"
            ></div>
            <nav className="relative flex flex-col py-6 px-6 h-full w-full bg-white border-r overflow-y-auto">
              <div className="flex items-center mb-8">
                <a className="mr-auto text-3xl font-bold leading-none" href="#">
                  <img
                    className="h-10"
                    src="atis-assets/logo/atis/atis-mono-black.svg"
                    alt="Logo"
                    width="auto"
                  />
                </a>
                <button onClick={() => setMobileNavOpen(false)}>
                  <svg
                    className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <ul>
                <li className="mb-1">
                  <a
                    className="block p-4 text-sm font-semibold text-gray-400 hover:bg-green-50 hover:text-green-600 rounded"
                    href="#"
                  >
                    Start
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    className="block p-4 text-sm font-semibold text-gray-400 hover:bg-green-50 hover:text-green-600 rounded"
                    href="#"
                  >
                    About Us
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    className="block p-4 text-sm font-semibold text-gray-400 hover:bg-green-50 hover:text-green-600 rounded"
                    href="#"
                  >
                    Services
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    className="block p-4 text-sm font-semibold text-gray-400 hover:bg-green-50 hover:text-green-600 rounded"
                    href="#"
                  >
                    Platform
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    className="block p-4 text-sm font-semibold text-gray-400 hover:bg-green-50 hover:text-green-600 rounded"
                    href="#"
                  >
                    Testimonials
                  </a>
                </li>
              </ul>
              <div className="mt-auto">
                <div className="pt-6">
                  <a
                    className="block px-4 py-3 mb-3 leading-loose text-xs text-center font-semibold  bg-gray-50 hover:bg-gray-100 rounded-l-xl rounded-t-xl"
                    href="#"
                  >
                    Sign in
                  </a>
                  <a
                    className="block px-4 py-3 mb-2 leading-loose text-xs text-center text-white font-semibold bg-green-600 hover:bg-green-700 rounded-l-xl rounded-t-xl"
                    href="#"
                  >
                    Sign Up
                  </a>
                </div>
                <p className="my-4 text-xs text-center text-gray-400">
                  <span>© 2020 All rights reserved.</span>
                </p>
                <div className="text-center">
                  <a className="inline-block px-1" href="#">
                    <img src="atis-assets/social/facebook.svg" alt="Facebook" />
                  </a>
                  <a className="inline-block px-1" href="#">
                    <img src="atis-assets/social/twitter.svg" alt="Twitter" />
                  </a>
                  <a className="inline-block px-1" href="#">
                    <img
                      src="atis-assets/social/instagram.svg"
                      alt="Instagram"
                    />
                  </a>
                </div>
              </div>
            </nav>
          </div>
        )}
      </section>
    </div>
  );
};

export default Navbar;
