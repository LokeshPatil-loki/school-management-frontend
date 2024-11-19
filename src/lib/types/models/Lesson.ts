import { Day } from "./Enums";
import { Subject } from "./Subject";
import { Class } from "./Class";
import { Teacher } from "./Teacher";
import { Exam } from "./Exam";
import { Assignment } from "./Assignment";
import { Attendance } from "./Attendance";

export interface Lesson {
  id: number;
  name: string;
  day: Day;
  startTime: Date;
  endTime: Date;
  subjectId: number;
  subject: Subject;
  classId: number;
  class: Class;
  teacherId: string;
  teacher: Teacher;
  exams: Exam[];
  assignments: Assignment[];
  attendance: Attendance[];
}