import { Class } from "./Class";

export interface Announcement {
  id: number;
  title: string;
  description: string;
  date: Date;
  classId?: number | null;
  class?: Class | null;
}