"use client";
import { adminApiSlice } from "@/lib/redux/api/adminApiSlice";
import { parentsApiSlice } from "@/lib/redux/api/parentsApiSlice";
import { studentsApiSlice } from "@/lib/redux/api/studentsApiSlice";
import { teachersApiSlice } from "@/lib/redux/api/teachersApiSlice";
import { UserRole } from "@/lib/types/models/Enums";
import Image from "next/image";
import React from "react";

interface UserCardProps {
  type: "student" | "teacher" | "parent" | "admin";
}

const UserCard = ({ type }: UserCardProps) => {
  const queryMap: Record<typeof type, any> = {
    admin: adminApiSlice.useCountQuery,
    teacher: teachersApiSlice.useCountQuery,
    parent: parentsApiSlice.useCountQuery,
    student: studentsApiSlice.useCountQuery,
  };

  const { data } = queryMap[type]();
  return (
    <div className="rounded-2xl odd:bg-purple even:bg-yellow p-4 w-full flex-1">
      <div className="flex justify-between items-center">
        <span className="text-[10px] bg-white px-2 py-1 rounded-full text-green-600">
          2024/25
        </span>
        <Image src={"/more.png"} alt="" width={20} height={20} />
      </div>
      <h1 className="text-2xl font-semibold my-4">{data}</h1>
      <h2 className="capitalize text-sm font-medium text-gray-500">{type}</h2>
    </div>
  );
};

export default UserCard;
