"use client";

import CardItem from "@/components/CardItem";
import DefaultPagination from "@/components/DefaultPagination";
import Search from "@/components/Search";
import Sort from "@/components/Sort";
import { Breadcrumbs } from "@/components/midleExport";
import axiosInstance from "@/utils/axiosInstance";
import { trainerSort } from "@/utils/constants";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { MagnifyingGlass } from "react-loader-spinner";

function TrainersPage() {
  const [trainers, setTrainers] = useState([]);
  const [totalPage, setTotalPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);

  //Query string
  const search = searchParams.get("search");
  const page = searchParams.get("page");
  const orderBy = searchParams.get("orderBy");
  const orderAttribute = searchParams.get("orderAttribute");
  const age = searchParams.get("age");

  useEffect(() => {
    const getTrainers = async () => {
      setLoading(true);

      const res = await axiosInstance.get("/trainers", {
        params: {
          search: search || "",
          page: page || 1,
          orderBy: orderBy || "asc",
          orderAttribute: orderAttribute || "id",
          age: age || "0-100",
        },
      });

      const { data, totalPage } = res.data;

      setLoading(false);
      setTrainers(data);
      setTotalPage(totalPage);
    };

    getTrainers();
  }, [search, orderBy, orderAttribute, age, page]);
  return (
    <main className="min-h-screen">
      <div className="h-[80px] bg-[#27313b]"></div>
      <div className="container mx-auto py-12 px-3">
        <Breadcrumbs>
          <Link href="/" className="opacity-60">
            Trang chủ
          </Link>
          <Link href="/trainers">Huấn luyện viên</Link>
        </Breadcrumbs>
        <div className="grid grid-flow-row grid-rows-1 my-8 gap-4 lg:grid-flow-col lg:grid-cols-2">
          <Search label="Tên huấn luyện viên..." searchTerm={search} />
          <Sort
            sortValues={trainerSort}
            sortBy={orderBy}
            sortAttribute={orderAttribute}
            label="Sắp xếp huấn luyện viên"
          />
        </div>

        {loading ? (
          <div>
            <MagnifyingGlass
              visible={true}
              height="80"
              width="80"
              ariaLabel="magnifying-glass-loading"
              wrapperClass="mt-4 mx-auto"
              glassColor="#c0efff"
              color="#ed563b"
            />
            <p className="text-3xl text-gray-500 font-bold text-center">
              Đang tìm kiếm...
            </p>
          </div>
        ) : trainers.length > 0 ? (
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            {trainers.map((item) => (
              <CardItem
                key={item.employeeId}
                id={item.employeeId}
                srcImg={`/images/${item.employee.account.avatar}`}
                category={item.position.name}
                title={item.employee.name}
                desc={item.employee.description}
                linkFb="#"
                linkTwitter="#"
                linkIg="#"
              />
            ))}
          </div>
        ) : (
          <p className="text-3xl text-gray-500 font-bold text-center">
            Không tìm thấy huấn luyện viên phù hợp.
          </p>
        )}
        <div className="flex justify-center mt-10">
          <DefaultPagination totalPage={totalPage} />
        </div>
      </div>
    </main>
  );
}

export default TrainersPage;
