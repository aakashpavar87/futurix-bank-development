/* eslint-disable react/no-unescaped-entities */
import Facebooklogo from "./Facebooklogo.svg";
import Twitter from "./Twitter.svg";
import Insta from "./Insta.svg";
import Linkedin from "./Linkedin.svg";
import styles from "../style";
import Footer from "./Footer";
import Navbar from "./Navbar";

const ContactUs = () => {
  return (
    <div className="bg-primary w-[98.5vw] h-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      <div className="bg-gradient-to-tr from-slate-900 via-slate-800 to-slate-900 text-white p-8 md:p-12 lg:p-16">
        <div className="bg-gray-800 rounded-2xl border border-gray-800 p-8 md:p-8 lg:p-10 mb-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
            <a
              href="#write-to-us"
              className="bg-gray-900 rounded-lg border border-gray-700 p-6 hover:shadow-lg transition duration-300 transform hover:-translate-y-1 hover:scale-105"
            >
              <h2
                id="write-to-us"
                className="text-xl font-bold mb-4 text-red-200"
              >
                Futurix Bank
              </h2>
              <p className="text-gray-300 mb-4">Click here to write to us</p>
            </a>
            <a
              href="#futurix-bank"
              className="bg-gray-900 rounded-lg border border-gray-700 p-6 hover:shadow-lg transition duration-300 transform hover:-translate-y-1 hover:scale-105"
            >
              <h2
                id="futurix-bank"
                className="text-xl font-bold mb-4 text-red-200"
              >
                Futurix Accounts
              </h2>
              <p className="text-gray-300 mb-4">Click here to write to us</p>
            </a>
            <a
              href="#futurix-credit-card"
              className="bg-gray-900 rounded-lg border border-gray-700 p-6 hover:shadow-lg transition duration-300 transform hover:-translate-y-1 hover:scale-105"
            >
              <h2
                id="futurix-credit-card"
                className="text-xl font-bold mb-4 text-red-200"
              >
                Futurix Credit Card
              </h2>
              <p className="text-gray-300 mb-4">Click here to write to us</p>
            </a>
            <a
              href="#futurix-loan"
              className="bg-gray-900 rounded-lg border border-gray-700 p-6 hover:shadow-lg transition duration-300 transform hover:-translate-y-1 hover:scale-105"
            >
              <h2
                id="futurix-loan"
                className="text-xl font-bold mb-4 text-red-200"
              >
                Futurix Loan
              </h2>
              <p className="text-gray-300 mb-4">Click here to write to us</p>
            </a>
          </div>
          <h1 className="flex justify-center text-xl md:text-2xl lg:text-3xl text-red-200 font-extrabold mb-6">
            Contact Us
          </h1>
          <form>
            <div className="mb-6">
              <label
                className="block text-gray-500 text-lg font-bold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="bg-slate-700 shadow appearance-none border rounded w-full py-2 px-3 text-gray-50 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="Your Name"
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-500 text-lg font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="bg-slate-700 shadow appearance-none border rounded w-full py-2 px-3 text-gray-50 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Your Email"
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-500 text-lg font-bold mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                className="bg-slate-700 shadow appearance-none border rounded w-full py-2 px-3 text-gray-50 leading-tight focus:outline-none focus:shadow-outline h-32 resize-none"
                id="message"
                placeholder="Your Message"
              ></textarea>
            </div>
            <div className="flex justify-center">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300">
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="bg-gray-900 rounded-lg border border-gray-800 p-8 md:p-12 lg:p-16 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-red-200 mb-6">
            Let's Connect!
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Reach out to us through our social media channels for updates, news,
            and more.
          </p>
          <div className="flex justify-center ">
            <a
              href="#"
              className="text-gray-300 hover:text-red-200 transition duration-300"
            >
              <img src={Facebooklogo} alt="Facebook" />
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-red-200 transition duration-300  mr-10 mt-1"
            >
              <img src={Twitter} alt="Twitter" />
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-red-200 transition duration-300 mr-10 mt-1"
            >
              <img src={Insta} alt="Instagram" />
            </a>

            <a
              href="#"
              className="text-gray-300 hover:text-red-200 transition duration-300 mr-10 mt-1"
            >
              <img src={Linkedin} alt="Linkedin" />
            </a>
          </div>
        </div>
      </div>
      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
