"use client";
import FormModal from "@/components/FormModal";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import { useGetAssginmentsQuery } from "@/lib/redux/api/assignmentsApiSlices";
import { Assignment } from "@/lib/types/models/Assignment";
import { UserRole } from "@/lib/types/models/Enums";
import { getRole } from "@/lib/utils";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import React from "react";

const renderRow = (item: Assignment) => {
  const role = getRole();
  return (
    <tr
      key={item.id}
      className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-purpleLight"
    >
      <td className="flex flex-row items-center gap-4 p-4">
        <div className="flex flex-col">
          <h3 className="font-semibold">{item.lesson.subject.name}</h3>
        </div>
      </td>
      <td className="table-cell text-sm">{item.lesson.class.name}</td>
      <td className="hidden md:table-cell text-sm">
        {item.lesson.teacher.name}
      </td>
      <td className="hidden md:table-cell text-sm">
        {new Intl.DateTimeFormat().format(new Date(item.dueDate.toString()))}
      </td>

      <td className="">
        <div className="flex items-center gap-2">
          {role === UserRole.admin && (
            <>
              <FormModal type="update" table="assignment" data={item} />
              <FormModal type="delete" table="assignment" id={item.id} />
            </>
          )}
        </div>
      </td>
    </tr>
  );
};
const AssignmentsListPage = () => {
  const role = getRole();
  const searchParams = useSearchParams();
  const { data, isLoading, isFetching } = useGetAssginmentsQuery({
    classId: searchParams.get("classId"),
    limit: searchParams.get("limit"),
    page: searchParams.get("page"),
    search: searchParams.get("search"),
    teacherId: searchParams.get("teacherId"),
  });
  const columns = [
    {
      header: "Subject Name",
      accessor: "name",
    },
    {
      header: "Class",
      accessor: "class",
    },
    {
      header: "Teacher",
      accessor: "teacher",
      className: "hidden md:table-cell",
    },
    {
      header: "Due Date",
      accessor: "dueDate",
      className: "hidden md:table-cell",
    },
    ...(role === "admin" || role === "teacher"
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
        <h1 className="hidden md:block font-semibold text-lg">
          All Assignments
        </h1>
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
              <FormModal type="create" table="assignment" />
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

export default AssignmentsListPage;
