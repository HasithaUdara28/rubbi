import React from 'react'

const Footer = () => {
  return (
    <div><footer className="bg-white  shadow-sm dark:bg-green-900 ">
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
      <div className="sm:flex sm:items-center sm:justify-between">
        <a>
          <img
            src="logoo.png"
            className="h-28"
            alt="Eco Logo"
          />
          
        </a>
        <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">
              About
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">
              Licensing
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </div>
      <hr className=" border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-1" />
      <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © 2023{" "}
        <a href="https://flowbite.com/" className="hover:underline">
          EcoCollect™
        </a>
        . All Rights Reserved.
      </span>
    </div>
  </footer>
  </div>
  )
}

export default Footer