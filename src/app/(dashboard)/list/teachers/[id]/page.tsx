import Announcements from "@/components/Announcements";
import BigCalender from "@/components/BigCalender";
import FormModal from "@/components/FormModal";
import PerformanceChart from "@/components/PerformanceChart";
import Shortcuts, { Shortcut } from "@/components/Shortcuts";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const shortcutsData: Shortcut[] = [
  { title: "Classes", href: "" },
  { title: "Students", href: `/list/students?teacherId=${"teacher2"}` },
  { title: "Lessons", href: "" },
  { title: "Exams", href: "" },
  { title: "Assignments", href: "" },
];

const SingleTeacherPage = () => {
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
                src={"/loki.jpg"}
                alt=""
                width={144}
                height={144}
                className="w-36 h-36 rounded-full object-cover"
              />
            </div>
            <div className="w-2/3 flex flex-col justify-between gap-4">
              <div className="flex items-center gap-4">
                <h1 className="text-xl font-semibold">Dean Guerrero</h1>
                <FormModal
                  table="teacher"
                  type="update"
                  data={{
                    id: 1,
                    username: "deanguerrero",
                    email: "deanguerrero@gmail.com",
                    password: "password",
                    firstName: "Dean",
                    lastName: "Guerrero",
                    phone: "+1 234 567 89",
                    address: "1234 Main St, Anytown, USA",
                    bloodType: "A+",
                    dateOfBirth: "2000-01-01",
                    sex: "male",
                    img: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1200",
                  }}
                />
              </div>

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
            <OtherCard title="Classes" value="6" image="/singleClass.png" />
            <OtherCard title="Lessons" value="6" image="/singleLesson.png" />
            <OtherCard title="Branch" value="4" image="/singleBranch.png" />
          </div>
        </div>
        {/* BOTTOM */}
        <div className="mt-4 bg-white rounded-md p-4 h-[800px]">
          <h1>Teacher&apos;s schedule</h1>
          <BigCalender />
        </div>
      </div>
      {/* RIGHT */}
      <div className=" w-full xl:w-1/3 flex flex-col gap-4">
        <Shortcuts type="Teacher" data={shortcutsData} />
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

export default SingleTeacherPage;
