"use client";

import Button from "@/components/Button";
import { Card, Input, Typography } from "@/components/midleExport";
import { login } from "@/utils/formActions";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useFormState } from "react-dom";
import { checkAuth } from "@/lib/session";
import { useEffect } from "react";

const initialState = {
  errors: {},
  success: false,
};

function SignIn() {
  const [state, formAction] = useFormState(login, initialState);
  const searchParams = useSearchParams();
  const returnUrl = searchParams.get("returnUrl") || "/";
  const router = useRouter();
  useEffect(() => {
    const handleAuth = async () => {
      try {
        const authResult = await checkAuth();
        if (authResult.isAuth) router.replace("/");
      } catch (err) {
        console.log(err);
      }
    };

    handleAuth();
  }, []);

  return (
    <main className="w-full min-h-screen bg-primary/10 pt-11">
      <div className="w-full mx-auto max-w-[600px] p-5">
        <Card className="grid grid-cols-1 gap-0 shadow-2xl p-8">
          <h2 className="text-gray-800 font-bold text-3xl">Đăng nhập</h2>
          <p className="text-gray-500 my-5">
            Bạn chưa có tài khoản?{" "}
            <Link href="/signup" className="text-primary underline">
              Đăng ký ngay
            </Link>
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
            Đăng nhập bằng Google
          </Button>
          <div className="flex items-center justify-center my-4">
            <hr className="border-gray-400 flex-1" />
            <span className="text-gray-400 mx-3">
              Hoặc đăng nhập bằng tài khoản của bạn
            </span>
            <hr className="border-gray-400 flex-1" />
          </div>
          <form action={formAction}>
            <div className="mb-1 flex flex-col gap-6">
              <div>
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
              </div>

              <div>
                <Input
                  type="password"
                  size="lg"
                  label="Mật khẩu"
                  color="teal"
                  error={state?.errors?.password}
                  name="password"
                />
                {state?.errors?.password && (
                  <span className="text-red-400 text-sm ml-4">
                    * {state?.errors?.password}
                  </span>
                )}
                {state?.errors?.common && (
                  <span className="text-red-400 text-sm ml-4">
                    * {state?.errors?.common}
                  </span>
                )}
              </div>
            </div>
            <input type="hidden" value={returnUrl} name="returnUrl" />
            <Typography color="gray" className="mt-4 text-right font-normal">
              <a
                href="/forgot-password"
                className="font-medium text-primary underline"
              >
                Quên mật khẩu?
              </a>
            </Typography>
            <Button type="submit" className="mt-6 bg-primary" fullWidth>
              Đăng nhập
            </Button>
          </form>
        </Card>
      </div>
    </main>
  );
}

export default SignIn;
