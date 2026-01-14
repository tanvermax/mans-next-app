// app/about-us/page.jsx
import Image from "next/image";
import photo from "../assets/mans-packaging-factory--pudimc780yapvslwii8873nj3q5m10u0cn194e3xuo.jpg";

export const metadata = {
  title: 'About Mans Packaging | Mans Packaging',
  description: 'Learn about Mans Packaging, a leader in innovative packaging solutions.',
}

export default function AboutUs() {
  return (
    <div className="w-11/12 mx-auto py-10 font-sans">
      {/* <Head>
        <title>About Mans Packaging | Mans Packaging</title>
        <meta
          name="description"
          content="Learn about Mans Printing and Packaging, a leader in innovative, high-quality, and customized packaging solutions for businesses of all sizes."
        />
      </Head> */}

      <div className="relative w-full h-80 md:h-[450px] rounded-lg overflow-hidden shadow-lg">
        <Image
          src={photo}
          alt="Mans Packaging Factory"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>

      <div className="mt-8">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-5">
          About Mans Packaging
        </h1>
        <hr className="border-indigo-600 mb-5" />
        <p className="text-lg md:text-xl text-gray-700 mb-4 font-semibold">
          “Mans Printing and Packaging: A Leader in Innovative Packaging Solutions”
        </p>

        <p className="text-gray-600 mb-4">
          At Mans Printing and Packaging, we are dedicated to providing high-quality, customized packaging solutions to businesses of all sizes. With over a decade of experience in the industry, we have a proven track record of delivering innovative and effective packaging solutions to meet the unique needs of each of our clients.
        </p>

        <p className="text-gray-600 mb-4">
          Our team of experts is passionate about helping businesses improve their packaging processes, increase efficiency, and enhance the overall customer experience. We are committed to using the latest technology and equipment to ensure that every project we undertake is completed to the highest standards.
        </p>

        <p className="text-gray-600 mb-4">
          Whether you need custom printed boxes, bags, labels, or any other type of packaging, our team of experts can help you design and create the perfect solution for your needs. We offer a wide range of packaging options to meet your specific requirements.
        </p>

        <p className="text-gray-600 mb-10">
          At Mans Printing and Packaging, we believe that every project is an opportunity to build a lasting relationship with our clients. That’s why we work closely with each of our customers to understand their needs and provide tailored, cost-effective solutions that meet their unique requirements. Contact us today to learn more about how we can help you with your packaging needs.
        </p>
      </div>
    </div>
  );
}
