import Announcements from "@/components/Announcements";
import AttendanceChart from "@/components/AttendanceChart";
import CountChart from "@/components/CountChart";
import EventCalendar from "@/components/EventCalendar";
import FinanceCharts from "@/components/FinanceCharts";
import UserCard from "@/components/UserCard";
import { UserRole } from "@/lib/types/models/Enums";
import React from "react";

const AdminPage = () => {
  return (
    <div className=" p-4 flex flex-col md:flex-row gap-4">
      {/* LEFT */}
      <div className=" w-full lg:w-2/3 flex flex-col gap-8">
        {/* USER CARD */}
        <div className="flex gap-4 justify-between flex-wrap">
          <UserCard type="teacher" />
          <UserCard type="parent" />
          <UserCard type="student" />
          <UserCard type="admin" />
        </div>

        {/* Middle Charts */}
        <div className="flex gap-4 flex-col lg:flex-row">
          {/* Count Chart */}
          <div className="full lg:w-1/3 h-[450px]">
            <CountChart />
          </div>

          {/* Attendance Chart */}
          <div className="full lg:w-2/3 h-[450px]">
            <AttendanceChart />
          </div>
        </div>

        {/* Bottom Charts */}
        <div className="w-full h-[500px]">
          <FinanceCharts />
        </div>
      </div>

      {/* RIGHT */}
      <div className=" w-full lg:w-1/3 flex flex-col gap-8">
        <EventCalendar />
        <Announcements />
      </div>
    </div>
  );
};

export default AdminPage;
