"use client";

import Button from "@/components/Button";
import { Card, Checkbox, Input, Typography } from "@/components/midleExport";
import { signup } from "@/utils/formActions";
import { useFormState } from "react-dom";
import Swal from "sweetalert2";

const initialState = {
  errors: {},
  success: false,
};

function SignUp() {
  const [state, formAction] = useFormState(signup, initialState);

  if (state?.errors?.common) {
    Swal.fire({
      title: "Đăng ký thất bại!",
      text: state.errors.common,
      icon: "error",
      toast: true,
      timer: 5000,
      showConfirmButton: false,
      position: "top",
    });
  }

  return (
    <main className="w-full min-h-screen bg-primary/10">
      <div className="w-full mx-auto max-w-[600px] p-5">
        <Card className="grid grid-cols-1 gap-0 shadow-2xl p-8">
          <h2 className="text-gray-800 font-bold text-3xl">Đăng ký</h2>
          <p className="text-gray-500 my-5">
            Chúng tôi rất mong có thể kết nối với bạn
          </p>
          <Button
            size="lg"
            variant="outlined"
            className="flex items-center gap-3 text-gray-800 justify-center"
            fullWidth
          >
            <img
              src="https://docs.material-tailwind.com/icons/google.svg"
              alt="metamask"
              className="h-6 w-6"
            />
            Tiếp tục bằng Google
          </Button>
          <div className="flex items-center justify-center my-4">
            <hr className="border-gray-400 flex-1" />
            <span className="text-gray-500 mx-3">Hoặc đăng ký bằng email</span>
            <hr className="border-gray-400 flex-1" />
          </div>
          <form action={formAction}>
            <div className="mb-1 flex flex-col gap-6">
              <Input
                size="lg"
                placeholder="name@mail.com"
                label="Email"
                color="teal"
                error={state?.errors?.email}
                name="email"
              />
              {state?.errors?.email && (
                <span className="text-red-400 text-sm ml-4">
                  * {state?.errors?.email}
                </span>
              )}

              <Input
                size="lg"
                placeholder="Nguyễn Văn A"
                label="Họ tên"
                color="teal"
                error={state?.errors?.name}
                name="name"
              />
              {state?.errors?.name && (
                <span className="text-red-400 text-sm ml-4">
                  * {state?.errors?.name}
                </span>
              )}

              <Input
                size="lg"
                placeholder="0827364827"
                label="Số điện thoại"
                color="teal"
                error={state?.errors?.phone}
                name="phone"
              />
              {state?.errors?.phone && (
                <span className="text-red-400 text-sm ml-4">
                  * {state?.errors?.phone}
                </span>
              )}

              <Input
                size="lg"
                label="Mật khẩu"
                color="teal"
                type="password"
                error={state?.errors?.password}
                name="password"
              />
              {state?.errors?.password && (
                <span className="text-red-400 text-sm ml-4">
                  * {state?.errors?.password}
                </span>
              )}

              <Input
                size="lg"
                label="Xác nhận mật khẩu"
                color="teal"
                type="password"
                error={state?.errors?.confirmPassword}
                name="confirmPassword"
              />
              {state?.errors?.confirmPassword && (
                <span className="text-red-400 text-sm ml-4">
                  * {state?.errors?.confirmPassword}
                </span>
              )}
            </div>
            <Checkbox
              label={
                <Typography
                  variant="small"
                  className="flex items-center font-normal text-gray-800"
                >
                  Tôi đồng ý với&nbsp;
                  <a
                    href="#"
                    className="font-medium transition-colors hover:text-primary underline underline-offset-2"
                  >
                    điều khoản và chính sách
                  </a>
                </Typography>
              }
              containerProps={{ className: "-ml-2.5" }}
              color="teal"
            />
            <Button type="submit" className="mt-6 bg-primary" fullWidth>
              Đăng ký
            </Button>
            <Typography color="gray" className="mt-4 text-center font-normal">
              Bạn đã có tài khoản?{" "}
              <a href="/signin" className="font-medium text-primary underline">
                Đăng nhập ngay
              </a>
            </Typography>
          </form>
        </Card>
      </div>
    </main>
  );
}

export default SignUp;
