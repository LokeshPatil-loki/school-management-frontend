"use client";
import FormModal from "@/components/FormModal";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import { role } from "@/lib/data";
import { Parent } from "@/lib/types/models/Parent";
import { UserRole } from "@/lib/types/models/Enums";
import Image from "next/image";
import React from "react";
import { useSearchParams } from "next/navigation";
import { useGetParentsQuery } from "@/lib/redux/api/parentsApiSlice";
import { getRole } from "@/lib/utils";

const columns = [
  {
    header: "Info",
    accessor: "info",
  },
  {
    header: "Student Names",
    accessor: "students",
    className: "hidden md:table-cell",
  },
  {
    header: "Phone",
    accessor: "phone",
    className: "hidden lg:table-cell",
  },
  {
    header: "Address",
    accessor: "address",
    className: "hidden lg:table-cell",
  },
  {
    header: "Actions",
    accessor: "action",
  },
];

const renderRow = (item: Parent) => {
  const role = getRole();
  return (
    <tr
      key={item.id}
      className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-purpleLight"
    >
      <td className="flex flex-row items-center gap-4 p-4">
        <div className="flex flex-col">
          <h3 className="font-semibold">{item.name}</h3>
          <p className="text-xs text-gray-500">{item?.email}</p>
        </div>
      </td>
      <td className="hidden md:table-cell text-sm">
        {item.Students.map((student) => student.name).join(", ")}
      </td>
      <td className="hidden md:table-cell text-sm">{item.phone}</td>
      <td className="hidden md:table-cell text-sm">{item.address}</td>
      <td className="">
        <div className="flex items-center gap-2">
          {role === UserRole.admin && (
            <>
              <FormModal type="update" table="parent" data={item} />
              <FormModal type="delete" table="parent" id={item.id} />
            </>
          )}
        </div>
      </td>
    </tr>
  );
};
const ParentsListPage = () => {
  const searchParams = useSearchParams();
  const { isLoading, data } = useGetParentsQuery({
    page: searchParams.get("page") || "1",
    limit: searchParams.get("limit") || undefined,
    search: searchParams.get("search"),
  });
  return (
    <div className="w-[97%] h-[98%] m-4 mx-auto bg-white p-4">
      {/* TOP */}
      <div className="flex justify-between items-center">
        <h1 className="hidden md:block font-semibold text-lg">All Parents</h1>
        <div className="flex flex-col justify-center md:flex-row md:justify-start     gap-4 w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center justify-end gap-4">
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-yellow">
              <Image src="/filter.png" alt="" width={14} height={14} />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-yellow">
              <Image src="/sort.png" alt="" width={14} height={14} />
            </button>
            {role === UserRole.admin && (
              <FormModal type="create" table="parent" />
            )}
          </div>
        </div>
      </div>
      {/* LIST */}
      {!isLoading && (
        <>
          <Table columns={columns} renderRow={renderRow} data={data.data} />
          <Pagination
            currentPage={data?.meta?.currentPage}
            totalPages={data?.meta?.totalPages}
          />
        </>
      )}
    </div>
  );
};

export default ParentsListPage;
