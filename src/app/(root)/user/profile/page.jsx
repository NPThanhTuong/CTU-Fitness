"use client";

import { checkAuth } from "@/lib/session";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import axiosInstance from "@/utils/axiosInstance";
import { AiFillCalendar, AiFillMail, AiFillPhone } from "react-icons/ai";
import { BsFillPinMapFill } from "react-icons/bs";
import { BallTriangle } from "react-loader-spinner";

function UserProfilePage() {
  const router = useRouter();
  const pathName = usePathname();
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleAuth = async () => {
      try {
        const authResult = await checkAuth();
        if (!authResult.isAuth) router.push(`/signin?returnUrl=${pathName}`);
        else {
          const res = await axiosInstance.get("/account", {
            headers: {
              Authorization: `Bearer ${authResult.user.token}`,
            },
          });

          const userData = res.data;
          setUser(userData);
          setLoading(false);
        }
      } catch (err) {
        console.log(err);
      }
    };

    handleAuth();
  }, []);

  return (
    <div>
      <div className="h-[80px] bg-[#27313b]"></div>
      {loading ? (
        <div className="min-h-screen flex justify-center items-center flex-col">
          <BallTriangle
            height={100}
            width={100}
            radius={5}
            color="#ed563b"
            wrapperClass=""
          />
          <p className="text-2xl text-center text-gray-500 font-bold mt-6">
            Đang tải....
          </p>
        </div>
      ) : (
        <div className="px-6 rounded-md shadow-lg mt-12">
          <div className="flex justify-center">
            <img
              src={`/images/${user.avatar}`}
              alt="avatar"
              className=" h-32 w-32 rounded-full object-contain"
            />
          </div>
          <div className="text-center mt-12">
            <h3 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700">
              {user.customer.name}
            </h3>
            <div className="text-sm mt-0 mb-2 font-bold uppercase flex justify-center items-center gap-2">
              <AiFillMail />
              {user.email}
            </div>
            <div className="text-sm leading-normal mt-0 mb-2 flex justify-center items-center gap-2 font-bold uppercase">
              <BsFillPinMapFill />
              {user.customer.address}
            </div>
            <div className="mb-2 flex justify-center items-center gap-2 mt-10">
              <AiFillPhone />
              {user.customer.phone}
            </div>
            <div className="mb-2 flex justify-center items-center gap-2">
              <AiFillCalendar />
              {user.customer.dob}
            </div>
          </div>
          <div className="mt-10 py-10 border-t text-center">
            <div className="flex flex-wrap justify-center">
              <div className="w-full lg:w-9/12 px-4">
                <p className="mb-4 text-lg leading-relaxed">
                  {user.customer.description}
                </p>
                <a href="#pablo" className="font-normal text-pink-500">
                  Show more
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default UserProfilePage;
