"use client";
import Image from "next/image";
import React, { PureComponent } from "react";
import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Total",
    count: 100,
    fill: "white",
  },
  {
    name: "Girls",
    count: 45,
    fill: "#FAE27C",
  },
  {
    name: "Girls",
    count: 45,
    fill: "#C3EBFA",
  },
];

const style = {
  top: "50%",
  right: 0,
  transform: "translate(0, -50%)",
  lineHeight: "24px",
};

const CountChart = () => {
  return (
    <div className="bg-white rounded-xl w-full h-full p-4">
      {/* Title */}
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Students</h1>
        <Image src={"/moreDark.png"} alt="" width={20} height={20} />
      </div>
      {/* Chart */}
      <div className="relative w-full h-[75%]">
        <ResponsiveContainer>
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="40%"
            outerRadius="100%"
            barSize={32}
            data={data}
          >
            <RadialBar
              // label={{ position: "insideStart", fill: "#fff" }}
              background
              dataKey="count"
            />
            {/* <Legend iconSize={10} layout="vertical" verticalAlign="middle" /> */}
          </RadialBarChart>
        </ResponsiveContainer>
        <Image
          src={"/maleFemale.png"}
          alt=""
          width={50}
          height={50}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
      </div>
      {/* Bottom */}
      <div className="flex flex-row justify-center gap-16">
        <div className="flex flex-col gap-1">
          <div className="w-5 h-5 bg-sky rounded-full "></div>
          <h3 className="font-bold">1,234</h3>
          <span className="text-xs font-medium text-gray-300">Boys (55%)</span>
        </div>
        <div className="flex flex-col gap-1">
          <div className="w-5 h-5 bg-yellow rounded-full "></div>
          <h3 className="font-bold">1,234</h3>
          <span className="text-xs font-medium text-gray-300">Girls (45%)</span>
        </div>
      </div>
    </div>
  );
};

export default CountChart;
