export type Column = {
  id: string;
  title: string;
  tasks: Task[];
};

export type Task = {
  columnId: string;
  id: string;
  title: string;
  description?: string;
};
