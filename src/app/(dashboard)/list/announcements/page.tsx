"use client";
import FormModal from "@/components/FormModal";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import { Announcement } from "@/lib/types/models/Announcement";
import { UserRole } from "@/lib/types/models/Enums";
import Image from "next/image";
import React from "react";
import { formatDate } from "@/lib/utils";
import { useSearchParams } from "next/navigation";
import { useGetAnnouncmentsQuery } from "@/lib/redux/api/announcmentsApiSlice";
import { useUser } from "@clerk/nextjs";

const AnnouncementsListPage = () => {
  const role = useUser().user?.publicMetadata?.role as string;
  const searchParams = useSearchParams();
  const { isLoading, data } = useGetAnnouncmentsQuery({
    page: searchParams.get("page") || "1",
    limit: searchParams.get("limit") || undefined,
    search: searchParams.get("search"),
    classId: searchParams.get("classId"),
  });

  const columns = [
    {
      header: "Title",
      accessor: "title",
    },
    {
      header: "Class",
      accessor: "class",
    },
    {
      header: "Date",
      accessor: "date",
      className: "hidden md:table-cell",
    },
    ...(role === "admin"
      ? [
          {
            header: "Actions",
            accessor: "action",
          },
        ]
      : []),
  ];

  const renderRow = (item: Announcement) => {
    return (
      <tr
        key={item.id}
        className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-purpleLight"
      >
        <td className="flex flex-row items-center gap-4 p-4">
          <div className="flex flex-col">
            <h3 className="font-semibold">{item.title}</h3>
          </div>
        </td>
        <td className="table-cell text-sm">{item.class?.name || "-"}</td>
        <td className="hidden md:table-cell text-sm">
          {formatDate(item.date)}
        </td>

        <td className="">
          <div className="flex items-center gap-2">
            {role === UserRole.admin && (
              <>
                <FormModal type="update" table="teacher" data={item} />
                <FormModal type="delete" table="teacher" id={item.id} />
              </>
            )}
          </div>
        </td>
      </tr>
    );
  };

  return (
    <div className="w-[97%] h-[98%] m-4 mx-auto bg-white p-4">
      {/* TOP */}
      <div className="flex justify-between items-center">
        <h1 className="hidden md:block font-semibold text-lg">
          All Annoucements
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
              <FormModal type="create" table="teacher" />
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

export default AnnouncementsListPage;
