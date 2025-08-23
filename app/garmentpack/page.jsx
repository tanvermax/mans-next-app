import React from "react";
import Head from "next/head";
import Hook1 from "../Hook/Hook1";



export const metadata = {
  title: 'Garments Packaging Boxes And Solutions | Mans Packaging',
  description: 'Custom Garments Packaging Solutions | Mans Packaging',
}


const Garmentpack = () => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>Garments Packaging Boxes And Solutions | Mans Packaging</title>
      </Head>

      <Hook1
        photo="https://manspackaging.com/assets/industrial-packaging-boxes-1024x759-B0J7ZMCo.jpg"
        photo2="https://manspackaging.com/assets/industrial-packaging-boxes-1024x759-B0J7ZMCo.jpg"
        mainheading="Garments Packaging Boxes And Solutions"
        headin1="Lightweight & Cost-Effective: Fashion Industry Packaging Solutions"
        headin2="" // Optional: can leave empty or add a second heading if needed
        descriptions1={[
          `Garments packaging boxes are essential in the fashion industry, providing a safe and secure way to store and transport clothing items. These boxes come in different shapes, sizes, and materials, and are designed to protect garments from damage during transportation and storage while maintaining their shape and quality.`,
          `We understand the importance of packaging in the fashion industry, and we strive to provide our clients with customized garments packaging boxes that cater to their specific needs.`,
        ]}
        descriptions2={[]} // Optional: empty array if no second section content
      />
    </>
  );
};

export default Garmentpack;
