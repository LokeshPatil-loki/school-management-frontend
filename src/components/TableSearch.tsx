"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { FormEvent } from "react";

const TableSearch = () => {
  const rotuer = useRouter();
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const value = (event.currentTarget[0] as HTMLInputElement).value;
    const params = new URLSearchParams(window.location.search);
    params.set("search", value);
    rotuer.push(`${window.location.pathname}?${params}`);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center gap-2 text-sm rounded-full ring-[1.5px] ring-gray-300 px-2"
    >
      <Image src={"/search.png"} alt="search" width={14} height={14} />
      <input
        name="search"
        type="text"
        placeholder="Search from table..."
        className="w-[200px] p-2 bg-transparent outline-none"
      />
    </form>
  );
};

export default TableSearch;
