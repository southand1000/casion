export type ProjectStatus =
  | "consult"
  | "proposal"
  | "working"
  | "delivered";

export interface ProjectWorks {
  pitch: boolean;
  timing: boolean;
  noise: boolean;
  harmony: boolean;
  space: boolean;
}

export interface Project {

  id: number;

  clientId: number;

  title: string;

  referenceUrl?: string;

  status: ProjectStatus;

  orderDate?: string;

  deliveryDate?: string;

  price: number;

  income: number;

  tags: string[];

  memo: string;

  works: ProjectWorks;

  createdAt: string;

  updatedAt: string;

}