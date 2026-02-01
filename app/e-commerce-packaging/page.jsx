
import React from "react";
import Image from "next/image";

import photo from "../assets/ecommerce-packaging.jpg";
import photo1 from "../assets/ecommerce-packaging-solution.png";
import Faq from "../Componet/Faq/Faq";
import Hook1 from "../hook/Hook1";

export const metadata = {
  title: 'E-Commerce Packaging | Mans Packaging',
  description: 'Custom E-commerce Packaging | Shipping Carton Boxes | Mans Packaging',
}

const Ecom = () => {
  return (
    <div className="py-10">
      <h1 className="md:text-3xl text-black text-xs font-bold w-11/12 mx-auto">
        E-COMMERCE PACKAGING | CUSTOM SHIPPING CARTON BOXES
      </h1>
     <Hook1
        photo={photo}
        photo2={photo1}
        mainheading="Garments Packaging Boxes And Solutions"
        headin1="Scale. Savings. Sustainability."
        headin2="E-COMMERCE PACKAGING | CUSTOM SHIPPING CARTON BOXES" // Optional: can leave empty or add a second heading if needed
        descriptions1={[
          ` We offer a wide range of custom e-commerce packaging solutions
            that are designed to not only protect your products during
            transit, but also to create a memorable unboxing experience
            for the customers. From custom printed boxes and bags, to
            inserts and packaging accessories, we have everything you
            need to take your ecommerce business to the next level.`,
          `Our team of experts will work closely with you to create a
            packaging solution that perfectly matches your brand identity,
            while also meeting your specific needs and budget. Whether you
            need packaging for a one-time event, or a recurring order, we
            have the flexibility to meet your needs.
            `,,
        ]}
        descriptions2={[`
            At Mans Printing and Packaging, we understand the importance of
            sustainability in ecommerce packaging. That’s why we offer
            eco-friendly options that not only reduce your environmental
            impact, but also help to differentiate your brand and promote a
            positive image.`]} // Optional: empty array if no second section content
      />


      

     

      {/* Second Section */}
      <div className="bg-gray-100">
        <div className="md:grid grid-cols-2 lg:py-5 w-10/12 mx-auto">
          <div className="md:p-20">
            <Image src={photo1} alt="Packaging Solution" />
          </div>
          <div className="place-content-center lg:px-10 p-2">
            <h2 className="md:text-4xl font-bold mb-10">PACKAGING SOLUTIONS</h2>
            <p className="text-gray-700 md:text-base text-xs">
              As the ecommerce industry continues to grow, so does the demand
              for efficient and effective packaging solutions. At Mans Printing
              and Packaging, we provide custom packaging solutions specifically
              designed for the unique needs of e-commerce businesses.
              <br />
              <br />
              Our solutions not only ensure that your products arrive safely to
              your customers, but they also provide a memorable unboxing
              experience that can enhance your brand image and customer loyalty.
              <br />
              <br />
              <strong>E-commerce Packaging Solutions We Offer:</strong>
              <br />
              <br />
              <strong>Custom Printed Boxes:</strong> Make a strong first
              impression with custom printed boxes. Choose from a variety of
              materials, sizes, and printing options to create a packaging
              solution that perfectly matches your brand identity.
              <br />
              <br />
              <strong>Eco-Friendly Packaging:</strong> Reduce your environmental
              impact with eco-friendly packaging options, including biodegradable
              and recycled materials.
              <br />
              <br />
              <strong>Protective Packaging:</strong> Ensure that your products
              arrive in perfect condition with protective packaging options,
              including cushioning materials, custom inserts, and more.
              <br />
              <br />
              <strong>Reusable Packaging:</strong> Encourage customers to reduce
              waste and promote sustainability with reusable packaging options,
              including durable bags and containers.
              <br />
              <br />
              <a
                className="text-blue-900"
                href="https://www.staciamericas.com/blog/fulfillment-packaging-services-unboxing-a-hidden-opportunity"
                target="_blank"
                rel="noopener noreferrer"
              >
                Fulfillment Services:
              </a>{" "}
              Streamline your packaging and shipping processes with our
              fulfillment services, including kitting, labeling, and more.
            </p>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <Faq />
    </div>
  );
};

export default Ecom;
