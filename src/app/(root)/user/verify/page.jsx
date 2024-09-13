"use client";

import { Button, Input } from "@/components/midleExport";
import { getCookieValue } from "@/lib/session";
import { refreshVerification, verify } from "@/utils/formActions";
import { useEffect, useState } from "react";
import { useFormState } from "react-dom";
import Swal from "sweetalert2";

const initialState = {
  errors: {},
};

function UserVerifyPage() {
  const [userEmail, setUserEmaill] = useState("");
  const [verifyState, formVerifyAction] = useFormState(verify, initialState);
  const [refreshVerificationstate, formRefreshVerificationAction] =
    useFormState(refreshVerification, {});

  useEffect(() => {
    const getUserEmail = async () => {
      try {
        const email = await getCookieValue("userEmail");
        console.log(email);
        setUserEmaill(email);
      } catch (err) {
        console.log(err);
      }
    };

    getUserEmail();
  });

  if (refreshVerificationstate?.success === false) {
    Swal.fire({
      title: "Thành công",
      text: "Gửi mã xác nhận thành công!",
      icon: "success",
      toast: true,
      timer: 3000,
      showConfirmButton: false,
      position: "top",
    });
  }

  if (refreshVerificationstate?.success === false) {
    Swal.fire({
      title: "Thất bại",
      text: refreshVerificationstate.error,
      icon: "error",
      toast: true,
      timer: 3000,
      showConfirmButton: false,
      position: "top",
    });
  }

  if (verifyState?.errors?.common) {
    Swal.fire({
      title: "Thất bại",
      text: verifyState?.errors?.common,
      icon: "error",
      toast: true,
      timer: 3000,
      showConfirmButton: false,
      position: "top",
    });
  }

  return (
    <div>
      <div className="h-[80px] bg-[#27313b]"></div>
      <div className="flex justify-center items-center">
        <div className="rounded-e-md shadow-lg p-6 md:w-[600px] my-10">
          <div className="flex justify-center items-center">
            <img
              src="/images/email.png"
              alt="Email verification image"
              className="w-44"
            />
          </div>

          <div className="text-center mt-6">
            <h3 className="text-2xl font-bold">Kiểm tra email của bạn</h3>
            <p className="text-gray-500 mt-2">
              Chúng tôi vừa gửi mã xác nhận đăng ký tài khoản cho bạn. Vui lòng
              nhập mã xác nhận để đăng ký tài khoảng tại CTU Fitness
            </p>
            <form
              action={formVerifyAction}
              className="flex flex-col items-center mt-3"
            >
              <div className="w-60">
                <Input
                  color="teal"
                  name="token"
                  size="lg"
                  label="Mã xác nhận"
                />
                {verifyState?.errors?.token && (
                  <span className="text-red-400 text-sm ml-4">
                    * {verifyState?.errors?.token}
                  </span>
                )}
              </div>
              <input type="hidden" name="email" value={userEmail} />
              <Button type="submit" color="deep-orange" className="mt-3">
                Xác nhận
              </Button>
            </form>

            <form
              action={formRefreshVerificationAction}
              className="mt-5 flex items-center justify-center"
            >
              <span>Bạn chưa nhận được mã xác nhận?</span>
              <input type="hidden" name="email" value={userEmail} />
              <Button type="submit" size="sm" color="teal" className="ml-2">
                Gửi lại
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserVerifyPage;
