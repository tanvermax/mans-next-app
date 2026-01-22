// app/components/Section1.js (Server Component)
import { PiCodesandboxLogoLight } from "react-icons/pi";
import { BsBoxes } from "react-icons/bs";
import { GiBoxUnpacking } from "react-icons/gi";
import { FaBoxOpen } from "react-icons/fa";
import AnimationWrapper from "./AnimationWrapper";

const features = [
  {
    icon: PiCodesandboxLogoLight,
    title: "Wholesale & Bulk Orders",
    description: "Start your custom packaging journey with us! Order wholesale cardboard boxes in bulk, with minimum quantities starting at just 1000 pieces to meet your business scale in Bangladesh.",
  },
  {
    icon: BsBoxes,
    title: "Custom Design & Size",
    description: "Create unique custom packaging boxes tailored to your brand. Our service includes custom printing, die-cut shapes, and specific dimensions for a professional look.",
  },
  {
    icon: GiBoxUnpacking,
    title: "Affordable Pricing in Dhaka",
    description: "Benefit from our competitive pricing on all custom packaging solutions, ensuring you get the best value without compromising on quality or durability.",
  },
  {
    icon: FaBoxOpen,
    title: "Eco-Friendly Materials",
    description: "We guarantee durable, eco-friendly, and reliable packaging. Our high-quality corrugated cardboard is sourced sustainably to protect both your products and the environment.",
  },
];

export default function Section1() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Custom Packaging Manufacturing",
    "provider": {
      "@type": "LocalBusiness",
      "name": "MANS Packaging",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Dhaka",
        "addressCountry": "BD"
      }
    },
    "description": "Wholesale cardboard boxes, custom design, and eco-friendly packaging materials."
  };
  return (
    <section className="container md:px-0 px-5 mx-auto py-12 lg:py-20" aria-labelledby="features-heading">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <header className="text-center mb-10">
        <h2 id="features-heading" className="text-xl lg:text-4xl font-bold text-gray-800">
            Why Choose MANS Packaging for Custom Boxes?
        </h2>
        <p className="mt-3 text-gray-600 max-w-2xl mx-auto text-xs lg:text-base">
          We provide <strong>customized, durable, and cost-effective packaging solutions</strong> designed to fit your business needs, from <strong>custom cardboard boxes</strong> to <strong>bulk shipping supplies in Dhaka</strong>.
        </p>
      </header>

      <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-4 lg:gap-8">
        {features.map((feature, index) => (
          <AnimationWrapper key={index} index={index}>
            <article className="bg-white border border-blue-100 h-full rounded-2xl p-5 shadow-sm hover:shadow-lg transition-shadow text-center flex flex-col items-center group">
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-yellow-50 mb-4 group-hover:bg-yellow-100 transition-colors">
                <feature.icon className="text-3xl lg:text-4xl text-[#e69f06]" aria-hidden="true" />
              </div>
              <h3 className="text-sm lg:text-lg font-bold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-xs lg:text-sm leading-relaxed">
                {feature.description}
              </p>
            </article>
          </AnimationWrapper>
        ))}
      </div>
    </section>
  );
}


// description inoput 1500
// blog image
// blog link set newPart - from blog
// minhaz image
