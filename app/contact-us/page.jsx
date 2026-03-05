// app/contact-us/page.jsx
import Image from "next/image";

export const metadata = {
  title: 'Contact Us | Mans Packaging - Complete Packaging Solutions',
  description: 'Contact Mans Packaging for custom packaging solutions. Reach us via phone, email, or visit our factory in Dhaka. Get quotes and expert advice.',
  keywords: 'contact packaging, packaging solutions Dhaka, custom boxes, printing services, packaging contact Bangladesh',
  openGraph: {
    title: 'Contact Mans Packaging | Complete Packaging Solutions',
    description: 'Get in touch with Mans Packaging for professional packaging services in Dhaka',
    type: 'website',
  },
}

const Contact = () => {
  return (
    <div className="bg-gray-50 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative py-12 md:py-24 bg-gradient-to-r from-blue-900 to-blue-700">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6">
              Get In Touch
            </h1>
            <p className="text-sm md:text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto px-2">
              Contact Mans Packaging for premium packaging solutions in Dhaka
            </p>
          </div>
        </div>
        <div className="absolute inset-0 bg-black opacity-20"></div>
      </section>

      {/* Breadcrumb Navigation - Hidden on very small screens for cleanliness, or kept compact */}
      <nav className="bg-white shadow-sm border-b border-gray-100" aria-label="Breadcrumb">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3 md:py-4">
          <ol className="flex items-center space-x-2 text-xs md:text-sm">
            <li>
              <a href="/" className="text-gray-500 hover:text-blue-600 transition-colors">
                Home
              </a>
            </li>
            <li className="text-gray-400">/</li>
            <li className="text-blue-600 font-semibold" aria-current="page">
              Contact Us
            </li>
          </ol>
        </div>
      </nav>

      {/* Main Contact Section */}
      <section className="py-8 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Left Contact Info Section */}
            <div className="space-y-6 md:space-y-8">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
                <div className="relative h-48 sm:h-64 md:h-80 w-full">
                  <Image
                    src="https://pagedone.io/asset/uploads/1696488602.png"
                    alt="Mans Packaging contact information"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                  <div className="absolute inset-0 bg-blue-900/40"></div>
                  <div className="absolute inset-0 flex items-center justify-center p-4">
                    <h2 className="text-2xl md:text-4xl font-bold text-white text-center">
                      Our Contact Details
                    </h2>
                  </div>
                </div>
                
                <div className="p-5 md:p-8 space-y-6">
                  {/* Phone */}
                  <div className="flex items-start space-x-4">
                    <div className="shrink-0 w-10 h-10 md:w-12 md:h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 md:w-6 md:h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-1">Phone Number</h3>
                      <a href="tel:+8801787108216" className="text-lg md:text-xl text-gray-700 hover:text-blue-600 transition-colors block">
                        +880 1787-108216
                      </a>
                      <p className="text-xs md:text-sm text-gray-500">Sun - Fri, 9 AM - 6 PM</p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start space-x-4">
                    <div className="shrink-0 w-10 h-10 md:w-12 md:h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 md:w-6 md:h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="break-all">
                      <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-1">Email Address</h3>
                      <a href="mailto:manspacking@gmail.com" className="text-lg md:text-xl text-gray-700 hover:text-blue-600 transition-colors">
                        manspacking@gmail.com
                      </a>
                    </div>
                  </div>

                  {/* Addresses */}
                  <div className="flex items-start space-x-4">
                    <div className="shrink-0 w-10 h-10 md:w-12 md:h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 md:w-6 md:h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-1">Our Locations</h3>
                      <div className="space-y-4">
                        <div>
                          <p className="text-xs font-bold text-blue-600 uppercase tracking-wider">Factory</p>
                          <address className="text-gray-700 not-italic">
                            Sonir Akhra, Midhra bari Road, Jatrabari, Dhaka-1362
                          </address>
                        </div>
                        <div>
                          <p className="text-xs font-bold text-blue-600 uppercase tracking-wider">Office</p>
                          <address className="text-gray-700 not-italic">
                            Govindapur, 32/16 Al modina road, Jatrabari, Dhaka-1362
                          </address>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 border border-gray-100">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">Business Hours</h3>
                <div className="space-y-3 text-sm md:text-base">
                  <div className="flex justify-between items-center pb-2 border-b border-gray-50">
                    <span className="text-gray-600">Sun - Thu</span>
                    <span className="font-semibold text-gray-900">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-gray-50">
                    <span className="text-gray-600">Friday</span>
                    <span className="font-semibold text-gray-900">9:00 AM - 1:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Saturday</span>
                    <span className="font-medium text-red-500">Closed</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Contact Form Section */}
            <div className="bg-white rounded-2xl shadow-xl p-6 md:p-10 border border-gray-50">
              <h2 className="text-2xl md:text-4xl font-bold text-[#25A6E2] mb-3">
                Send Us A Message
              </h2>
              <p className="text-sm md:text-base text-gray-600 mb-8">
                Fill out the form below and our packaging experts will contact you shortly.
              </p>
              
              <form className="space-y-5" >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                      placeholder="email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                    placeholder="+880"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Preferred Communication
                  </label>
                  <div className="flex flex-wrap gap-4 md:gap-6">
                    {['Email', 'Phone Call', 'WhatsApp'].map((method) => (
                      <label key={method} className="inline-flex items-center cursor-pointer">
                        <input
                          type="radio"
                          name="communication"
                          value={method.toLowerCase()}
                          className="w-5 h-5 text-blue-600 border-gray-300 focus:ring-blue-500"
                          defaultChecked={method === 'Email'}
                        />
                        <span className="ml-2 text-sm text-gray-700">{method}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none transition-all resize-none"
                    placeholder="Describe your packaging requirements..."
                  ></textarea>
                </div>

                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="consent"
                      name="consent"
                      type="checkbox"
                      required
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                  </div>
                  <label htmlFor="consent" className="ml-3 text-xs md:text-sm text-gray-600">
                    I agree to receive communications regarding my inquiry.
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#25A6E2] hover:bg-blue-700 text-white font-bold py-4 rounded-lg transition-all shadow-md hover:shadow-lg active:scale-95"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 text-center mb-10 md:mb-16">
            Frequently Asked Questions
          </h2>
          <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
            {[
              { q: "What info is needed for a quote?", a: "Product dimensions, quantity, material preference, and design specs." },
              { q: "Do you offer design services?", a: "Yes, our in-house team creates custom designs tailored to your brand." },
              { q: "What is the MOQ?", a: "Minimum Order Quantities vary by product. Contact us for specific details." },
              { q: "What is production time?", a: "Standard orders take 7-10 business days. Rush options are available." }
            ].map((faq, idx) => (
              <div key={idx} className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Structured Data Script remains same */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Mans Packaging",
            "image": "https://pagedone.io/asset/uploads/1696488602.png",
            "description": "Professional packaging solutions provider in Dhaka, Bangladesh",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Sonir Akhra, Midhra bari Road Jatrabari",
              "addressLocality": "Dhaka",
              "postalCode": "1362",
              "addressCountry": "Bangladesh"
            },
            "telephone": "+8801787108216",
            "email": "manspacking@gmail.com",
            "openingHours": ["Su-Th 09:00-18:00", "Fr 09:00-13:00"],
            "url": "https://manspackaging.com/contact-us",
            "priceRange": "$$",
            "areaServed": {"@type": "Country", "name": "Bangladesh"}
          })
        }}
      />
    </div>
  );
};

export default Contact;