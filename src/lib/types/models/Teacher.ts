import { Subject } from "./Subject";
import { Lesson } from "./Lesson";
import { Class } from "./Class";
import { UserSex } from "./Enums";

export interface Teacher {
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
  subjects: Subject[];
  lessons: Lesson[];
  classes: Class[];
  birthday: Date;
}