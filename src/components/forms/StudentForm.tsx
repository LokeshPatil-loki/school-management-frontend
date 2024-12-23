"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { FormEvent } from "react";
import { useForm } from "react-hook-form";

interface StudentFormProps {
  type: "create" | "update";
  data?: any;
}

import { z } from "zod";
import InputField from "../InputField";
import Image from "next/image";

const StudentFormSchema = z.object({
  username: z
    .string()
    .min(3, { message: "Username must be atleast 3 characters long!" })
    .max(20, { message: "Username must be at most 20 characters long!" }),
  email: z.string().email({ message: "Invalid email address!" }),
  password: z
    .string()
    .min(8, { message: "Password must be atleast 8 characters long!" }),
  firstName: z.string().min(2, { message: "First name is required!" }),
  lastName: z.string().min(2, { message: "Last name is required!" }),
  phone: z
    .string({ required_error: "Phone number is required!" })
    .min(10, { message: "Phone number must contains at least 10 digits!" }),
  bloodType: z.string().min(1, { message: "Blood Type is required!" }),
  address: z.string().min(5, { message: "Address is required!" }),
  birthday: z.date({ message: "Birthday is required!" }),
  sex: z.enum(["male", "female"], { message: "Sex is required!" }),
  img: z.instanceof(File, { message: "Image is required!" }),
});

type StudentFormSchemaType = z.infer<typeof StudentFormSchema>;

const StudentForm = ({ type, data }: StudentFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<StudentFormSchemaType>({
    resolver: zodResolver(StudentFormSchema),
  });

  const onSubmit = handleSubmit((data) => {
    console.log("Ssss");
    console.log(data);
  });

  return (
    <form className="flex flex-col gap-8" onSubmit={onSubmit}>
      <h1 className="text-xl font-semibold">Create a new Student</h1>
      <span className="text-xs text-gray-400 font-medium">
        Authentication Information
      </span>
      <div className="flex justify-between items-center">
        <InputField
          label="Username"
          name="username"
          defaultValue={data?.username}
          register={register}
          error={errors.username}
        />
        <InputField
          label="Email"
          name="email"
          type="email"
          defaultValue={data?.email}
          register={register}
          error={errors.email}
        />
        <InputField
          label="Password"
          name="password"
          type="Password"
          defaultValue={data?.password}
          register={register}
          error={errors.password}
        />
      </div>
      <span className="text-xs text-gray-400 font-medium">
        Personal Information
      </span>
      <div className="flex justify-between flex-wrap gap-4">
        <InputField
          label="First Name"
          name="firstName"
          defaultValue={data?.firstName}
          register={register}
          error={errors.firstName}
        />
        <InputField
          label="Last Name"
          name="lastName"
          defaultValue={data?.lastName}
          register={register}
          error={errors.lastName}
        />
        <InputField
          label="Phone"
          name="phone"
          defaultValue={data?.phone}
          register={register}
          error={errors.phone}
        />
        <InputField
          label="Address"
          name="address"
          defaultValue={data?.address}
          register={register}
          error={errors.address}
        />
        <InputField
          label="Blood Type"
          name="bloodType"
          defaultValue={data?.bloodType}
          register={register}
          error={errors.bloodType}
        />
        <InputField
          label="Birthday"
          name="birthday"
          defaultValue={data?.birthday}
          register={register}
          error={errors.birthday}
          type="date"
        />
        <div className="flex flex-col gap-2 w-full md:w-1/4">
          <label className="text-xs text-gray-400">Sex</label>
          <select
            className="ring-[1.5px] ring-gray-300 bg-white p-2 rounded-md text-sm w-full"
            {...register("sex")}
            defaultValue={data?.sex}
          >
            <option value={"male"}>Male</option>
            <option value={"femaile"}>Female</option>
          </select>
          {errors.sex?.message && (
            <p className="text-xs text-red-400">
              {errors.sex?.message.toString()}
            </p>
          )}
        </div>
        <div className="flex flex-col gap-2 w-full md:w-1/4 justify-center">
          <label
            htmlFor="img"
            className="text-xs text-gray-400 flex items-center gap-2 cursor-pointer"
          >
            <Image src="/upload.png" alt="" width={28} height={28} />
            <span>Upload a photo</span>
          </label>
          <input type="file" {...register("img")} id="img" className="hidden" />
          {errors.img?.message && (
            <p className="text-xs text-red-400">
              {errors.img?.message.toString()}
            </p>
          )}
        </div>
      </div>

      <button type="submit" className="bg-blue-400 text-white p-2 rounded-md">
        {type === "create" ? "Create" : "Update"}
      </button>
    </form>
  );
};

export default StudentForm;
