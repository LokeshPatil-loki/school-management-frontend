import { Teacher } from "./Teacher";
import { Lesson } from "./Lesson";

export interface Subject {
  id: number;
  name: string;
  teachers: Teacher[];
  lessons: Lesson[];
}