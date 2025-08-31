"use client";

import Link from "next/link";
import { FaRegUserCircle, FaSellsy, FaThList } from "react-icons/fa";
import { SiHomebridge } from "react-icons/si";
import { PiFlagBannerFoldDuotone } from "react-icons/pi";
import { CiImport } from "react-icons/ci";
import { BsClipboardCheck } from "react-icons/bs";
import { MdHomeRepairService } from "react-icons/md";
import Image from "next/image";
import useAuth from "../provider/useAuth";


const Dashitem = () => {


  const { userData, loading } = useAuth();
  // const user = session?.user;
  if (loading) {
    return <>
      <span className="loading loading-spinner loading-sm"></span></>
  }
  console.log("userData,", userData)


  const menuItems = [
    { label: "Home", href: "/admindashbord/adminhome", icon: <SiHomebridge /> },
    { label: "Post", href: "/admindashbord/postdetails", icon: <FaThList /> },
    { label: "User", href: "/admindashbord/userdetails", icon: <FaRegUserCircle /> },
    { label: "Banner", href: "/admindashbord/dynamicbanner", icon: <PiFlagBannerFoldDuotone /> },
    { label: "Portfolio", href: "/admindashbord/portfolio", icon: <CiImport /> },
    { label: "Client", href: "/admindashbord/client", icon: <BsClipboardCheck /> },
    { label: "Service", href: "/admindashbord/service", icon: <MdHomeRepairService /> },
    { label: "Sales", href: "/admindashbord/sales", icon: <FaSellsy /> },
  ];

  return (
    <aside className=" w-64 bg-gradient-to-b from-white to-gray-100 p-6 flex flex-col shadow-lg">
      {/* User Info */}
      <div className="flex flex-col items-center bg-white p-4 rounded-xl shadow-md mb-8 transition hover:shadow-xl">
        {
          userData.image ? <FaRegUserCircle className="text-5xl lg:text-6xl text-[#25AAE1] mb-2" /> : <>
            <Image
              src={userData.photo}
              alt="packaging-admin"
              height={200}
              width={200} 
              className="rounded-full h-20 w-20"/>
          <div className=" absolute text-white p-2 bg-blue-400 font-semibold text-[10px] left-16 rounded-full">{userData.role}</div>
          </>

        }

        <p className="text-lg font-semibold text-gray-800">{userData?.name || "Guest userData"}</p>
        <p className="text-sm text-gray-500">{userData?.email || "No Email"}</p>
        {/* {user && (
          <p className="text-sm text-[#25AAE1] font-bold mt-1">Role: {user.role}</p>
        )} */}
      </div>

      {/* Dashboard Menu */}
      <h2 className="text-xl font-bold text-gray-700 mb-6 text-center">Dashboard Menu</h2>

      <nav className="flex flex-col gap-3 h-[400px] overflow-y-auto">
        {menuItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="flex items-center gap-3 text-gray-700 hover:text-green-600 text-lg font-medium px-4 py-3 rounded-lg hover:bg-green-50 transition duration-300 shadow-sm hover:shadow-md"
          >
            <span className="text-2xl text-[#25AAE1]">{item.icon}</span>
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default Dashitem;
