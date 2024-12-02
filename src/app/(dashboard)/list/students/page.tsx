"use client";
import FormModal from "@/components/FormModal";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import { Student } from "@/lib/types/models/Student";
import { UserRole } from "@/lib/types/models/Enums";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useSearchParams } from "next/navigation";
import { useGetStudentsQuery } from "@/lib/redux/api/studentsApiSlice";
import { getRole } from "@/lib/utils";

const renderRow = (item: Student) => {
  const role = getRole();
  return (
    <tr
      key={item.id}
      className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-purpleLight"
    >
      <td className="flex flex-row items-center gap-4 p-4">
        <Image
          alt=""
          src={item.img ?? ""}
          width={40}
          height={40}
          className="md:hidden xl:block w-10 h-10 rounded-full object-cover"
        />
        <div className="flex flex-col">
          <h3 className="font-semibold">{item.name}</h3>
          <p className="text-xs text-gray-500">{item.class.name}</p>
        </div>
      </td>
      <td className="hidden md:table-cell text-sm">{item.id}</td>
      <td className="hidden md:table-cell text-sm">{item.grade?.level}</td>
      <td className="hidden md:table-cell text-sm">{item.phone}</td>
      <td className="hidden md:table-cell text-sm">{item.address}</td>
      <td className="">
        <div className="flex items-center gap-2">
          <Link href={`/list/students/${item.id}`}>
            <button className="w-7 h-7 flex items-center justify-center rounded-full bg-sky">
              <Image src={"/view.png"} alt="" width={16} height={16} />
            </button>
          </Link>
          {role === UserRole.admin && (
            <FormModal type="delete" table="student" id={item.id} />
          )}
        </div>
      </td>
    </tr>
  );
};

const StudentsListPage = () => {
  const role = getRole();

  const searchParams = useSearchParams();
  const { isLoading, data } = useGetStudentsQuery({
    page: searchParams.get("page") || "1",
    limit: searchParams.get("limit") || undefined,
    teacherId: searchParams.get("teacherId"),
    search: searchParams.get("search"),
  });

  const columns = [
    {
      header: "Info",
      accessor: "info",
    },
    {
      header: "Student ID",
      accessor: "studentId",
      className: "hidden md:table-cell",
    },
    {
      header: "Grade",
      accessor: "grade",
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
    ...(role === UserRole.admin
      ? [
          {
            header: "Actions",
            accessor: "action",
          },
        ]
      : []),
  ];
  return (
    <div className="w-[97%] h-[98%] m-4 mx-auto bg-white p-4">
      {/* TOP */}
      <div className="flex justify-between items-center">
        <h1 className="hidden md:block font-semibold text-lg">All Students</h1>
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
              <FormModal type="create" table="student" />
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

export default StudentsListPage;
