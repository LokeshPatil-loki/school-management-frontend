import { Exam } from "./Exam";
import { Assignment } from "./Assignment";
import { Student } from "./Student";

export interface Result {
  id: number;
  score: number;
  examId?: number | null;
  exam?: Exam | null;
  assignmentId?: number | null;
  assignment?: Assignment | null;
  studentId: string;
  student: Student;
}