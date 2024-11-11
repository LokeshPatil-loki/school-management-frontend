import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import {
  classesData,
  examsData,
  lessonsData,
  parentsData,
  role,
  studentsData,
} from "@/lib/data";
import { Classes } from "@/lib/types/Classes";
import { Exam } from "@/lib/types/Exam";
import { Lesson } from "@/lib/types/Lesson";
import { Parent } from "@/lib/types/Parent";
import { Student } from "@/lib/types/Student";
import { Teacher } from "@/lib/types/Teacher";
import { UserRole } from "@/lib/types/UserRole";
import Image from "next/image";
import Link from "next/link";
import { it } from "node:test";
import React from "react";

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
    header: "Date",
    accessor: "date",
    className: "hidden md:table-cell",
  },
  {
    header: "Actions",
    accessor: "action",
  },
];
const ExamsListPage = () => {
  const renderRow = (item: Exam) => {
    return (
      <tr
        key={item.id}
        className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-purpleLight"
      >
        <td className="flex flex-row items-center gap-4 p-4">
          <div className="flex flex-col">
            <h3 className="font-semibold">{item.subject}</h3>
          </div>
        </td>
        <td className="table-cell text-sm">{item.class}</td>
        <td className="hidden md:table-cell text-sm">{item.teacher}</td>
        <td className="hidden md:table-cell text-sm">{item.date}</td>

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
        <h1 className="hidden md:block font-semibold text-lg">All Exams</h1>
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
              <button className="bg-yellow p-3 rounded-full">
                <Image src={"/plus.png"} alt="add" width={14} height={14} />
              </button>
            )}
          </div>
        </div>
      </div>
      {/* LIST */}
      <Table columns={columns} renderRow={renderRow} data={examsData} />
      {/* PAGINATION */}
      <Pagination />
    </div>
  );
};

export default ExamsListPage;
