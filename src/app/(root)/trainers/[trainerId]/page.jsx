"use client";

import Button from "@/components/Button";
import CardItem from "@/components/CardItem";
import { Breadcrumbs, Carousel, IconButton } from "@/components/midleExport";
import { ArrowLeftIcon, ArrowRightIcon } from "@/icons";
import axiosInstance from "@/utils/axiosInstance";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BallTriangle } from "react-loader-spinner";

function DetailTrainerPage({ params }) {
  const { trainerId } = params;
  const [trainerMission, setTrainer] = useState();
  const [relatedTrainers, setRelatedTrainers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentMission, setCurrentMission] = useState({});

  useEffect(() => {
    const getTrainer = async () => {
      setLoading(true);

      const resTrainer = await axiosInstance.get(`/trainer/${trainerId}`);
      const trainer = resTrainer.data;

      const resRelatedTrainers = await axiosInstance.get(
        `/trainer/${trainerId}/related`
      );
      const { data: relatedTrainers } = await resRelatedTrainers.data;

      console.log({ check: relatedTrainers });
      setLoading(false);
      setTrainer(trainer);
      setRelatedTrainers(relatedTrainers);
    };

    getTrainer();
  }, []);

  const getCurrentMission = (missions) => {
    return missions?.reduce((latest, current) => {
      const latestDate = new Date(latest.startDate);
      const currentDate = new Date(current.startDate);

      return currentDate > latestDate ? current : latest;
    });
  };

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
          {loading ? (
            <div>
              <BallTriangle
                height={100}
                width={100}
                radius={5}
                color="#ed563b"
                wrapperClass="flex justify-center"
              />
              <p className="text-2xl text-center text-gray-500 font-bold mt-6">
                Đang tải....
              </p>
            </div>
          ) : trainerMission ? (
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
              {/* <Carousel
                loop
                className="rounded-lg"
                prevArrow={({ handlePrev }) => (
                  <IconButton
                    variant="text"
                    color="white"
                    size="lg"
                    onClick={handlePrev}
                    className="!absolute top-2/4 left-4 -translate-y-2/4"
                  >
                    <ArrowLeftIcon width="2rem" height="2rem" />
                  </IconButton>
                )}
                nextArrow={({ handleNext }) => (
                  <IconButton
                    variant="text"
                    color="white"
                    size="lg"
                    onClick={handleNext}
                    className="!absolute top-2/4 !right-4 -translate-y-2/4"
                  >
                    <ArrowRightIcon width="2rem" height="2rem" />
                  </IconButton>
                )}
                navigation={({ setActiveIndex, activeIndex, length }) => (
                  <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                    {new Array(length).fill("").map((_, i) => (
                      <span
                        key={i}
                        className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                          activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                        }`}
                        onClick={() => setActiveIndex(i)}
                      />
                    ))}
                  </div>
                )}
              > */}
              <Image
                src={`/images/${trainerMission.employee.account.avatar}`}
                alt="Avatar huấn luyện viên"
                width={1000}
                height={1000}
                className="h-full w-full object-cover rounded-md"
              />
              {/* </Carousel> */}

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
                  <Button className="bg-primary hover:scale-105 mt-5">
                    Đặt lịch ngay
                  </Button>
                </div>
              </div>
            </div>
          ) : (
            <p className="text-2xl text-center text-gray-500 font-bold">
              Không tìm thấy huấn luyện viên.
            </p>
          )}
        </div>
        <h4 className="text-3xl font-bold mt-12">Lịch huấn luyện</h4>

        <h4 className="text-3xl font-bold mt-12">Huấn luyện viên liên quan</h4>
        {loading ? (
          <div>
            <BallTriangle
              height={100}
              width={100}
              radius={5}
              color="#ed563b"
              wrapperClass="flex justify-center"
            />
            <p className="text-2xl text-center text-gray-500 font-bold mt-6">
              Đang tải....
            </p>
          </div>
        ) : relatedTrainers.length > 0 ? (
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
                console.log(item);
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
