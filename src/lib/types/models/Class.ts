import { Teacher } from "./Teacher";
import { Student } from "./Student";
import { Lesson } from "./Lesson";
import { Event } from "./Event";
import { Announcement } from "./Announcement";
import { Grade } from "./Grade";

export interface Class {
  id: number;
  name: string;
  capacity: number;
  supervisorId?: string | null;
  supervisor?: Teacher | null;
  lessons: Lesson[];
  students: Student[];
  gradeId: number;
  grade: Grade;
  events: Event[];
  announcements: Announcement[];
}