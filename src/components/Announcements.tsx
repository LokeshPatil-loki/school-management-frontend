import Image from "next/image";
import React from "react";

const announcements = [
  {
    id: 1,
    title: "Lorem impsum dolor",
    time: "2024-11-10",
    description:
      "Nulla sint mollit officia in mollit in commodo est do laboris do fugiat ullamco voluptate.",
  },
  {
    id: 2,
    title: "Lorem impsum dolor",
    time: "2024-11-10",
    description:
      "Nulla sint mollit officia in mollit in commodo est do laboris do fugiat ullamco voluptate.",
  },
  {
    id: 3,
    title: "Lorem impsum dolor",
    time: "2024-11-10",
    description:
      "Nulla sint mollit officia in mollit in commodo est do laboris do fugiat ullamco voluptate.",
  },
  // {
  //   id: 4,
  //   title: "Lorem impsum dolor",
  //   time: "2024-11-10",
  //   description:
  //     "Nulla sint mollit officia in mollit in commodo est do laboris do fugiat ullamco voluptate.",
  // },
];

const Announcements = () => {
  return (
    <div className="bg-white p-4 w-full h-full">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-xl font-semibold ">Announcements</h1>
        <span className="text-xs text-gray-400 ">View All</span>
      </div>
      <div className="flex flex-col gap-4">
        {announcements.map((announcement) => (
          <div
            key={announcement.id}
            className="p-4 odd:bg-skyLight even:bg-purpleLight rounded-md"
          >
            <div className="flex items-center justify-between">
              <h1 className="font-medium">{announcement.title}</h1>
              <span className="text-gray-400 text-xs bg-white p-1 rounded-md">
                {announcement.time}
              </span>
            </div>
            <p className="mt-2 text-gray-400 text-sm font-semibold">
              {announcement.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Announcements;
