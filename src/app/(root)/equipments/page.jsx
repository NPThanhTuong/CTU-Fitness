"use client";

import DefaultPagination from "@/components/DefaultPagination";
import EquipmentCard from "@/components/EquipmentCard";
import Search from "@/components/Search";
import Sort from "@/components/Sort";
import { Breadcrumbs } from "@/components/midleExport";
import axiosInstance from "@/utils/axiosInstance";
import { equipmentSort } from "@/utils/constants";
// import { typeSort } from "@/utils/constants";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { MagnifyingGlass } from "react-loader-spinner";

function EquipmentsPage() {
  const [equipments, setEquipments] = useState([]);
  const [equipmentTypes, setEquipmentTypes] = useState([]);
  const [totalPage, setTotalPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);

  //Query string
  const search = searchParams.get("search");
  const page = searchParams.get("page");
  const orderBy = searchParams.get("orderBy");
  const orderAttribute = searchParams.get("orderAttribute");

  useEffect(() => {
    const getEquipmentType = async () => {
      const res = await axiosInstance.get("/equipment-types");

      const { data } = res.data;

      const types = data.map((type) => {
        return { value: type.id, title: type.name };
      });

      setEquipmentTypes(types);
    };
    getEquipmentType();
  }, []);

  useEffect(() => {
    const getEquipments = async () => {
      setLoading(true);

      const res = await axiosInstance.get("/equipments", {
        params: {
          search: search || "",
          page: page || 1,
          orderBy: orderBy || "asc",
          orderAttribute: orderAttribute || "id",
        },
      });

      const { data, totalPage } = res.data;

      setLoading(false);
      setEquipments(data);
      setTotalPage(totalPage);
    };

    getEquipments();
  }, [search, page, orderBy, orderAttribute]);
  return (
    <main className="min-h-screen">
      <div className="h-[80px] bg-[#27313b]"></div>
      <div className="container mx-auto py-12 px-3">
        <Breadcrumbs>
          <Link href="/" className="opacity-60">
            Trang chủ
          </Link>
          <Link href="/equipments">Thiết bị</Link>
        </Breadcrumbs>

        <div className="grid grid-flow-row grid-rows-1 my-8 gap-4 lg:grid-flow-col lg:grid-cols-2">
          <Search label="Tên thiết bị..." searchTerm={search} />
          <Sort
            sortValues={equipmentSort}
            sortBy={orderBy}
            sortAttribute={orderAttribute}
            label="Sắp xếp thiết bị"
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
        ) : equipments.length > 0 ? (
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            {equipments.map((item) => (
              <EquipmentCard
                key={item.id}
                id={item.id}
                category={item.equipmentType.name}
                title={item.name}
                quantity={item.quantity}
                origin={item.manufacture}
                srcImg={`/images/${item.images[0].path}`}
              />
            ))}
          </div>
        ) : (
          <p className="text-3xl text-gray-500 font-bold text-center">
            Không tìm thấy thiết bị phù hợp.
          </p>
        )}
        <div className="flex justify-center mt-10">
          <DefaultPagination totalPage={totalPage} />
        </div>
      </div>
    </main>
  );
}

export default EquipmentsPage;
