import React from "react";
import Image from "next/image";
import projectImg from "../public/assets/fine-store.png";
import secondImg from "../public/assets/mir-tube.jpg";

const Projects = () => {
  return (
    <div
      className="flex flex-col w-full h-full max-w-[1240px] items-center justify-center py-24"
      id="projects"
    >
      <h2 className="text-4xl">Portfolio</h2>
      <article className="group relative my-10 py-8">
        <div className="flex flex-col justify-center relative">
          <div className="flex flex-row peer absolute z-10 left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] duration-150 transition-opacity opacity-0 group-hover:opacity-100 group-hover:blur-none">
            <a
              className="text-transparent bg-clip-text bg-gradient-to-r from-red-800 to-black flex justify-center items-center text-4xl background-transparent font-bold uppercase outline-none focus:outline-none mr-4 mb-1 ease-linear transition-all duration-150"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="github-repo"
              href="https://e-store-fine.vercel.app/"
            >
              Visit
            </a>
            <a
              className="text-transparent bg-clip-text bg-gradient-to-r from-red-800 to-black flex justify-center items-center text-4xl background-transparent font-bold uppercase outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="github-repo"
              href="https://github.com/SafeatMir/E-Store-Fine"
            >
              Source
            </a>
          </div>
          <div className="peer-hover:blur-sm group hover:blur-sm transition-all duration-300 relative flex flex-col space-y-3 md:space-y-0 rounded-xl shadow-lg p-3 max-w-xl md:max-w-3xl mx-auto border border-white bg-white">
            <div className="w-full bg-white grid place-items-center">
              <Image
                className="rounded-xl object-cover"
                src={projectImg}
                alt="project-image"
              />
            </div>
            <div className="bg-white flex flex-col p-4">
              <h3 className="font-black text-black md:text-3xl text-xl py-4 border-t-2 border-black">
                Fine By Mir / Ecommerce Store
              </h3>
              <p className="md:text-lg text-black text-lg mt-2 font-bold">
                Built Using:{" "}
                <span className="text-base text-gray-500 md:text-lg">
                  Next.Js, Vanilla Css, Sanity.Io & Authentication using Stripe.
                </span>
              </p>
            </div>
            <div className="flex flex-row peer absolute z-10 left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] duration-150 transition-opacity opacity-0 group-hover:opacity-100 group-hover:blur-none">
              <a
                className="text-transparent bg-clip-text bg-gradient-to-r from-red-800 to-black flex justify-center items-center text-4xl background-transparent font-bold uppercase outline-none focus:outline-none mr-4 mb-1 ease-linear transition-all duration-150"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="github-repo"
                href="https://e-store-fine.vercel.app/"
              >
                Visit
              </a>
              <a
                className="text-transparent bg-clip-text bg-gradient-to-r from-red-800 to-black flex justify-center items-center text-4xl background-transparent font-bold uppercase outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="github-repo"
                href="https://github.com/SafeatMir/E-Store-Fine"
              >
                Source
              </a>
            </div>
          </div>
        </div>
      </article>

      <article className="group relative mt-0 py-2">
        <div className="flex flex-col justify-center relative">
          <div className="flex flex-row peer absolute z-10 left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] duration-150 transition-opacity opacity-0 group-hover:opacity-100 group-hover:blur-none">
            <a
              className="text-transparent bg-clip-text bg-gradient-to-r from-red-800 to-black flex justify-center items-center text-4xl background-transparent font-bold uppercase outline-none focus:outline-none mr-4 mb-1 ease-linear transition-all duration-150 relative"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="github-repo"
              href="https://mir-tube.vercel.app/"
            >
              Visit
            </a>
            <a
              className="text-transparent bg-clip-text bg-gradient-to-r from-red-800 to-black flex justify-center items-center text-4xl background-transparent font-bold uppercase outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 relative"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="github-repo"
              href="https://github.com/SafeatMir/mir-tube"
            >
              Source
            </a>
          </div>
          <div className="peer-hover:blur-sm group hover:blur-sm transition-all duration-300 relative flex flex-col space-y-3 md:space-y-0 rounded-xl shadow-lg p-3 max-w-xl md:max-w-3xl mx-auto border border-white bg-white">
            <div className="w-full bg-white grid place-items-center">
              <Image
                className="rounded-xl object-cover"
                src={secondImg}
                alt="project-image"
              />
            </div>
            <div className="bg-white flex flex-col p-4">
              <h3 className="font-black text-black md:text-3xl text-xl py-4 border-t-2 border-black">
                Mir-Tube / YT Clone
              </h3>
              <p className="md:text-lg text-black text-lg mt-2 font-bold">
                Built Using:{" "}
                <span className="text-base text-gray-500 md:text-lg">
                  React.Js, Material UI, Rest API.
                </span>
              </p>
            </div>
            <div className="flex flex-row peer absolute z[-10] left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] duration-150 transition-opacity opacity-0 group-hover:opacity-100 group-hover:blur-none">
              <a
                className="text-transparent bg-clip-text bg-gradient-to-r from-red-800 to-black flex justify-center items-center text-4xl background-transparent font-bold uppercase outline-none focus:outline-none mr-4 mb-1 ease-linear transition-all duration-150 relative z-0"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="github-repo"
                href="https://e-store-fine.vercel.app/"
              >
                Visit
              </a>
              <a
                className="text-transparent bg-clip-text bg-gradient-to-r from-red-800 to-black flex justify-center items-center text-4xl background-transparent font-bold uppercase outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 relative z-0"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="github-repo"
                href="https://github.com/SafeatMir/mir-tube"
              >
                Source
              </a>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default Projects;
