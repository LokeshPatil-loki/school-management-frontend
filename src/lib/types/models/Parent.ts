import { Student } from "./Student";

export interface Parent {
  id: string;
  username: string;
  name: string;
  surname: string;
  email?: string | null;
  phone: string;
  address: string;
  createdAt: Date;
  Students: Student[];
}