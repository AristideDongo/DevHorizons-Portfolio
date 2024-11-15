import { LuSend } from "react-icons/lu";
import { FaLinkedin, FaGithub, } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { FaXTwitter } from "react-icons/fa6";

export default function Form() {
  return (
    <section className="body-font relative mt-10 text-gray-400">
      <div className="container mx-auto px-5 py-24">
        <div className="mb-12 flex w-full flex-col text-center">
          <h1 className="title-font mb-4 text-2xl font-medium text-white sm:text-3xl">Contact Me</h1>
          <p className="mx-auto text-base leading-relaxed lg:w-2/3">
            Feel free to reach out to us! Whether you have a question, feedback, or a collaboration proposal, we&apos;d love to hear from you.
          </p>
        </div>

        <div className="mx-auto md:w-2/3 lg:w-1/2">
          <div className="-m-2 flex flex-wrap">
            <div className="w-1/2 p-2">
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Name"
                  className="peer w-full rounded border border-gray-700 bg-gray-800 bg-opacity-40 py-1 px-3 text-base leading-8 text-gray-100 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900"
                />
              </div>
            </div>
            <div className="w-1/2 p-2">
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  className="peer w-full rounded border border-gray-700 bg-gray-800 bg-opacity-40 py-1 px-3 text-base leading-8 text-gray-100 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900"
                />
              </div>
            </div>
            <div className="mt-4 w-full p-2">
              <div className="relative">
                <textarea
                  id="message"
                  name="message"
                  placeholder="Message"
                  className="peer h-32 w-full resize-none rounded border border-gray-700 bg-gray-800 bg-opacity-40 py-1 px-3 text-base leading-6 text-gray-100 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900"
                ></textarea>
              </div>
            </div>
            <div className="w-full p-2">
              <button className="mx-auto flex items-center gap-2 rounded border-0 bg-indigo-500 py-2 px-10 text-lg text-white hover:bg-indigo-600 focus:outline-none transition duration-300">
                <LuSend size={20} />
                Send
              </button>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-8 flex justify-center gap-6 text-2xl">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-600 transition duration-300">
            <FaLinkedin size={60} />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-black transition duration-300">
            <FaGithub size={60} />
          </a>
          <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-800 transition duration-300">
            <FaXTwitter size={60} />
          </a>
          <a href="mailto:your-email@example.com" className="text-gray-400 hover:text-red-600 transition duration-300">
            <HiOutlineMail size={60} />
          </a>
        </div>
      </div>
    </section>
  );
}
