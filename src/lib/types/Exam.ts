import { Lesson } from "./Lesson";
import { Result } from "./Result";

export interface Exam {
  id: number;
  title: string;
  startTime: Date;
  endTime: Date;
  lessonId: number;
  lesson: Lesson;
  result: Result[];
}