import UserCard from "@/components/UserCard";
import { UserRole } from "@/lib/types/UserRole";
import React from "react";

const AdminPage = () => {
  return (
    <div className=" p-4 flex flex-col md:flex-row">
      {/* LEFT */}
      <div className=" w-full lg:w-2/3">
        {/* USER CARD */}
        <div className="flex gap-4 justify-between flex-wrap">
          <UserCard type="staff" />
          <UserCard type="teacher" />
          <UserCard type="parent" />
          <UserCard type="student" />
        </div>
      </div>
      {/* RIGHT */}
      <div className=" w-full lg:w-1/3">right</div>
    </div>
  );
};

export default AdminPage;
