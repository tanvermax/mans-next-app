"use client";

import React from "react";
import { FaQuestionCircle } from "react-icons/fa";
import Image from "next/image";

import photo from "../../assets/Manslogo.png";

const Faq = () => {
  const data = [
    {
      id: 1,
      question: "How can custom packaging benefit my e-commerce business?",
      answer:
        "We offer a variety of custom e-commerce packaging solutions, including printed boxes, bags, inserts, and packaging accessories designed to protect your products and enhance the unboxing experience.",
    },
    {
      id: 2,
      question: "Can you create packaging that matches my brand's identity?",
      answer:
        "Yes, our team works closely with you to design packaging that perfectly aligns with your brand’s identity, ensuring consistency and enhancing your brand’s image.",
    },
    {
      id: 3,
      question: "Do you offer eco-friendly packaging options?",
      answer:
        "Absolutely. We prioritize sustainability and offer eco-friendly packaging options that reduce environmental impact and promote a positive image for your brand.",
    },
    {
      id: 4,
      question: "What is e-commerce packaging?",
      answer:
        "E-commerce packaging refers to the specialized packaging used for products sold online. It is designed to protect items during transit, enhance the unboxing experience for customers, and reflect the brand’s identity.",
    },
    {
      id: 5,
      question: "Do you offer design services for custom packaging?",
      answer:
        "Yes, we offer comprehensive design services to help create packaging that is visually appealing and functional, perfectly tailored to your brand’s needs.",
    },
    {
      id: 6,
      question: "Can e-commerce packaging be customized?",
      answer:
        "Yes, e-commerce packaging can be highly customized to reflect a brand’s identity. This includes custom printed boxes, branded inserts, and packaging accessories that showcase the brand’s logo, colors, and messaging.",
    },
  ];

  return (
    <div className="w-11/12 mx-auto place-items-center">
      {/* <h2 className="lg:text-4xl md:text-3xl text-xl font-bold lg:py-4">
        E-commerce Portfolio
      </h2>
      <button className="lg:text-xl btn text-xs text-gray-700">Show More</button> */}

      <div className="text-center">
        <p className="mt-4 text-sm leading-7 text-gray-500 font-regular">
          F.A.Q
        </p>
        <h3 className="text-xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900">
          Frequently Asked <span className="text-indigo-600">Questions</span>
        </h3>
      </div>

      <div className="grid md:grid-cols-2 gap-10">
        {data.map((d) => (
          <div key={d.id} className="lg:p-2 md:w-[500px] mx-auto">
            {/* Question */}
            <div className="flex gap-5 py-5 place-items-center">
              <FaQuestionCircle className="text-3xl text-blue-600" />
              <h2 className="bg-gray-100 p-3 text-black rounded-2xl font-bold md:text-base text-xs">
                {d.question}
              </h2>
            </div>

            {/* Answer */}
            <div className="flex gap-5 py-5 place-items-center">
              <p className="bg-indigo-100 text-gray-600 p-3 rounded-2xl md:text-base text-xs">
                {d.answer}
              </p>
              <Image
                src={photo}
                alt="Mans Packaging Logo"
                className="h-10 w-auto"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
