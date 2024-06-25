export type Step = {
  icon: string;
  id: string;
  isCompleted?: boolean;
};

export type Game = {
  id: number;
  name: string;
};

export type Quiz = {
  id: number;
  title: string;
  answers: Answer[];
};

export type Answer = {
  id: number;
  title: string;
};
