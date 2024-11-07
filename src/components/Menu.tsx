import { UserRole } from "@/lib/types/UserRole";

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
