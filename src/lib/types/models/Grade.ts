import { Student } from "./Student";
import { Class } from "./Class";

export interface Grade {
  id: number;
  level: number;
  students: Student[];
  classes: Class[];
}