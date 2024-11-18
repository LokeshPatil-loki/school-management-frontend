import Link from "next/link";
import React from "react";

export type Shortcut = {
  title: string;
  href: string;
};

export type ShortcutsProps = {
  type: "Student" | "Teacher";
  data: Shortcut[];
};

const colors = [
  "bg-purpleLight",
  "bg-skyLight",
  "bg-yellowLight",
  "bg-skyLight",
  "bg-pink-50",
];

const Shortcuts = ({ type, data }: ShortcutsProps) => {
  return (
    <div className="bg-white p-4 rounded-md">
      <h1 className="text-xl font-semibold">Shortcuts</h1>
      <div className="mt-4 flex gap-4 flex-wrap text-xs text-gray-500">
        {data.map((shortcut, index) => (
          <Link
            className={`p-3 rounded-md ${colors[index % colors.length]}`}
            href={shortcut.href}
          >
            {type}&apos;s {shortcut.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Shortcuts;
