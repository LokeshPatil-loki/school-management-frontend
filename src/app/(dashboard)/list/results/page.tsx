"use client";
import FormModal from "@/components/FormModal";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import { resultsData, role } from "@/lib/data";
import { Result } from "@/lib/types/models/Result";
import { UserRole } from "@/lib/types/models/Enums";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useSearchParams } from "next/navigation";
import { useGetResultsQuery } from "@/lib/redux/api/resultsApiSlices";
import { title } from "process";

const columns = [
  {
    header: "title",
    accessor: "title",
  },
  {
    header: "Student",
    accessor: "student",
  },
  {
    header: "Score",
    accessor: "score",
    className: "hidden md:table-cell",
  },
  {
    header: "Teacher",
    accessor: "teacher",
    className: "hidden md:table-cell",
  },
  {
    header: "Class",
    accessor: "class",
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

type ResultList = {
  id: string;
  title: string;
  studentName: string;
  studentSurname: string;
  teacherName: string;
  teacherSurname: string;
  score: string;
  className: string;
  startTime: Date;
};

const renderRow = (item: ResultList) => {
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
      <td className="table-cell text-sm">
        {item.studentName + " " + item.studentSurname}
      </td>
      <td className="hidden md:table-cell text-sm">{item.score}</td>
      <td className="hidden md:table-cell text-sm">
        {item.teacherName + " " + item.teacherSurname}
      </td>
      <td className="hidden md:table-cell text-sm">{item.className}</td>
      <td className="hidden md:table-cell text-sm">
        {new Intl.DateTimeFormat().format(new Date(item.startTime))}
      </td>

      <td className="">
        <div className="flex items-center gap-2">
          <Link href={`/list/teachers/${item.id}`}>
            <button className="w-7 h-7 flex items-center justify-center rounded-full bg-sky">
              <Image src={"/edit.png"} alt="" width={16} height={16} />
            </button>
          </Link>
          {role === UserRole.admin && (
            <FormModal type="delete" table="result" id={item.id} />
          )}
        </div>
      </td>
    </tr>
  );
};
const ResultsListPage = () => {
  const searchParams = useSearchParams();
  const {
    data: dataRes,
    isLoading,
    isSuccess,
    isError,
  } = useGetResultsQuery({
    limit: searchParams.get("limit"),
    page: searchParams.get("page"),
    search: searchParams.get("search"),
    studentId: searchParams.get("studentId"),
  });
  let data = dataRes?.data?.map((item: Result) => {
    const assessment = item.exam || item.assignment;
    if (!assessment) return null;

    const isExam = "startTime" in assessment;

    return {
      id: item.id,
      title: assessment.title,
      studentName: item.student.name,
      studentSurname: item.student.surname,
      teacherName: assessment.lesson.teacher.name,
      teacherSurname: assessment.lesson.teacher.surname,
      score: item.score,
      className: assessment.lesson.class.name,
      startTime: isExam ? assessment.startTime : assessment.startDate,
    };
  });
  return (
    <div className="w-[97%] h-[98%] m-4 mx-auto bg-white p-4">
      {/* TOP */}
      <div className="flex justify-between items-center">
        <h1 className="hidden md:block font-semibold text-lg">All Results</h1>
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
              <FormModal type="create" table="result" />
            )}
          </div>
        </div>
      </div>
      {/* LIST */}
      {!isLoading && isSuccess && (
        <>
          <Table columns={columns} renderRow={renderRow} data={data} />
          <Pagination
            currentPage={data?.meta?.currentPage}
            totalPages={data?.meta?.totalPages}
          />
        </>
      )}
    </div>
  );
};

export default ResultsListPage;
