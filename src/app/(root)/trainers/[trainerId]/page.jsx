"use client";

import CardItem from "@/components/CardItem";
import { Breadcrumbs } from "@/components/midleExport";
import axiosInstance from "@/utils/axiosInstance";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BallTriangle } from "react-loader-spinner";
import FullCalendar from "@fullcalendar/react"; // FullCalendar component
import dayGridPlugin from "@fullcalendar/daygrid"; // For month/week/day views
import timeGridPlugin from "@fullcalendar/timegrid"; // For time grid view
import interactionPlugin from "@fullcalendar/interaction";
import { usePathname, useRouter } from "next/navigation";
import Swal from "sweetalert2";
import { checkAuth } from "@/lib/session";

const occupiedReservationColor = "#FA4659";
const availableReservationColor = "#2EB872";
const ownedReservationColor = "#4D96FF";

function DetailTrainerPage({ params }) {
  const { trainerId } = params;
  const [trainerMission, setTrainer] = useState();
  const [relatedTrainers, setRelatedTrainers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [events, setEvents] = useState([]);
  const [authResult, setAuthResult] = useState();
  const pathName = usePathname();
  const router = useRouter();

  useEffect(() => {
    const getTrainer = async () => {
      setLoading(true);

      try {
        const resTrainer = await axiosInstance.get(`/trainer/${trainerId}`);

        const trainer = resTrainer.data;

        const resRelatedTrainers = await axiosInstance.get(
          `/trainer/${trainerId}/related`
        );
        const { data: relatedTrainers } = await resRelatedTrainers.data;

        setLoading(false);
        setTrainer(trainer);
        setRelatedTrainers(relatedTrainers);
      } catch (error) {
        console.log(error);
        router.push("/not-found");
        return;
      }
    };

    const getReservations = async () => {
      try {
        const res = await axiosInstance.get(
          `/trainer/${trainerId}/trainining-sessions`
        );

        const trainingSessions = res.data;

        const handledTrainingSession = trainingSessions.map((item) => ({
          id: item.id,
          start: new Date(item.startTime),
          end: new Date(item.endTime),
          title: item.trainingProgram.name,
          backgroundColor:
            item.reservations.length > 0
              ? occupiedReservationColor
              : availableReservationColor,
          extendedProps: {
            isReserved: item.reservations.length > 0,
            isOwned: false,
          },
        }));

        setEvents(handledTrainingSession);
      } catch (error) {
        console.error(error);
        router.push("/not-found");
        return;
      }
    };

    const handleAuth = async () => {
      try {
        const authResult = await checkAuth();
        setAuthResult(authResult);
      } catch (err) {
        console.log(err);
      }
    };

    const getUserReservation = async () => {
      try {
        const authResult = await checkAuth();

        if (!authResult.isAuth) {
          return;
        }

        const resUserReservations = await axiosInstance.get(
          `/customer/reservations`,
          {
            headers: {
              Authorization: `Bearer ${authResult.user.token}`,
            },
          }
        );

        const userReservation = resUserReservations.data;

        const handledUserReservation = userReservation.reservations.map(
          ({ trainingSession: item }) => ({
            id: item.id,
            start: new Date(item.startTime),
            end: new Date(item.endTime),
            title: `(Bạn đã đặt) ${item.trainingProgram.name}`,
            backgroundColor: ownedReservationColor,
            extendedProps: {
              isReserved: true,
              isOwned: true,
            },
          })
        );

        setEvents((prev) => [...prev, ...handledUserReservation]);
      } catch (error) {
        console.log(error);
      }
    };

    handleAuth();
    getTrainer();
    getReservations();
    getUserReservation();
  }, [trainerId]);

  const getCurrentMission = (missions) => {
    return missions?.reduce((latest, current) => {
      const latestDate = new Date(latest.startDate);
      const currentDate = new Date(current.startDate);

      return currentDate > latestDate ? current : latest;
    });
  };

  const handleEventReservation = async (clickInfo) => {
    const isReserved = clickInfo.event.extendedProps.isReserved;
    const isOwned = clickInfo.event.extendedProps.isOwned;
    const trainingSessionId = parseInt(clickInfo.event.id);

    if (!authResult?.isAuth) {
      const result = await Swal.fire({
        icon: "warning",
        title: "Thất bại",
        text: "Bạn phải đăng nhập trước khi thực hiện đặt lịch!",
        showConfirmButton: true,
        confirmButtonText: "Đăng nhập",
        showCancelButton: true,
        cancelButtonText: "Hủy",
        customClass: {
          confirmButton: "bg-primary",
          cancelButton: "bg-gray-400",
        },
      });

      if (result.isConfirmed) {
        return router.push(`/signin?returnUrl=${pathName}`);
      }
    }

    if (isOwned) {
      try {
        const result = await Swal.fire({
          icon: "warning",
          title: "Hủy lịch",
          text: "Bạn có chắc chắn muốn hủy lịch đặt không?",
          showConfirmButton: true,
          confirmButtonText: "Xác nhận",
          showCancelButton: true,
          cancelButtonText: "Hủy",
          customClass: {
            confirmButton: "bg-red-500",
            cancelButton: "bg-gray-400",
          },
        });

        if (result.isConfirmed) {
          const res = await axiosInstance.delete(
            `/customer/trainingSession/${trainingSessionId}/reservation`,
            {
              headers: {
                Authorization: `Bearer ${authResult.user.token}`,
              },
            }
          );

          clickInfo.event.setProp("backgroundColor", availableReservationColor);
          clickInfo.event.setExtendedProp("isReserved", false);
          clickInfo.event.setExtendedProp("isOwned", false);

          // setEvents((prev) => [
          //   ...prev,
          //   {
          //     ...clickInfo.event,
          //     isOwned: false,
          //     isReserved: false,
          //     backgroundColor: availableReservationColor,
          //   },
          // ]);

          Swal.fire({
            icon: "success",
            title: "Thành công",
            text: "Bạn đã hủy đặt lịch thành công",
            customClass: {
              confirmButton: "bg-primary",
            },
          });
        }
      } catch (error) {
        console.log(error);
      }
    } else if (isReserved) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Lịch tập luyện đã được đặt bởi người khác!",
        confirmButtonText: "Ok",
        customClass: {
          confirmButton: "bg-primary",
        },
      });
    } else {
      try {
        const result = await Swal.fire({
          icon: "info",
          title: "Đặt lịch",
          text: "Bạn có chắc chắn muốn đặt lịch không?",
          showConfirmButton: true,
          confirmButtonText: "Xác nhận",
          showCancelButton: true,
          cancelButtonText: "Hủy",
          customClass: {
            confirmButton: "bg-primary",
            cancelButton: "bg-gray-400",
          },
        });

        if (result.isConfirmed) {
          const res = await axiosInstance.post(
            "/customer/reservation",
            {
              customerId: parseInt(authResult.user.customerId),
              trainingSessionId,
            },
            {
              headers: {
                Authorization: `Bearer ${authResult.user.token}`,
              },
            }
          );

          clickInfo.event.setProp("backgroundColor", ownedReservationColor);
          clickInfo.event.setExtendedProp("isReserved", true);
          clickInfo.event.setExtendedProp("isOwned", true);

          // setEvents((prev) => [
          //   ...prev,
          //   {
          //     ...clickInfo.event,
          //     backgroundColor: ownedReservationColor,
          //     extendedProps: {
          //       isReserved: true,
          //       isOwned: true,
          //     },
          //   },
          // ]);

          Swal.fire({
            icon: "success",
            title: "Thành công",
            text: "Bạn đã đặt lịch thành công",
            customClass: {
              confirmButton: "bg-primary",
            },
          });
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  if (loading)
    return (
      <div>
        <div className="h-[80px] bg-[#27313b]"></div>
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
      </div>
    );

  return (
    <main>
      <div className="h-[80px] bg-[#27313b]"></div>
      <div className="container mx-auto py-12 px-3">
        <Breadcrumbs>
          <Link href="/" className="opacity-60">
            Trang chủ
          </Link>
          <Link href="/trainers" className="opacity-60">
            Huấn luyện viên
          </Link>
          <Link href={`/trainers/${trainerId}`}>
            {trainerMission?.employee.name}
          </Link>
        </Breadcrumbs>

        <div className="bg-white shadow-lg px-6 py-8 rounded-lg mt-8">
          {trainerMission ? (
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
              <Image
                src={`/images/${trainerMission.employee.account.avatar}`}
                alt="Avatar huấn luyện viên"
                width={1000}
                height={1100}
                className="w-full h-[600px] object-cover rounded-md"
              />
              <div className="mt-4">
                <h3 className="font-bold text-3xl">
                  {trainerMission.employee.name}
                </h3>
                <h4 className="text-primary mt-2 text-lg font-semibold">
                  {trainerMission.position.name}
                </h4>

                <div className="mt-5">
                  <h5 className="text-lg font-bold">Liên hệ</h5>
                  <div className="mt-2 flex gap-4">
                    <span className="flex gap-3 items-center">
                      <Image
                        src="/images/icons/email.png"
                        width={24}
                        height={24}
                        alt="email icon"
                      />
                      {trainerMission.employee.account.email}
                    </span>
                    <span className="flex gap-3 items-center">
                      <Image
                        src="/images/icons/viber.png"
                        width={24}
                        height={24}
                        alt="phone icon"
                      />
                      {trainerMission.employee.phone}
                    </span>
                  </div>
                </div>

                <div className="mt-5">
                  <h5 className="text-lg font-bold">Mô tả</h5>
                  <p className="mt-2 text-gray-800">
                    {trainerMission.employee.description}
                  </p>
                </div>

                <div className="flex justify-center lg:justify-start">
                  <Link
                    href="#reservation-section"
                    className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary hover:scale-105 mt-5 transition-all"
                  >
                    Đặt lịch ngay
                  </Link>
                </div>
              </div>
            </div>
          ) : (
            <p className="text-2xl text-center text-gray-500 font-bold">
              Không tìm thấy huấn luyện viên.
            </p>
          )}
        </div>
        <h4 id="reservation-section" className="text-3xl font-bold mt-12 mb-8">
          Lịch huấn luyện
        </h4>
        <div>
          <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            initialView="timeGridWeek" // Default view (week with times)
            selectable={true}
            events={events} // Array of events
            // select={handleDateSelect} // Callback for when a date is selected
            validRange={{
              start: new Date().toISOString().split("T")[0], // Limit start date to today
            }}
            // timeZone="Asia/Ho_Chi_Minh"
            locale="vi"
            eventClick={handleEventReservation} // Handle event click
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "timeGridWeek,timeGridDay",
            }}
            buttonText={{
              today: "Hôm nay",
              week: "Tuần",
              day: "Ngày",
            }}
            height={600}
          />
        </div>

        <h4 className="text-3xl font-bold mt-12">Huấn luyện viên liên quan</h4>
        {relatedTrainers.length > 0 ? (
          <>
            {/* Mobile */}
            <div className="w-full flex gap-4 snap-x overflow-x-auto pb-9 mt-4 lg:hidden">
              {relatedTrainers.map((item) => {
                const currentMission = getCurrentMission(item.missions);
                return (
                  <div
                    key={item.id}
                    className="snap-start snap-always shrink-0 first:pl-3 last:pr-3"
                  >
                    <div className="w-80 h-36 shadow-md p-3 flex gap-3 justify-center items-center">
                      <div className="flex justify-center items-center">
                        <Image
                          src={`/images/${item.account.avatar}`}
                          width={110}
                          height={110}
                          alt="Trainer info"
                          className="rounded-md"
                        />
                      </div>

                      <div className="flex flex-col flex-1 overflow-hidden justify-center">
                        <h5 className="text-lg font-semibold">{item.name}</h5>
                        <p className="line-clamp-2  text-gray-800">
                          {currentMission.position.description}
                        </p>
                        <Link
                          href={`/trainers/${item.id}`}
                          className="text-primary hover:underline"
                        >
                          Chi tiết
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            {/* Desktop */}
            <div className="hidden lg:grid lg:gap-4 lg:grid-cols-4 lg:mt-4">
              {relatedTrainers.map((item) => {
                const currentMission = getCurrentMission(item.missions);
                return (
                  <CardItem
                    key={item.id}
                    id={item.id}
                    srcImg={`/images/${item.account.avatar}`}
                    category={currentMission.position.name}
                    title={item.name}
                    desc={currentMission.position.description}
                    linkFb="#"
                    linkTwitter="#"
                    linkIg="#"
                  />
                );
              })}
            </div>
          </>
        ) : (
          <p className="text-2xl text-center text-gray-500 font-bold my-4">
            Không tìm thấy huấn luyện viên liên quan.
          </p>
        )}
      </div>
    </main>
  );
}

export default DetailTrainerPage;
