import Image from "next/image";

const Hook1 = ({ 
  mainheading, 
  photo, 
  photo2, 
  headin1, 
  headin2, 
  descriptions1 = [], 
  descriptions2 = [] 
}) => {
  return (
    <div className="py-10">
      {/* Main Heading */}
      <h1 className="md:text-3xl text-black text-xs font-bold w-11/12 mx-auto">{mainheading}</h1>

      {/* First Section */}
      <div className="md:grid flex flex-col-reverse md:grid-cols-2 md:py-10 py-5 gap-10 w-10/12 mx-auto">
        <div className="place-content-center">
          <h2 className="md:text-2xl text-black font-bold mb-5">{headin1}</h2>
          <div className="text-gray-700 md:text-base text-xs space-y-4">
            {descriptions1.map((text, i) => (
              <p key={i}>{text}</p>
            ))}
          </div>
        </div>
        <div>
          <Image 
            src={photo} 
            alt={headin1 || "section image"} 
            width={600} 
            height={400} 
            className="rounded-b-full lg:p-20" 
          />
        </div>
      </div>

      {/* Second Section */}
      <div className="bg-gray-100">
        <div className="md:grid grid-cols-2 lg:py-5 w-10/12 mx-auto">
          <div className="md:p-20">
            <Image 
              src={photo2} 
              alt={headin2 || "section image"} 
              width={600} 
              height={400} 
            />
          </div>
          <div className="place-content-center lg:px-10 p-2">
            <h2 className="md:text-4xl font-bold mb-10">{headin2}</h2>
            <div className="text-gray-700 md:text-base text-xs space-y-4">
              {descriptions2.map((text, i) => (
                <p key={i}>{text}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hook1;
