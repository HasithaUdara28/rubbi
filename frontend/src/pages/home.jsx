import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

const Home = () => {
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    const token = sessionStorage.getItem("token");

    if (!token) {
      // If no token is found, redirect to login
      navigate("/");
    } else {
      try {
        // Decode the token to extract user details
        const decodedToken = JSON.parse(atob(token.split(".")[1]));
        setUserDetails(decodedToken);
      } catch (error) {
        console.error("Error decoding token:", error);
        navigate("/"); // Redirect to login on error
      }
    }
  }, [navigate]);
  

  return (
    <div> <Navbar/>
    <section
  className="bg-cover bg-center bg-no-repeat relative"
  style={{
    backgroundImage: "url('bgimg.png')",
    backgroundBlendMode: "overlay",
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    height: "700px"
  }}
>
  <div className="absolute inset-0 bg-black opacity-40"></div>
  <div className="relative z-10 grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
    <div className="mr-auto place-self-center lg:col-span-7">
      <h1 className="max-w-2xl mt-32 mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-white">
        Simplify Your Waste Collection Process
      </h1>
      <p className="max-w-2xl mb-6 mt-6 font-light text-gray-200 lg:mb-8 md:text-lg lg:text-xl">
        From booking rubbish pickups to managing schedules, streamline waste collection effortlessly with Eco Collect. Keep your home clean and clutter-free with ease.
      </p>
    </div>
    
  </div>
</section>

<section className="m-10 text-center">
  {/* Title */}
  <h2 className="mb-20 text-4xl md:text-6xl font-bold font-heading tracking-px-n leading-tight md:max-w-lg text-center mx-auto">
  Services
</h2>

  

  {/* Card Container - Makes Cards Cover Full Width */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    
    {/* Card 1 */}
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img className="w-full h-60 object-cover rounded-t-lg" src="halftruck.jpg" alt="Service 1" />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Half Of Truck</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Ideal for small-scale rubbish removal, perfect for clearing out minimal waste efficiently.</p>
        <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
        Book Now
          <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
          </svg>
        </a>
      </div>
    </div>

    {/* Card 2 */}
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img className="w-full h-60 object-cover rounded-t-lg" src="fulltruck.jpg" alt="Service 2" />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Full of Truck</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">A complete truckload service for larger waste disposal needs, ensuring a hassle-free cleanup.</p>
        <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
          Book Now
          <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
          </svg>
        </a>
      </div>
    </div>

    {/* Card 3 */}
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img className="w-full h-60 object-cover rounded-t-lg" src="moretruck.jpg" alt="Service 3" />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">More Than One Truck</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Designed for bulk waste removal, accommodating extensive rubbish collection requirements.</p>
        <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
        Book Now
          <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
          </svg>
        </a>
      </div>
    </div>

  </div>
</section>


<section className="py-32 bg-white overflow-hidden">
  <div className="container px-4 mx-auto">
    <div className="flex flex-wrap lg:items-center -m-8">
      {/* Image Section */}
      <div className="w-full md:w-1/2 p-8">
        <img className="mx-auto transform hover:-translate-y-4 transition ease-in-out duration-1000 w-full h-auto" src="laptops.png" />
      </div>

      {/* Steps Section */}
      <div className="w-full md:w-1/2 p-8">
        <h2 className="mb-20 text-4xl md:text-6xl font-bold font-heading tracking-px-n leading-tight md:max-w-lg">
          How Our Rubbish Collection System Works
        </h2>

        <div className="flex flex-wrap -m-1.5">
          {/* Step 1: Select a Package */}
          <div className="w-full p-1.5">
            <div className="flex flex-wrap -m-6">
              <div className="w-auto p-6">
                <div className="relative mb-3 w-10 h-10 text-lg text-white font-bold bg-green-600 rounded-full">
                  <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">1</span>
                </div>
              </div>
              <div className="flex-1 p-6">
                <h3 className="mb-3 text-2xl font-semibold leading-snug">Select a Package</h3>
                <p className="text-gray-700 font-medium leading-relaxed">
                  Choose a rubbish collection package that fits your needs.
                </p>
              </div>
            </div>
          </div>

          {/* Step 2: Choose a Driver */}
          <div className="w-full p-1.5">
            <div className="flex flex-wrap -m-6">
              <div className="w-auto p-6">
                <div className="relative mb-3 w-10 h-10 text-lg text-white font-bold bg-green-600 rounded-full">
                  <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">2</span>
                </div>
              </div>
              <div className="flex-1 p-6">
                <h3 className="mb-3 text-2xl font-semibold leading-snug">Choose a Driver</h3>
                <p className="text-gray-700 font-medium leading-relaxed">
                  Select an available driver to collect your rubbish.
                </p>
              </div>
            </div>
          </div>

          {/* Step 3: Schedule Pickup */}
          <div className="w-full p-1.5">
            <div className="flex flex-wrap -m-6">
              <div className="w-auto p-6">
                <div className="relative mb-3 w-10 h-10 text-lg text-white font-bold bg-green-600 rounded-full">
                  <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">3</span>
                </div>
              </div>
              <div className="flex-1 p-6">
                <h3 className="mb-3 text-2xl font-semibold leading-snug">Schedule Pickup</h3>
                <p className="text-gray-700 font-medium leading-relaxed">
                  Set a convenient date and time for collection.
                </p>
              </div>
            </div>
          </div>

          {/* Step 4: Make Payment */}
          <div className="w-full p-1.5">
            <div className="flex flex-wrap -m-6">
              <div className="w-auto p-6">
                <div className="relative mb-3 w-10 h-10 text-lg text-white font-bold bg-green-600 rounded-full">
                  <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">4</span>
                </div>
              </div>
              <div className="flex-1 p-6">
                <h3 className="mb-3 text-2xl font-semibold leading-snug">Make Payment</h3>
                <p className="text-gray-700 font-medium leading-relaxed">
                  Pay securely online for the selected service.
                </p>
              </div>
            </div>
          </div>

          {/* Step 5: Track Collection */}
          <div className="w-full p-1.5">
            <div className="flex flex-wrap -m-6">
              <div className="w-auto p-6">
                <div className="relative mb-3 w-10 h-10 text-lg text-white font-bold bg-green-600 rounded-full">
                  <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">5</span>
                </div>
              </div>
              <div className="flex-1 p-6">
                <h3 className="mb-3 text-2xl font-semibold leading-snug">Track Collection</h3>
                <p className="text-gray-700 font-medium leading-relaxed">
                  Monitor the status of your rubbish collection in real time.
                </p>
              </div>
            </div>
          </div>

          {/* Step 6: Receive Confirmation */}
          <div className="w-full p-1.5">
            <div className="flex flex-wrap -m-6">
              <div className="w-auto p-6">
                <div className="relative mb-3 w-10 h-10 text-lg text-white font-bold bg-green-600 rounded-full">
                  <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">6</span>
                </div>
              </div>
              <div className="flex-1 p-6">
                <h3 className="mb-3 text-2xl font-semibold leading-snug">Receive Confirmation</h3>
                <p className="text-gray-700 font-medium leading-relaxed">
                  Get a confirmation once the collection is completed successfully.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</section>


<section className="py-24">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div className="flex flex-col justify-center items-center gap-x-16 gap-y-5 xl:gap-28 lg:flex-row lg:justify-between max-lg:max-w-2xl mx-auto max-w-full">
      
      <div className="w-full lg:w-1/2">
        <div className="lg:max-w-xl">
          <div className="mb-6 lg:mb-16">
            <h2 className="text-6xl text-center font-bold text-indigo-600 mb-2 lg:text-left">
              FAQ
            </h2>
            <h2 className="text-4xl text-center font-bold text-gray-900 leading-[3.25rem] mb-5 lg:text-left">
              Looking for answers?
            </h2>
          </div>
          <div className="accordion-group" data-accordion="default-accordion">
            <div className="accordion pb-8 border-b border-solid border-gray-200 active" id="basic-heading-one-with-arrow-always-open">
              <button className="accordion-toggle group inline-flex items-center justify-between text-xl font-normal leading-8 text-gray-600 w-full transition duration-500 hover:text-indigo-600 accordion-active:text-indigo-600 accordion-active:font-medium always-open" aria-controls="basic-collapse-one-with-arrow-always-open">
                <h5>How to create an account?</h5>
                <svg className="text-gray-900 transition duration-500 group-hover:text-indigo-600 accordion-active:text-indigo-600 accordion-active:rotate-180" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </button>
              <div id="basic-collapse-one-with-arrow-always-open" className="accordion-content w-full px-0 overflow-hidden pr-4 active" style={{ maxHeight: "100px" }} aria-labelledby="basic-heading-one-with-arrow-always-open">
                <p className="text-base font-normal text-gray-600 ">
                  To create an account, find the 'Sign up' or 'Create account' button, fill out the registration form with your personal information, and click 'Create account' or 'Sign up.' Verify your email address if needed, and then log in to start using the platform.
                </p>
              </div>
            </div>

            <div className="accordion py-8 border-b border-solid border-gray-200" id="basic-heading-two-with-arrow-always-open">
              <button className="accordion-toggle group inline-flex items-center justify-between font-normal text-xl leading-8 text-gray-600 w-full transition duration-500 hover:text-indigo-600 accordion-active:text-indigo-600 accordion-active:font-medium" aria-controls="basic-collapse-two-with-arrow-always-open">
                <h5>Have any trust issue?</h5>
                <svg className="text-gray-900 transition duration-500 group-hover:text-indigo-600 accordion-active:text-indigo-600 accordion-active:rotate-180" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </button>
              <div id="basic-collapse-two-with-arrow-always-open" className="accordion-content w-full px-0 overflow-hidden pr-4" aria-labelledby="basic-heading-two-with-arrow-always-open">
                <p className="text-base text-gray-500 font-normal">
                  Our focus on providing robust and user-friendly content management capabilities ensures that you can manage your content with confidence, and achieve your content marketing goals with ease.
                </p>
              </div>
            </div>

            <div className="accordion py-8 border-b border-solid border-gray-200" id="basic-heading-three-with-arrow-always-open">
              <button className="accordion-toggle group inline-flex items-center justify-between text-xl font-normal leading-8 text-gray-600 w-full transition duration-500 hover:text-indigo-600 accordion-active:font-medium accordion-active:text-indigo-600" aria-controls="basic-collapse-three-with-arrow-always-open">
                <h5>How can I reset my password?</h5>
                <svg className="text-gray-900 transition duration-500 group-hover:text-indigo-600 accordion-active:text-indigo-600 accordion-active:rotate-180" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </button>
              <div id="basic-collapse-three-with-arrow-always-open" className="accordion-content w-full px-0 overflow-hidden pr-4" aria-labelledby="basic-heading-three-with-arrow-always-open">
                <p className="text-base text-gray-500 font-normal">
                  Our focus on providing robust and user-friendly content management capabilities ensures that you can manage your content with confidence, and achieve your content marketing goals with ease.
                </p>
              </div>
            </div>

            <div className="accordion py-8" id="basic-heading-four-with-arrow-always-open">
              <button className="accordion-toggle group inline-flex items-center justify-between text-xl font-normal leading-8 text-gray-600 w-full transition duration-500 hover:text-indigo-600 accordion-active:font-medium accordion-active:text-indigo-600" aria-controls="basic-collapse-four-with-arrow-always-open">
                <h5>What is the payment process?</h5>
                <svg className="text-gray-900 transition duration-500 group-hover:text-indigo-600 accordion-active:text-indigo-600 accordion-active:rotate-180" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </button>
              <div id="basic-collapse-four-with-arrow-always-open" className="accordion-content w-full px-0 overflow-hidden pr-4" aria-labelledby="basic-heading-four-with-arrow-always-open">
                <p className="text-base text-gray-500 font-normal">
                  Our focus on providing robust and user-friendly content management capabilities ensures that you can manage your content with confidence, and achieve your content marketing goals with ease.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-1/2">
        <img
          src="https://pagedone.io/asset/uploads/1696230182.png"
          alt="FAQ tailwind section"
          className="w-full rounded-xl object-cover"
        />
      </div>
    </div>
  </div>
</section>
<Footer/>
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      {userDetails ? (
        <div className="text-center">
          <h1 className="text-3xl font-bold text-green-600">
            Welcome, {userDetails.name}!
          </h1>
          <p className="text-lg text-gray-700 mt-4">
            Your role: <span className="font-semibold">{userDetails.role}</span>
          </p>
          <p className="text-lg text-gray-700 mt-2">
            User ID: <span className="font-mono">{userDetails.id}</span>
          </p>
        </div>
      ) : (
        <p className="text-xl text-gray-600">Loading user details...</p>
      )}
    </div>

    
    </div>
  );
};

export default Home;
