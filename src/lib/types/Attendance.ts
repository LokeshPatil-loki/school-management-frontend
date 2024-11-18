import { Student } from "./Student";
import { Lesson } from "./Lesson";

export interface Attendance {
  id: number;
  date: Date;
  present: boolean;
  studentId: string;
  student: Student;
  lessonId: number;
  lesson: Lesson;
}