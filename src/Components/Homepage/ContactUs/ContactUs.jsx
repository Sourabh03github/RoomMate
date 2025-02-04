import React, { useState } from "react";
import { User, Mail, MessageSquare } from "lucide-react";
import contactUsImage from "../../../asset/contact.svg";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    username: "",
    useremail: "",
    usermsg: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const sendWhatsApp = (e) => {
    e.preventDefault();
    const { username, useremail, usermsg } = formData;
    const whatsappMessage = `Name: ${username}%0AEmail: ${useremail}%0AMessage: ${usermsg}`;
    const whatsappUrl = `https://wa.me/9834683022?text=${whatsappMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8 my-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            Contact Us
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            We'd love to hear from you. Send us a message and we'll respond as
            soon as possible.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="w-full lg:w-1/2">
            <img
              src={contactUsImage}
              alt="Contact us illustration"
              className="w-full h-auto "
            />
          </div>

          <div className="w-full lg:w-1/2">
            <form
              onSubmit={sendWhatsApp}
              className="bg-white shadow-xl rounded-lg px-8 pt-6 pb-8 mb-4"
            >
              <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
                Get in Touch
              </h2>

              <div className="space-y-6">
                <div className="relative">
                  <label htmlFor="username" className="sr-only">
                    Name
                  </label>
                  <User
                    className="absolute top-3 left-3 text-gray-400"
                    size={20}
                  />
                  <input
                    type="text"
                    name="username"
                    id="username"
                    value={formData.username}
                    onChange={handleChange}
                    className="w-full pl-10 pr-3 py-2 text-gray-900 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Name"
                    required
                  />
                </div>

                <div className="relative">
                  <label htmlFor="useremail" className="sr-only">
                    Email
                  </label>
                  <Mail
                    className="absolute top-3 left-3 text-gray-400"
                    size={20}
                  />
                  <input
                    type="email"
                    name="useremail"
                    id="useremail"
                    value={formData.useremail}
                    onChange={handleChange}
                    className="w-full pl-10 pr-3 py-2 text-gray-900 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="E-mail"
                    required
                  />
                </div>

                <div className="relative">
                  <label htmlFor="usermsg" className="sr-only">
                    Message
                  </label>
                  <MessageSquare
                    className="absolute top-3 left-3 text-gray-400"
                    size={20}
                  />
                  <textarea
                    name="usermsg"
                    id="usermsg"
                    value={formData.usermsg}
                    onChange={handleChange}
                    rows={5}
                    className="w-full pl-10 pr-3 py-2 text-gray-900 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Message"
                    required
                  ></textarea>
                </div>
              </div>

              <div className="mt-6">
                <button
                  type="submit"
                  className="w-full px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-300"
                >
                  Send message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
