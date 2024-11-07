import { UserRole } from "@/lib/types/UserRole";
import Image from "next/image";
import Link from "next/link";

const menuItems = [
  {
    title: "MENU",
    items: [
      {
        icon: "/home.png",
        label: "Home",
        href: "/",
        visible: [
          UserRole.admin,
          UserRole.teacher,
          UserRole.student,
          UserRole.parent,
        ],
      },
      {
        icon: "/teacher.png",
        label: "Teachers",
        href: "/list/teachers",
        visible: [UserRole.admin, UserRole.teacher],
      },
      {
        icon: "/student.png",
        label: "Students",
        href: "/list/students",
        visible: [UserRole.admin, UserRole.teacher],
      },
      {
        icon: "/parent.png",
        label: "Parents",
        href: "/list/parents",
        visible: [UserRole.admin, UserRole.teacher],
      },
      {
        icon: "/subject.png",
        label: "Subjects",
        href: "/list/subjects",
        visible: [UserRole.admin],
      },
      {
        icon: "/class.png",
        label: "Classes",
        href: "/list/classes",
        visible: [UserRole.admin, UserRole.teacher],
      },
      {
        icon: "/lesson.png",
        label: "Lessons",
        href: "/list/lessons",
        visible: [UserRole.admin, UserRole.teacher],
      },
      {
        icon: "/exam.png",
        label: "Exams",
        href: "/list/exams",
        visible: [
          UserRole.admin,
          UserRole.teacher,
          UserRole.student,
          UserRole.parent,
        ],
      },
      {
        icon: "/assignment.png",
        label: "Assignments",
        href: "/list/assignments",
        visible: [
          UserRole.admin,
          UserRole.teacher,
          UserRole.student,
          UserRole.parent,
        ],
      },
      {
        icon: "/result.png",
        label: "Results",
        href: "/list/results",
        visible: [
          UserRole.admin,
          UserRole.teacher,
          UserRole.student,
          UserRole.parent,
        ],
      },
      {
        icon: "/attendance.png",
        label: "Attendance",
        href: "/list/attendance",
        visible: [
          UserRole.admin,
          UserRole.teacher,
          UserRole.student,
          UserRole.parent,
        ],
      },
      {
        icon: "/calendar.png",
        label: "Events",
        href: "/list/events",
        visible: [
          UserRole.admin,
          UserRole.teacher,
          UserRole.student,
          UserRole.parent,
        ],
      },
      {
        icon: "/message.png",
        label: "Messages",
        href: "/list/messages",
        visible: [
          UserRole.admin,
          UserRole.teacher,
          UserRole.student,
          UserRole.parent,
        ],
      },
      {
        icon: "/announcement.png",
        label: "Announcements",
        href: "/list/announcements",
        visible: [
          UserRole.admin,
          UserRole.teacher,
          UserRole.student,
          UserRole.parent,
        ],
      },
    ],
  },
  {
    title: "OTHER",
    items: [
      {
        icon: "/profile.png",
        label: "Profile",
        href: "/profile",
        visible: [
          UserRole.admin,
          UserRole.teacher,
          UserRole.student,
          UserRole.parent,
        ],
      },
      {
        icon: "/setting.png",
        label: "Settings",
        href: "/settings",
        visible: [
          UserRole.admin,
          UserRole.teacher,
          UserRole.student,
          UserRole.parent,
        ],
      },
      {
        icon: "/logout.png",
        label: "Logout",
        href: "/logout",
        visible: [
          UserRole.admin,
          UserRole.teacher,
          UserRole.student,
          UserRole.parent,
        ],
      },
    ],
  },
];

import React from "react";

const Menu = () => {
  return (
    <div className="my-2 text-sm">
      {menuItems.map((i) => (
        <div className="flex flex-col gap-2" key={i.title}>
          <span className="hidden lg:block text-gray-400 font-light my-4">
            {i.title}
          </span>
          {i.items.map((item) => (
            <Link
              className="flex items-center justify-center lg:justify-start gap-4  text-gray-500 py-1"
              href={item.href}
              key={item.label}
            >
              <Image src={item.icon} alt={item.label} width={20} height={20} />
              <span className="hidden lg:block">{item.label}</span>
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Menu;
