import { Link } from "react-router-dom";
import { errorImg } from "../assets";
import { ArrowLeft } from "lucide-react";

export default function ErrorPage() {
  return (
    <div className="h-screen bg-gray-400">
      <div className="flex h-full p-5 text-white items-center justify-center px-2 md:px-0">
        <div className="lg:flex lg:items-center lg:space-x-10">
          <img
            src={errorImg}
            alt="question-mark"
            className="h-[300px] w-auto"
          />
          <div className="p-5">
            <p className="mt-6 text-sm font-semibold text-white">404 error</p>
            <h1 className="mt-3 text-2xl font-semibold text-white md:text-3xl">
              We can&apos;t find that page
            </h1>
            <p className="mt-4 text-gray-500">
              Sorry, the page you are looking for doesn&apos;t exist or has been
              moved.
            </p>
            <div className="mt-6 flex items-center space-x-3">
              <button
                type="button"
                className="inline-flex items-center rounded-md border border-black px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                <ArrowLeft size={16} className="mr-2" />
                <Link to={"/"}>Go back</Link>
              </button>
              <button
                type="button"
                className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                <Link to={"/contact-us"}>
                  <span>Contact us</span>
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
