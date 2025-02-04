import React from "react";
import "./Footer.css";
import logo from "../../../asset/Roommates_Updated.png";

function Footer() {
  return (
    <div className="w-full bg-[#eeedea]">
      <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2">
            <a
              href="/"
              aria-label="Go home"
              title="Company"
              className="inline-flex items-center"
            >
              <img src={logo} className="logo" alt="logo" />
            </a>
            <div className="mt-6 lg:max-w-sm">
              <p className="text-sm text-gray-800">
                We strive to reduce our environmental footprint by using
                eco-friendly materials and manufacturing processes.
              </p>
              <p className="mt-4 text-base text-gray-800">
                Our products are designed to be durable, long-lasting, and free
                from harmful chemicals. We prioritize products that are
                CertiPUR-US® certified, ensuring they meet strict environmental
                and health standards.
              </p>
            </div>
          </div>
          <div className=" text-base">
            <div className=" mb-3">
              <p className="text-base font-bold tracking-wide text-gray-900">
                Contacts
              </p>

              <div className="flex">
                <p className="mr-1 text-gray-800">Email:</p>
                <a
                  href="mailto:roommateorder@gmail.com"
                  aria-label="Our email"
                  title="Our email"
                  className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-yellow-500"
                >
                  roommateorder@gmail.com
                </a>
              </div>
              <div className="flex">
                <p className="mr-1 text-gray-800">
                  Kondhwa and Malegaon Factory:
                </p>
                <a
                  href="tel:9834683022"
                  aria-label="Our email"
                  title="Our email"
                  className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-yellow-500"
                >
                  9834683022
                </a>
              </div>
              <div className="flex">
                <p className="mr-1 text-gray-800">SK Foam Kondhwa:</p>
                <a
                  href="tel:8010548619"
                  aria-label="Our email"
                  title="Our email"
                  className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-yellow-500"
                >
                  8010548619
                </a>
              </div>
              <div className="flex">
                <p className="mr-1 text-gray-800">Factory outlet Pimpri:</p>
                <a
                  href="tel:9021054958"
                  aria-label="Our email"
                  title="Our email"
                  className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-yellow-500"
                >
                  9021054958
                </a>
              </div>
              <div className="flex">
                <p className="mr-1 text-gray-800">Address:</p>
                <a
                  href="https://maps.app.goo.gl/1LsuMBjdJ28F6SPw9?g_st=iw"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Our address"
                  title="Our address"
                  className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-yellow-500"
                >
                  Somji Chowk, 26/1/1A/4, Pune Saswad Road, Ambedkar Nagar,
                  Kondhwa Budruk, Pune, Maharashtra 411048
                </a>
              </div>
            </div>
            <div>
              <p className="text-base font-bold tracking-wide text-gray-900">
                Headoffice
              </p>
              <a
                href="https://maps.app.goo.gl/fTGUtEEL7sGTGuXc8?g_st=iw"
                aria-label="Our email"
                title="Our email"
                className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-yellow-500"
              >
                Shrikrishna Enterprises (Roommate Mattress)
              </a>
            </div>
          </div>

          <div>
            <span className="text-base font-bold tracking-wide text-gray-900">
              Social
            </span>
            <div className="flex items-center mt-1 space-x-3">
              <a
                href="https://instagram.com/roommatemattress?igshid=MjEwN2IyYWYwYw=="
                className="text-gray-500 transition-colors duration-300 hover:text-yellow-500"
              >
                <svg viewBox="0 0 30 30" fill="currentColor" className="h-6">
                  <circle cx="15" cy="15" r="4" />
                  <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/roommatemattress?mibextid=LQQJ4d"
                className="text-gray-500 transition-colors duration-300 hover:text-yellow-500"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                  <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
                </svg>
              </a>
            </div>
            <p className="mt-4 text-sm text-gray-500">
              Our team is available to assist you with any inquiries, provide
              product information, and offer personalized recommendations based
              on your sleep preferences and needs.
            </p>
          </div>
        </div>
      </div>
      <div className="row copyright">
        <p>
          <a
            href="https://www.priyamit.co.in/home"
            className="hover:text-yellow-500"
          >
            Copyright &copy; {new Date().getFullYear()} Priyam IT Services
            Pvt Ltd
          </a>
        </p>
      </div>
    </div>
  );
}

export default Footer;
