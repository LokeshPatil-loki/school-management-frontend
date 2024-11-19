import { Parent } from "./Parent";
import { Class } from "./Class";
import { Grade } from "./Grade";
import { Attendance } from "./Attendance";
import { Result } from "./Result";
import { UserSex } from "./Enums";

export interface Student {
  id: string;
  username: string;
  name: string;
  surname: string;
  email?: string | null;
  phone?: string | null;
  address: string;
  img?: string | null;
  bloodType: string;
  sex: UserSex;
  createdAt: Date;
  Parent?: Parent | null;
  parentId?: string | null;
  classId: number;
  class: Class;
  gradeId: number;
  grade: Grade;
  attendance: Attendance[];
  results: Result[];
  birthday: Date;
}