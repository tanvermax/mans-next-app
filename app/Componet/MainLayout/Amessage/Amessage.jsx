"use client";

import React from "react";
import Image from "next/image";
import photo from "../../../assets/minhazrahman.jpg";
import logo from "../../../assets/manspackaginglogo.png?url";

const Amessage = () => {
  return (
    <section className="relative isolate overflow-hidden bg-white px-6 py-10 sm:py-22 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,var(--color-indigo-100),white)] opacity-20" />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white ring-1 shadow-xl shadow-indigo-600/10 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        <Image
          src={logo}
          alt="MANS Packaging Logo"
          className="mx-auto lg:h-14 h-8"
          width={200}
          height={56}
        />
        <figure className="mt-10">
          <blockquote className="text-center lg:text-xl/8 font-semibold text-gray-900 sm:text-2xl/9">
            <p className="md:text-base text-[12px]">
              “Packaging is not just about protecting products, it’s about creating an experience and telling a story. Let Mans Printing and Packaging help you bring your brand to life through custom packaging solutions.”
            </p>
          </blockquote>
          <figcaption className="mt-10">
            <Image
              src={photo}
              alt="Minhazur Rahman"
              className="mx-auto rounded-full shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)]"
              width={100}
              height={100}
            />
            <div className="mt-4 flex items-center justify-center space-x-3">
              <div className="font-semibold lg:text-base text-xs text-gray-900">
                Minhazur Rahman
              </div>
              <svg
                width={3}
                height={3}
                viewBox="0 0 2 2"
                aria-hidden="true"
                className="fill-gray-900"
              >
                <circle r={1} cx={1} cy={1} />
              </svg>
              <div className="text-gray-600 lg:text-base text-xs">
                CEO of MANS Packaging
              </div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
};

export default Amessage;
