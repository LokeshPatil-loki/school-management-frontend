import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import { parentsData, role } from "@/lib/data";
import { Parent } from "@/lib/types/Parent";
import { UserRole } from "@/lib/types/UserRole";
import Image from "next/image";
import Link from "next/link";
import React from "react";

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

const ParentsListPage = () => {
  const renderRow = (item: Parent) => {
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
          {item.students.join(", ")}
        </td>
        <td className="hidden md:table-cell text-sm">{item.phone}</td>
        <td className="hidden md:table-cell text-sm">{item.address}</td>
        <td className="">
          <div className="flex items-center gap-2">
            <Link href={`/list/teachers/${item.id}`}>
              <button className="w-7 h-7 flex items-center justify-center rounded-full bg-sky">
                <Image src={"/edit.png"} alt="" width={16} height={16} />
              </button>
            </Link>
            {role === UserRole.admin && (
              <button className="w-7 h-7 flex items-center justify-center rounded-full bg-purple">
                <Image src={"/delete.png"} alt="" width={16} height={16} />
              </button>
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
        <h1 className="hidden md:block font-semibold text-lg">All Parents</h1>
        <div className="flex flex-col justify-center md:flex-row md:justify-start     gap-4 w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center justify-end gap-4">
            <button className="bg-yellow p-3 rounded-full">
              <Image src={"/filter.png"} alt="" width={14} height={14} />
            </button>
            <button className="bg-yellow p-3 rounded-full">
              <Image src={"/sort.png"} alt="sort" width={14} height={14} />
            </button>
            {role === UserRole.admin && (
              <button className="bg-yellow p-3 rounded-full">
                <Image src={"/plus.png"} alt="add" width={14} height={14} />
              </button>
            )}
          </div>
        </div>
      </div>
      {/* LIST */}
      <Table columns={columns} renderRow={renderRow} data={parentsData} />
      {/* PAGINATION */}
      <Pagination />
    </div>
  );
};

export default ParentsListPage;
