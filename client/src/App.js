import {useEffect, useState} from 'react'
import Logo from  "./logo.png"

function App() {
  return (
    <div className="bg-gradient-to-b from-blue-100 via-blue-300 to-blue-500 min-h-screen w-screen flex flex-col items-center">
      <header className="w-full flex justify-center items-center flex-col py-8">
      <img className="w-16" src={Logo} alt="" />
        <h1 className="font-bold tracking-wide text-gray-500 text-4xl py-4">Send A Testimonial</h1>
      </header>
      <div className="bg-white p-10 rounded-lg shadow w-10/12 md:w-3/4 mx-auto lg:w-1/2 mb-16">
        <form className="" action="">
          <div className="mb-5">
            <label for="name" className="block mb-2 font-semibold text-gray-300">Your Name</label>
            <input type="text" id="name" name="name" placeholder="Name" className="border focus:border-transparent focus:ring-0 focus:outline-none border-gray-300 shadow p-3 w-full rounded mb-" />
          </div>
          <div className="mb-5">
            <label htmlFor="testimonials" className="block mb-2 font-semibold text-gray-300">Testimonial</label>
            <textarea rows="5" cols="3" type="text" id="testimonial" name="testimonial" placeholder="Write your testimony" className="border focus:border-transparent border-gray-300 focus:outline-none focus:ring-0 shadow p-3 w-full rounded mb-" />
              {/* <p class="text-sm text-red-400 mt-2">Twitter username is required</p> */}
          </div>
          <div className="mb-5">
            <label for="name" className="block mb-2 font-semibold text-gray-300">Service Received</label>
            <input type="text" id="name" name="name" placeholder="Name" className="border focus:border-transparent focus:ring-0 focus:outline-none border-gray-300 shadow p-3 w-full rounded mb-" />
          </div>
          <div className="mb-5">
            <label for="name" className="block mb-2 font-semibold text-gray-300">Social Link (optional)</label>
            <input type="text" id="name" name="name" placeholder="url" className="border focus:border-transparent focus:ring-0 focus:outline-none border-gray-300 shadow p-3 w-full rounded mb-" />
          </div>
          <div className="mb-5">
            <label for="name" className="block mb-2 font-semibold text-gray-300">Social Name (optional)</label>
            <input type="text" id="name" name="name" placeholder="Name" className="border focus:border-transparent focus:ring-0 focus:outline-none border-gray-300 shadow p-3 w-full rounded mb-" />
          </div>
          <div className="mb-5">
            <label for="name" className="block mb-2 font-semibold text-gray-300">Social Type (optional)</label>
            <input type="text" id="name" name="name" placeholder="Name" className="border focus:border-transparent focus:ring-0 focus:outline-none border-gray-300 shadow p-3 w-full rounded mb-" />
          </div>

          <div className="mb-5">
            <label htmlFor="service" className="block mb-2 font-semibold text-gray-300">My field</label>
              <div className="mb-5 relative text-gray-800 bg-white shadow-lg ">
                <select class="border focus:border-transparent focus:ring-0 focus:outline-none border-gray-300 shadow p-3 pr-2 w-full rounded" name="whatever" id="frm-whatever">
                  <option value="">Please choose&hellip;</option>
                  <option value="1">Item 1</option>
                  <option value="2">Item 2</option>
                  <option value="3">Item 3</option>
                </select>
                <div className="pointer-events-none absolute right-0 top-0 bottom-0 flex items-center px-4 text-gray-700 border-l">
                {/* <FontAwesomeIcon icon={} /> */}
                  {/* <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg> */}
                </div>
            </div>
          </div>

          <button class="block w-full bg-blue-400 text-white font-bold p-4 rounded-lg">Submit</button>
          <div className="flex w-full justify-center py-3">
            <p style={{}} className="text-gray-400 text-sm text-center w-10/12 md:w-2/3 flex">By clicking "Submit" you agree that your given information will be displayed on our website or social media</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
