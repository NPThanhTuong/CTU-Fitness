"use client";

import { Button, Option, Select } from "@material-tailwind/react";
import { Input } from "@/components/midleExport";
import Image from "next/image";
import Swal from "sweetalert2";
import "sweetalert2/src/sweetalert2.scss";
import { registerMember } from "@/utils/formActions";
import { useEffect, useRef, useState } from "react";
import { useFormState } from "react-dom";

import Link from "next/link";
import axiosInstance from "@/utils/axiosInstance";
import { checkAuth } from "@/lib/session";
import { usePathname, useRouter } from "next/navigation";
import { noEmployeeCode } from "@/utils/constants";
import { BallTriangle } from "react-loader-spinner";

function RegisterMemberPage() {
  const [trainers, setTrainers] = useState([]);
  const [memberPack, setMemberPack] = useState([]);
  const [registerTrainerId, setRegisterTrainerId] = useState(
    noEmployeeCode.toString()
  );
  const [registerPackId, setRegisterPackId] = useState("");
  const [authResult, setAuthResult] = useState({});
  const [loading, setLoading] = useState(true);
  const [state, formAction] = useFormState(registerMember, {});
  const router = useRouter();
  const pathName = usePathname();

  useEffect(() => {
    const getTrainers = async () => {
      try {
        const res = await axiosInstance.get("/trainers", {
          params: {
            top: "all",
          },
        });

        const { data } = res.data;
        setTrainers([
          ...data,
          {
            employeeId: noEmployeeCode,
            employee: {
              name: "Không chọn huấn luyện viên",
            },
          },
        ]);
      } catch (error) {
        console.log(error);
      }
    };

    const getMembershipPackages = async () => {
      try {
        const res = await axiosInstance.get("/memberships");
        const { data } = res.data;
        setMemberPack(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    const handleAuth = async () => {
      try {
        const authResult = await checkAuth();
        if (!authResult.isAuth) {
          return router.push(`/signin?returnUrl=${pathName}`);
        } else {
          setAuthResult(authResult);
        }
      } catch (error) {
        console.log(error);
      }
    };

    handleAuth();
    getTrainers();
    getMembershipPackages();
  }, []);

  return (
    <main>
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
        <>
          <section className="relative w-full py-6 min-h-screen h-[800px] lg:h-[600px]">
            <div className="absolute inset-0">
              <img
                src="/images/cta-bg.jpg"
                alt="Back ground"
                loading="lazy"
                className="object-cover size-full"
              />
            </div>

            <div className="absolute inset-0">
              <div className="container mx-auto px-3 py-12 lg:py-20">
                <div className="flex flex-col gap-16 lg:flex-row">
                  <div className="w-full max-w-[600px]">
                    <h3 className="text-6xl text-primary font-bold uppercase leading-tight">
                      Tham gia tập luyện ngay
                    </h3>
                    <p className="text-white mt-4">
                      Hãy để lại thông tin và chúng tôi sẽ liên hệ bạn trong
                      vòng 24h! (Khi phát sinh thanh toán, vui lòng chỉ thanh
                      toán cho cơ sở CTU Fitness, không giao dịch hay chuyển
                      khoản vào tài khoản không phải của cơ sở CTU Fitness)
                    </p>
                  </div>
                  <form
                    action={formAction}
                    className="flex flex-col px-6 py-8 bg-white rounded-md shadow-md gap-6 flex-1"
                  >
                    <Select
                      variant="standard"
                      label="Huấn luyện viên"
                      name="trainerId"
                      color="teal"
                      defaultValue={registerTrainerId}
                      onChange={(val) => setRegisterTrainerId(val)}
                    >
                      {trainers?.map((trainer) => (
                        <Option
                          value={`${trainer.employeeId}`}
                          key={trainer.employeeId}
                          className="flex justify-between items-center"
                        >
                          <span>{trainer.employee.name}</span>
                        </Option>
                      ))}
                    </Select>

                    <Select
                      variant="standard"
                      label="Gói thành viên"
                      name="membershipId"
                      color="teal"
                      error={state?.error}
                      defaultValue={registerPackId}
                      onChange={(val) => setRegisterPackId(val)}
                    >
                      {memberPack?.map((pack) => (
                        <Option
                          value={`${pack.id}`}
                          key={pack.id}
                          className="flex justify-between items-center"
                        >
                          {pack.name}
                        </Option>
                      ))}
                    </Select>
                    {state?.error && (
                      <span className="text-red-500 ml-3">
                        * {state?.error}
                      </span>
                    )}

                    <input
                      type="hidden"
                      name="trainerId"
                      value={registerTrainerId}
                    />
                    <input type="hidden" name="packId" value={registerPackId} />
                    <div className="flex justify-center">
                      <Button type="submit" color="deep-orange">
                        Đăng ký
                      </Button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
          <section className="container mx-auto px-3 py-16">
            <div className="flex justify-around">
              <div className="w-full max-w-[600px]">
                <h3 className="text-6xl text-primary font-bold uppercase">
                  LỢI ÍCH CỦA THÀNH VIÊN CTU FITNESS
                </h3>
                <ul className="list-disc pl-7 mt-8 text-gray-800">
                  <li>Vị trí CLB thuận tiện</li>
                  <li>Chương trình tập luyện không giới hạn</li>
                  <li>HLV tiêu chuẩn Quốc Tế </li>
                  <li>Đa dạng gói hội viên phù hợp với nhu cầu </li>
                  <li>Ưu đãi sức khoẻ từ ứng dụng đổi điểm lấy quà Livwell</li>
                  <li>
                    Bảo hiểm tai nạn cá nhân lên đến 01 tỷ đồng dành cho hội
                    viên mới
                  </li>
                  <li>Đa dạng ưu đãi từ đối tác</li>
                </ul>
              </div>

              <Image
                src="/images/training-image-03.jpg"
                width={500}
                height={100}
                alt="Illustration image"
                className="hidden object-cover lg:block"
              />
            </div>
          </section>
        </>
      )}
    </main>
  );
}

export default RegisterMemberPage;
