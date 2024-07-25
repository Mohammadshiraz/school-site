import React from "react";
// Assuming Tailwind CSS is set up

function Contact() {
  return (
    <div className="contact container1  text-sm text-gray-900 font-semibold mt-[70px] uppercase mt-16 mx-0 mb-8 px-4 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto  sm:px-6  container1    py-8">
        <h1 className="text-center text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
          Contact Us
        </h1>

        <div className="flex flex-col container1 lg:flex-row  justify-between">
          {/* Address */}
          <section className="w-full lg:w-1/2 mb-8 lg:mb-0 text-gray-700">
            <h2 className="text-2xl font-semibold text-purple-500 mb-4">
              Address
            </h2>
            <p>Springdale Public School</p>
            <p>123 Education Lane</p>
            <p>Cityville, State, ZIP Code</p>
            <p>Phone: +1 (123) 456-7890</p>
            <p>Email: info@springdale.edu</p>
          </section>

          {/* Contact Form */}
          <section className="w-full lg:w-1/2 mb-8 lg:mb-0">
            <h2 className="text-2xl font-semibold text-purple-500 mb-4">
              Contact Form
            </h2>
            <form className="max-w-lg">
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-gray-800 font-semibold mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-800 font-semibold mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-gray-800 font-semibold mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-200"
              >
                Submit
              </button>
            </form>
          </section>
        </div>

        {/* Google Maps Integration */}
        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-purple-500 mb-4 text-center">
            Location
          </h2>
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <iframe
              title="Springdale Public School Location"
              className="w-full h-80 sm:h-96"
              loading="lazy"
              allowFullScreen
              frameBorder="0"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2152980417426!2d-74.0059746841948!3d40.71277599520239!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a1f6f5dd8cb%3A0x539bd2a9b7a50d!2sEmpire%20State%20Building%2C%20New%20York%2C%20NY%2010018%2C%20USA!5e0!3m2!1sen!2sin!4v1624528710730!5m2!1sen!2sin"
            ></iframe>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Contact;
