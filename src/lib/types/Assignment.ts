import { Lesson } from "./Lesson";
import { Result } from "./Result";

export interface Assignment {
  id: number;
  title: string;
  startDate: Date;
  dueDate: Date;
  lessonId: number;
  lesson: Lesson;
  result: Result[];
}