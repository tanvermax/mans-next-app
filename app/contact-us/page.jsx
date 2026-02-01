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
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-r from-blue-900 to-blue-700">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Get In Touch
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Contact Mans Packaging for premium packaging solutions in Dhaka
            </p>
          </div>
        </div>
        <div className="absolute inset-0 bg-black opacity-20"></div>
      </section>

      {/* Breadcrumb Navigation */}
      <nav className="bg-white shadow-sm" aria-label="Breadcrumb">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
          <ol className="flex items-center space-x-2 text-sm">
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
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left Contact Info Section */}
            <div className="space-y-8">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="relative h-64 md:h-80">
                  <Image
                    src="https://pagedone.io/asset/uploads/1696488602.png"
                    alt="Mans Packaging contact information and factory location"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                  <div className="absolute inset-0 bg-blue-900/40"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white text-center px-4">
                      Our Contact Details
                    </h2>
                  </div>
                </div>
                
                <div className="p-6 md:p-8 space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">Phone Number</h3>
                      <a 
                        href="tel:+8801787108216" 
                        className="text-xl text-gray-700 hover:text-blue-600 transition-colors"
                        aria-label="Call Mans Packaging at +880 1787 108216"
                      >
                        +880 1787-108216
                      </a>
                      <p className="text-sm text-gray-500 mt-1">Available 9 AM - 6 PM, Sunday - Friday</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">Email Address</h3>
                      <a 
                        href="mailto:manspacking@gmail.com" 
                        className="text-xl text-gray-700 hover:text-blue-600 transition-colors"
                        aria-label="Email Mans Packaging at manspacking@gmail.com"
                      >
                        manspacking@gmail.com
                      </a>
                      <p className="text-sm text-gray-500 mt-1">Response within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">Factory Address</h3>
                      <address className="text-lg text-gray-700 not-italic">
                        Sonir Akhra, Midhra bari Road<br />
                        Jatrabari, Dhaka-1362<br />
                        Bangladesh
                      </address>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">Office Address</h3>
                      <address className="text-lg text-gray-700 not-italic">
                        Govindapur, 62 no. ward,<br /> 32/16 Al modina road,<br /> Jatrabari, Dhaka 1362<br />
                      </address>
                      <p className="text-sm text-gray-500 mt-1">Visit our office for consultation</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Business Hours</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                    <span className="text-gray-600">Sunday - Thursday</span>
                    <span className="font-semibold text-gray-900">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                    <span className="text-gray-600">Friday</span>
                    <span className="font-semibold text-gray-900">9:00 AM - 1:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Saturday</span>
                    <span className="font-semibold text-gray-900">Closed</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Contact Form Section */}
            <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
              <h2 className="text-3xl md:text-4xl font-bold text-[#25A6E2] mb-2">
                Send Us A Message
              </h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and our packaging experts will contact you shortly.
              </p>
              
              <form className="space-y-6" >
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
                      className="w-full px-4 py-3 text-gray-900 placeholder-gray-400 bg-white rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 text-gray-900 placeholder-gray-400 bg-white rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 text-gray-900 placeholder-gray-400 bg-white rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="+880 1XXX-XXXXXX"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Preferred Method of Communication
                  </label>
                  <div className="flex flex-wrap gap-6">
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name="communication"
                        value="email"
                        className="w-5 h-5 text-blue-600 border-gray-300 focus:ring-blue-500"
                        defaultChecked
                      />
                      <span className="ml-2 text-gray-700">Email</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name="communication"
                        value="phone"
                        className="w-5 h-5 text-blue-600 border-gray-300 focus:ring-blue-500"
                      />
                      <span className="ml-2 text-gray-700">Phone Call</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        name="communication"
                        value="whatsapp"
                        className="w-5 h-5 text-blue-600 border-gray-300 focus:ring-blue-500"
                      />
                      <span className="ml-2 text-gray-700">WhatsApp</span>
                    </label>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    required
                    className="w-full px-4 py-3 text-gray-900 placeholder-gray-400 bg-white rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                    placeholder="Tell us about your packaging requirements..."
                  ></textarea>
                </div>

                <div className="flex items-center">
                  <input
                    id="consent"
                    name="consent"
                    type="checkbox"
                    required
                    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <label htmlFor="consent" className="ml-2 text-sm text-gray-600">
                    I agree to receive communications from Mans Packaging regarding my inquiry.
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#25A6E2] hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl"
                >
                  Send Message
                </button>
              </form>

              {/* Quick Response Note */}
              <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-100">
                <p className="text-blue-800 text-sm">
                  <span className="font-semibold">Note:</span> We typically respond to all inquiries within 2-4 business hours during working days.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Find Our Factory
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Visit our factory in Jatrabari, Dhaka for a personal consultation about your packaging needs.
            </p>
          </div>
          {/* <div className="rounded-2xl overflow-hidden shadow-2xl">
            <Map />
          </div> */}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">What information should I provide for a quote?</h3>
              <p className="text-gray-600">Include product dimensions, quantity, preferred materials, and any design specifications for an accurate quote.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Do you offer design services?</h3>
              <p className="text-gray-600">Yes, we have an in-house design team to create custom packaging designs that match your brand identity.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">What is your minimum order quantity?</h3>
              <p className="text-gray-600">MOQ varies by product type. Contact us with your requirements for specific minimum quantities.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">How long does production take?</h3>
              <p className="text-gray-600">Standard orders take 7-10 business days. Rush options are available for urgent requirements.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Structured Data for SEO */}
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
            "openingHours": [
              "Su-Th 09:00-18:00",
              "Fr 09:00-13:00"
            ],
            "url": "https://yourdomain.com/contact-us",
            "priceRange": "$$",
            "areaServed": {
              "@type": "Country",
              "name": "Bangladesh"
            }
          })
        }}
      />
    </div>
  );
};

export default Contact;