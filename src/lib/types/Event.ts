import { Class } from "./Class";

export interface Event {
  id: number;
  title: string;
  description: string;
  startTime: Date;
  endTime: Date;
  classId?: number | null;
  class?: Class | null;
}