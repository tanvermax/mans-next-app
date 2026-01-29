// app/contact-us/page.jsx
import Image from "next/image";
import photo from "../assets/mans-packaging-factory--pudimc780yapvslwii8873nj3q5m10u0cn194e3xuo.jpg";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";

export const metadata = {
  title: 'Contact Mans Packaging | Expert Packaging Solutions',
  description: 'Get in touch with Mans Packaging for custom packaging solutions. Contact us via phone, email, or visit our factory.',
  keywords: 'packaging contact, printing contact, custom packaging, packaging solutions, contact Mans Packaging',
  openGraph: {
    title: 'Contact Mans Packaging | Expert Packaging Solutions',
    description: 'Get in touch with Mans Packaging for custom packaging solutions.',
    type: 'website',
  },
}

export default function ContactUs() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Image */}
      <section className="relative h-64 md:h-80 lg:h-96 w-full">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-gray-900/50 z-10" />
        <Image
          src={photo}
          alt="Mans Packaging Factory interior showing packaging equipment and workspace"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="relative z-20 h-full flex flex-col justify-center items-center text-white px-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-3">
            Contact Mans Packaging
          </h1>
          <p className="text-lg md:text-xl text-center max-w-2xl">
            Get in touch with our packaging experts for customized solutions
          </p>
        </div>
      </section>

      <main className="w-11/12 mx-auto py-10 font-sans max-w-7xl">
        {/* Breadcrumb for SEO */}
        <nav className="mb-8" aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center text-sm md:text-base">
            <li className="text-gray-500 hover:text-blue-600 transition">
              <a href="/">Home</a>
            </li>
            <li className="mx-2 text-gray-400">/</li>
            <li className="text-blue-600 font-semibold" aria-current="page">
              Contact Us
            </li>
          </ol>
        </nav>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Contact Information Section */}
          <div className="lg:w-2/5">
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Get In Touch
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-50 p-3 rounded-lg mr-4">
                    <FaPhone className="text-blue-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">Phone</h3>
                    <a 
                      href="tel:+1234567890" 
                      className="text-gray-600 hover:text-blue-600 transition text-lg"
                    >
                      +880 1787-108216
                    </a>
                    <p className="text-sm text-gray-500 mt-1">Mon-Fri 9am-6pm</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-50 p-3 rounded-lg mr-4">
                    <FaEnvelope className="text-blue-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">Email</h3>
                    <a 
                      href="mailto:info@manspackaging.com" 
                      className="text-gray-600 hover:text-blue-600 transition text-lg"
                    >
                      info@manspackaging.com
                    </a>
                    <p className="text-sm text-gray-500 mt-1">We respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-50 p-3 rounded-lg mr-4">
                    <FaMapMarkerAlt className="text-blue-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">Factory Address</h3>
                    <address className="text-gray-600 text-lg not-italic">
                      Sonir Akhra<br />
                      Midhra bari Road<br />
                      Jatrabari<br />
                     Dhaka-1362
                    </address>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-50 p-3 rounded-lg mr-4">
                    <FaClock className="text-blue-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">Business Hours</h3>
                    <ul className="text-gray-600 space-y-1">
                      <li className="flex justify-between">
                        <span>Monday - Sunday:</span>
                        <span className="font-semibold">9:00 AM - 6:00 PM</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Saturday:</span>
                        <span className="font-semibold">10:00 AM - 4:00 PM</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Friday:</span>
                        <span className="font-semibold">Closed</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-6 md:p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Why Choose Mans Packaging?</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  <span className="text-gray-700">Over 10 years of industry experience</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  <span className="text-gray-700">Customized packaging solutions</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  <span className="text-gray-700">Fast turnaround times</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  <span className="text-gray-700">Quality guaranteed</span>
                </li>
              </ul>
            </div>
          </div>

        
        </div>
      </main>

      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Mans Packaging",
            "image": "https://yourdomain.com" + photo.src,
            "description": "Custom packaging solutions provider with over 10 years of experience.",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "123 Packaging Street",
              "addressLocality": "City",
              "addressRegion": "State",
              "postalCode": "12345",
              "addressCountry": "Country"
            },
            "telephone": "+1234567890",
            "email": "info@manspackaging.com",
            "openingHours": [
              "Mo-Fr 09:00-18:00",
              "Sa 10:00-16:00"
            ],
            "url": "https://yourdomain.com"
          })
        }}
      />
    </div>
  );
}


// conatc us office address
// navber 
//  portfolio dekstop
// dhasfbord
