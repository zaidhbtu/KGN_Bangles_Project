import React from 'react';

const ContactUs = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-4 md:px-8 lg:px-16">
      <h1 className="text-center text-3xl font-semibold text-gray-700 mb-6">Contact Us</h1>

      {/* Contact Information Section */}
      <div className="w-full max-w-lg bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-semibold text-gray-700 mb-4 text-center">Reach Us At</h2>
        <ul className="space-y-4">
          <li className="flex items-center">
            <i className="bx bx-phone mr-2 text-gray-700"></i>
            <span>+91-8954897174</span>
          </li>
          <li className="flex items-center">
            <i className="bx bx-envelope mr-2 text-gray-700"></i>
            <span>zaidhbtu@gmail.com</span>
          </li>
          <li className="flex items-start">
            <i className="bx bx-map-pin mr-2 text-gray-700"></i>
            <span>
              C-729, Bhatta Basti, Shastri Nagar,
              <br />
              Jaipur, 302016 Rajasthan
            </span>
          </li>
        </ul>
      </div>

      {/* Feedback Form Section */}
      <div className="w-full max-w-lg bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-center text-2xl font-semibold text-gray-700 mb-6">Send Us a Message</h2>
        <form className="space-y-6">
          <div>
            <label className="block text-lg font-medium text-gray-700">Your Name*</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="mt-1 w-full bg-gray-50 border border-gray-300 rounded-md p-2.5 focus:ring focus:ring-blue-300 focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-lg font-medium text-gray-700">Email Address*</label>
            <input
              type="email"
              placeholder="youremail@example.com"
              className="mt-1 w-full bg-gray-50 border border-gray-300 rounded-md p-2.5 focus:ring focus:ring-blue-300 focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-lg font-medium text-gray-700">Message*</label>
            <textarea
              rows="4"
              placeholder="Write your message here"
              className="mt-1 w-full bg-gray-50 border border-gray-300 rounded-md p-2.5 focus:ring focus:ring-blue-300 focus:outline-none"
              required
            ></textarea>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 focus:ring focus:ring-blue-300 focus:outline-none"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
