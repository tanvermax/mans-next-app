import { FaGoogle } from "react-icons/fa";
import Swal from "sweetalert2";
import axios from "axios";
import { signIn, useSession } from "next-auth/react";
import { toast } from "react-toastify";
;

const Social = () => {
  const { data: session } = useSession();

  // console.log("session.user :", session.user)

  const handlegooglein = async () => {
    try {
      signIn("google")
      // console.log("session.user :",session.user)
      if (session.user) {
        const userinfo = {
          name: session.user.name,
          email: session.user.email,
          photo: session.user.image,
          role: "user",
        }
        await axios.post("https://mans-server.vercel.app/user", userinfo)
          .then(res => {
            console.log("res.data", res.data);
            if (res.data) {
              toast.success("Welcome! Your account has been created 🎉",)
            }
          }
        )
      }
    } catch (error) {
      console.error("Google sign-in error:", error);
    }
  };

  return (
    <div className="mt-8">
      {/* Divider */}
      <div className="flex items-center justify-center gap-4">
        <span className="h-px w-1/4 bg-gray-300"></span>
        <span className="text-sm text-gray-500 uppercase tracking-wider">
          or continue with
        </span>
        <span className="h-px w-1/4 bg-gray-300"></span>
      </div>

      {/* Social Buttons */}
      <div className="flex justify-center mt-6">
        <button
          onClick={handlegooglein}
          className="flex items-center gap-2 bg-white shadow-md px-6 py-2 rounded-xl border border-gray-200 hover:shadow-lg hover:border-blue-500 hover:text-blue-600 transition duration-200"
        >
          <FaGoogle className="text-red-500 text-xl" />
          <span className="font-medium">Sign in with Google</span>
        </button>
      </div>
    </div>
  );
};

export default Social;
