// app/contact-us/page.jsx
import Image from "next/image";
import photo from "../assets/mans-packaging-factory--pudimc780yapvslwii8873nj3q5m10u0cn194e3xuo.jpg";
import { FaMapMarkerAlt, FaIndustry, FaBuilding } from "react-icons/fa";

export default function ContactUs() {
  return (
    <div className="bg-gray-50">

      {/* Hero Section */}
      <section className="relative h-72 md:h-96 w-full">
        <div className="absolute inset-0 bg-black/60 z-10" />

        <Image
          src={photo}
          alt="Mans Packaging Factory"
          fill
          className="object-cover"
          priority
        />

        <div className="relative z-20 h-full flex flex-col justify-center items-center text-white text-center px-4">
          {/* <h1 className="text-4xl md:text-5xl font-bold">
            Our Locations
          </h1> */}
          <p className="mt-3 text-lg max-w-xl">
            Visit our corporate office or factory to explore our packaging production and services
          </p>
        </div>
      </section>


      {/* Company Overview Section */}
      <section className="py-14">
        <div className="w-11/12 max-w-6xl mx-auto text-center">

          <h2 className="text-3xl font-bold mb-6">
            About Our Company Facilities
          </h2>

          <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Mans Packaging operates with modern manufacturing facilities and
            professional corporate management. Our office handles client
            consultation, project planning and customer support, while our
            factory is equipped with advanced packaging and printing
            technology ensuring high quality production standards.
          </p>

        </div>
      </section>


      {/* Office Address Section */}
      <section className="py-14 bg-white">
        <div className="w-11/12 max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">

          <div>
            <div className="flex items-center gap-3 mb-4">
              <FaBuilding className="text-blue-600 text-2xl" />
              <h2 className="text-3xl font-bold">Corporate Office</h2>
            </div>

            <p className="text-gray-600 mb-6">
              Our corporate office manages customer support, order processing,
              and business communications.
            </p>

            <div className="flex gap-3 text-gray-700">
              <FaMapMarkerAlt className="mt-1 text-blue-600" />
              <p>
                Sonir Akhra <br />
                Midhra Bari Road <br />
                Jatrabari, Dhaka-1362 <br />
                Bangladesh
              </p>
            </div>
          </div>


          {/* Office Map */}
          <iframe
            src="https://maps.google.com/maps?q=jatrabari%20dhaka&t=&z=14&ie=UTF8&iwloc=&output=embed"
            className="w-full h-[350px] rounded-xl shadow-md"
            loading="lazy"
          />

        </div>
      </section>



      {/* Factory Address Section */}
      <section className="py-14">
        <div className="w-11/12 max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">

          {/* Factory Image */}
          <Image
            src={photo}
            alt="Factory"
            className="rounded-xl shadow-md"
          />


          <div>
            <div className="flex items-center gap-3 mb-4">
              <FaIndustry className="text-blue-600 text-2xl" />
              <h2 className="text-3xl font-bold">Production Factory</h2>
            </div>

            <p className="text-gray-600 mb-6">
              Our factory facility is equipped with modern packaging and
              printing machinery, operated by skilled technicians to ensure
              premium quality packaging solutions.
            </p>

            <div className="flex gap-3 text-gray-700">
              <FaMapMarkerAlt className="mt-1 text-blue-600" />
              <p>
                Sonir Akhra Industrial Area <br />
                Jatrabari, Dhaka <br />
                Bangladesh
              </p>
            </div>
          </div>

        </div>
      </section>



      {/* Factory Map Section */}
      <section className="py-14 bg-white">
        <div className="w-11/12 max-w-7xl mx-auto text-center">

          <h2 className="text-3xl font-bold mb-8">
            Factory Location Map
          </h2>

          <iframe
            src="https://maps.google.com/maps?q=jatrabari%20dhaka&t=&z=13&ie=UTF8&iwloc=&output=embed"
            className="w-full h-[400px] rounded-xl shadow-lg"
            loading="lazy"
          />

        </div>
      </section>

    </div>
  );
}
