import Announcements from "@/components/Announcements";
import BigCalender from "@/components/BigCalender";
import PerformanceChart from "@/components/PerformanceChart";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const SingleStudentPage = () => {
  return (
    <div className="p-4 flex flex-col xl:flex-row gap-4 ">
      {/* LEFT */}
      <div className=" w-full xl:w-2/3 ">
        {/* TOP */}
        <div className="flex flex-col lg:flex-row gap-4">
          {/* USER OtherCard */}
          <div className="bg-sky py-6 px-4 gap-4 rounded-sm flex-1 flex justify-start items-start ">
            <div className="w-1/3">
              <Image
                src="https://images.pexels.com/photos/5414817/pexels-photo-5414817.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt=""
                width={144}
                height={144}
                className="w-36 h-36 rounded-full object-cover"
              />
            </div>
            <div className="w-2/3 flex flex-col justify-between gap-4">
              <h1 className="text-xl font-semibold">Leonard Snyder</h1>
              <p className="text-gray-500  text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
                quod eos quia tempore pariatur a.
              </p>
              <div className="flex items-center justify-between gap-4 flex-wrap text-xs font-medium">
                <div className="w-full md:w-1/3 lg:w-full xl:w-[45%] flex items-center gap-2">
                  <Image src={"/blood.png"} alt="" width={15} height={15} />
                  <span>A+</span>
                </div>
                <div className="w-full md:w-1/3 lg:w-full xl:w-[45%] flex items-center gap-2">
                  <Image src={"/date.png"} alt="" width={15} height={15} />
                  <span>January 2025</span>
                </div>
                <div className="w-full md:w-1/3 lg:w-full xl:w-[45%] flex items-center gap-2">
                  <Image src={"/mail.png"} alt="" width={15} height={15} />
                  <span>user@gmail.com</span>
                </div>
                <div className="w-full md:w-1/3 lg:w-full xl:w-[45%] flex items-center gap-2">
                  <Image src={"/phone.png"} alt="" width={15} height={15} />
                  <span>+91 1234-567890</span>
                </div>
              </div>
            </div>
          </div>
          {/* OTHER CARDS */}
          <div className="flex-1 flex gap-4 justify-between flex-wrap">
            <OtherCard
              title="Attendance"
              value="90%"
              image="/singleAttendance.png"
            />
            <OtherCard title="Class" value="6A" image="/singleClass.png" />
            <OtherCard title="Lessons" value="18" image="/singleLesson.png" />
            <OtherCard title="Grade" value="6" image="/singleBranch.png" />
          </div>
        </div>
        {/* BOTTOM */}
        <div className="mt-4 bg-white rounded-md p-4 h-[800px]">
          <h1>Student&apos;s schedule</h1>
          <BigCalender />
        </div>
      </div>
      {/* RIGHT */}
      <div className=" w-full xl:w-1/3 flex flex-col gap-4">
        <div className="bg-white p-4 rounded-md">
          <h1 className="text-xl font-semibold">Shortcuts</h1>
          <div className="mt-4 flex gap-4 flex-wrap text-xs text-gray-500">
            <Link className="p-3 rounded-md bg-purpleLight" href={"/"}>
              Student&apos;s Lessons
            </Link>
            <Link className="p-3 rounded-md bg-skyLight" href={"/"}>
              Student&apos;s Teachers
            </Link>
            <Link className="p-3 rounded-md bg-yellowLight" href={"/"}>
              Student&apos;s Results
            </Link>
            <Link className="p-3 rounded-md bg-skyLight" href={"/"}>
              Student&apos;s Assignments
            </Link>
            <Link className="p-3 rounded-md bg-pink-50" href={"/"}>
              Student&apos;s Exams
            </Link>
          </div>
        </div>
        <PerformanceChart />
        <Announcements />
      </div>
    </div>
  );
};

const OtherCard = ({
  image,
  title,
  value,
}: {
  image: string;
  title: string;
  value: string;
}) => (
  <div className="bg-white w-full p-4 rounded-md flex gap-4  md:w-[48%] lg:w-[45%] 2xl:w-[48%] ">
    <Image src={image} alt="" width={24} height={24} className="w-6 h-6" />
    <div className="">
      <h1 className="text-xl font-semibold">{value}</h1>
      <span className="text-sm text-gray-400">{title}</span>
    </div>
  </div>
);

export default SingleStudentPage;
