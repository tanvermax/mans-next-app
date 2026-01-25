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

          {/* Contact Form Section */}
          <div className="lg:w-3/5">
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                Send Us a Message
              </h2>
              <p className="text-gray-600 mb-6">
                Have questions about our packaging solutions? Fill out the form below and our team will get back to you shortly.
              </p>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                      placeholder="Your Company"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                      placeholder="+1 (234) 567-890"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                  >
                    <option value="">Select a subject</option>
                    <option value="custom-boxes">Custom Boxes</option>
                    <option value="packaging-design">Packaging Design</option>
                    <option value="bulk-order">Bulk Order Inquiry</option>
                    <option value="quote">Request a Quote</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                    placeholder="Tell us about your packaging needs..."
                  ></textarea>
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="consent"
                    name="consent"
                    required
                    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <label htmlFor="consent" className="ml-3 text-sm text-gray-600">
                    I agree to receive communications from Mans Packaging regarding my inquiry.
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* FAQ Section */}
            <div className="mt-8 bg-white rounded-xl shadow-lg p-6 md:p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h3>
              <div className="space-y-4">
                <div className="border-b border-gray-200 pb-4">
                  <h4 className="font-semibold text-gray-800 mb-2">What is your typical turnaround time?</h4>
                  <p className="text-gray-600">Standard orders typically take 7-10 business days. Rush orders are available upon request.</p>
                </div>
                <div className="border-b border-gray-200 pb-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Do you offer design services?</h4>
                  <p className="text-gray-600">Yes, we have an in-house design team to help create custom packaging designs that match your brand.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">What is your minimum order quantity?</h4>
                  <p className="text-gray-600">Our MOQ varies based on product type. Contact us for specific requirements.</p>
                </div>
              </div>
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