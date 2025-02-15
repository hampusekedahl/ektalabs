import React from "react";

const Contacts = () => {
  return (
    <div className="flex-1 py-32 flex items-stretch">
      <div className="w-full">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Contact Info Section */}
          <div className="flex flex-col gap-8">
            <h2 className="text-4xl font-bold">Contact Us</h2>
            <p>
              Whether you have a business proposal, need support, or just want to
              share something, we're excited to hear from you. Please reach out
              and let's connect!
            </p>
          </div>

          {/* Contact Form Section */}
          <div>
            <form className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="font-semibold">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your name"
                  className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="font-semibold">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your email"
                  className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="font-semibold">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Your message"
                  className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
