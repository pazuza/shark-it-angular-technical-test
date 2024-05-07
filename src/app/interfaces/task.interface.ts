export interface Task {
  id: string;
  description: string;
  status: number;
}

export enum TaskStatus {
  BACKLOG = 0,
  DONE = 1
}
