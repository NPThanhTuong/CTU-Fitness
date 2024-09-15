"use client";
import { checkAuth } from "@/lib/session";
import axiosInstance from "@/utils/axiosInstance";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { BallTriangle } from "react-loader-spinner";

function PaymentReturnPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathName = usePathname();
  const [paymentResult, setPaymentResult] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const confirmPayment = async () => {
      try {
        const authResult = await checkAuth();
        if (!authResult.isAuth)
          return router.push(`/signin?returnUrl=${pathName}`);

        const res = await axiosInstance.get("/registration/payment/confirm", {
          params: searchParams,
          headers: {
            Authorization: `Bearer ${authResult.user.token}`,
          },
        });

        const paymentResult = res.data;
        setPaymentResult(paymentResult);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    confirmPayment();
  }, [searchParams]);
  return (
    <main className="min-h-screen">
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
      ) : paymentResult.rspCode === "00" ? (
        <div className="flex justify-center items-center">
          <div className="rounded-e-md shadow-lg p-6 md:w-[600px] my-10">
            <div className="flex justify-center items-center">
              <img
                src="/images/credit-card.png"
                alt="Payment image"
                className="w-44"
              />
            </div>

            <div className="text-center mt-6">
              <h3 className="text-2xl font-bold">Thanh toán thành công</h3>
              <p className="text-gray-500 mt-2">
                Hãy đến CTU Fitness để tập luyện ngay nào! Chúng tôi vô cùng háo
                hức để được đồng hành cùng bạn. Bắt đầu tập luyện ngay nào!
              </p>
            </div>
            <div className="mt-4 mx-auto">
              <div className="grid grid-cols-2 gap-2">
                <p className="font-semibold">Mã giao dịch thanh toán:</p>
                <p>{searchParams.get("vnp_TxnRef")}</p>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <p className="font-semibold">Mã giao dịch tại VNPAY:</p>
                <p>{searchParams.get("vnp_TransactionNo")}</p>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <p className="font-semibold">Số tiền thanh toán (VND):</p>
                <p>{searchParams.get("vnp_Amount")}</p>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <p className="font-semibold">Ngân hàng thanh toán:</p>
                <p>{searchParams.get("vnp_BankCode")}</p>
              </div>
            </div>
            <div className="flex justify-center mt-3">
              <Link
                href="/"
                className="px-5 py-2 bg-primary text-white rounded-md"
              >
                Trở về
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center">
          <div className="rounded-e-md shadow-lg p-6 md:w-[600px] my-10">
            <div className="flex justify-center items-center">
              <img
                src="/images/disruption.png"
                alt="Disruption transaction image"
                className="w-44"
              />
            </div>

            <div className="text-center mt-6">
              <h3 className="text-2xl font-bold">Giao dịch thất bại</h3>
              <p className="text-gray-500 mt-2">
                Có một số trục trặc xảy ra trong quá trình thanh toán. Xin vui
                lòng thử lại!
              </p>
            </div>
            <div className="text-center text-xl font-bold">
              <p>{paymentResult.message}</p>
            </div>
            <div className="flex justify-center mt-4">
              <Link
                href="/register-member"
                className="px-5 py-2 bg-primary text-white rounded-md"
              >
                Trở về
              </Link>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

export default PaymentReturnPage;
