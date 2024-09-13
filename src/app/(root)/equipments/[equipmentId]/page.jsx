"use client";

import Button from "@/components/Button";
import EquipmentCard from "@/components/EquipmentCard";
import { Breadcrumbs, Carousel, IconButton } from "@/components/midleExport";
import { ArrowLeftIcon, ArrowRightIcon } from "@/icons";
import axiosInstance from "@/utils/axiosInstance";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { BallTriangle } from "react-loader-spinner";

function DetailEquipmentPage({ params }) {
  const { equipmentId } = params;
  const [equipment, setEquipment] = useState();
  const [relatedEquipments, setRelatedEquipments] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const getEquipment = async () => {
      setLoading(true);
      try {
        const resEquipment = await axiosInstance.get(
          `/equipment/${equipmentId}`
        );
        const equipment = resEquipment.data;

        const resRelatedEquipment = await axiosInstance.get(
          `/equipment/${equipmentId}/related`
        );
        const { data: relatedEquipments } = await resRelatedEquipment.data;

        setLoading(false);
        setEquipment(equipment);
        setRelatedEquipments(relatedEquipments);
      } catch (error) {
        console.log(error);
        router.push("/not-found");
        return;
      }
    };

    getEquipment();
  }, [equipmentId]);

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
          <Link href="/equipments" className="opacity-60">
            Thiết bị
          </Link>
          <Link href={`/equipments/${equipmentId}`}>{equipment?.name}</Link>
        </Breadcrumbs>

        <div className="bg-white shadow-lg px-6 py-8 rounded-lg mt-8">
          {equipment ? (
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
              <Carousel
                loop
                className="rounded-lg"
                prevArrow={({ handlePrev }) => (
                  <IconButton
                    variant="text"
                    color="deep-orange"
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
                    color="deep-orange"
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
                          activeIndex === i
                            ? "w-8 bg-primary"
                            : "w-4 bg-primary/50"
                        }`}
                        onClick={() => setActiveIndex(i)}
                      />
                    ))}
                  </div>
                )}
              >
                {equipment?.images.map((item, index) => (
                  <Image
                    key={index + "_equipmentImg"}
                    src={`/images/${item?.path}`}
                    alt="Ảnh minh họa thiết bị"
                    width={1000}
                    height={1000}
                    className="h-full w-full object-cover"
                  />
                ))}
              </Carousel>

              <div className="mt-4">
                <h3 className="font-bold text-3xl">{equipment?.name}</h3>
                <h4 className="text-primary mt-2 text-lg font-semibold">
                  {equipment?.equipmentType?.name}
                </h4>

                {equipment?.muscles.length > 0 && (
                  <div className="mt-5">
                    <h5 className="text-lg font-bold">Bổ trợ nhóm cơ</h5>
                    <div className="mt-2 flex gap-6">
                      {equipment?.muscles.map((muscle, index) => {
                        return (
                          <span
                            key={index + "_musclekey"}
                            className="flex gap-1 items-center"
                          >
                            <Image
                              src={`/images/icons/${muscle?.illustration}`}
                              width={56}
                              height={56}
                              alt="muscle icon"
                            />
                            {muscle?.name}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                )}

                <div className="mt-5">
                  <h5 className="text-lg font-bold">Mô tả</h5>
                  <p className="mt-2 text-gray-800">{equipment?.description}</p>
                </div>
                <div className="mt-5">
                  <h5 className="text-lg font-bold">Xuất xứ</h5>
                  <p className="mt-2 text-gray-800 font-semibold">
                    {equipment?.manufacture}
                  </p>
                </div>
                <div className="mt-5">
                  <h5 className="text-lg font-bold">Nhà phân phối</h5>
                  <p className="mt-2 text-gray-800 font-semibold">
                    {equipment?.distributor}
                  </p>
                </div>
                <div className="mt-5">
                  <h5 className="text-lg font-bold">Số lượng</h5>
                  <p className="mt-2 text-gray-800 font-semibold">
                    {equipment?.quantity}
                  </p>
                </div>

                <div className="flex justify-center lg:justify-start">
                  <Button className="bg-primary hover:scale-105 mt-5">
                    Tham gia tập luyện
                  </Button>
                </div>
              </div>
            </div>
          ) : (
            <p className="text-2xl text-center text-gray-500 font-bold">
              Không tìm thấy thiết bị.
            </p>
          )}
        </div>
        <h4 className="text-3xl font-bold mt-12">Thiết bị liên quan</h4>
        {relatedEquipments.length > 0 ? (
          <>
            {/* Mobile */}
            <div className="w-full flex gap-4 snap-x overflow-x-auto pb-9 mt-4 lg:hidden">
              {relatedEquipments.map((item) => (
                <div
                  key={item?.id}
                  className="snap-start snap-always shrink-0 first:pl-3 last:pr-3"
                >
                  <div className="w-80 h-36 shadow-md p-3 flex gap-3 justify-center items-center">
                    <div className="flex justify-center items-center">
                      <Image
                        src={`/images/${item?.images[0]?.path}`}
                        width={110}
                        height={110}
                        alt="Trainer info"
                        className="rounded-md"
                      />
                    </div>

                    <div className="flex flex-col flex-1 overflow-hidden justify-center">
                      <h5 className="text-lg font-semibold">{item?.name}</h5>
                      <p className="line-clamp-2 text-gray-800">
                        {item?.equipmentType?.name}
                      </p>
                      <Link
                        href={`/equipments/${item?.id}`}
                        className="text-primary hover:underline"
                      >
                        Chi tiết
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* Desktop */}
            <div className="hidden lg:grid lg:gap-4 lg:grid-cols-4 lg:mt-4">
              {relatedEquipments.map((item) => (
                <EquipmentCard
                  key={item?.id}
                  id={item?.id}
                  category={item?.equipmentType?.name}
                  title={item?.name}
                  quantity={item?.quantity}
                  origin={item?.manufacture}
                  srcImg={`/images/${item?.images[0]?.path}`}
                />
              ))}
            </div>
          </>
        ) : (
          <p className="text-2xl text-center text-gray-500 font-bold my-4">
            Không tìm thấy thiết bị liên quan.
          </p>
        )}
      </div>
    </main>
  );
}

export default DetailEquipmentPage;
