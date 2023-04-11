import { UUID } from 'crypto';

export type Answer = {
  questionId: UUID;
  surveyId: UUID;
  score: number;
};

export type ChartData = {
  answers: QuestionScore[];
};

export type QuestionScore = {
  question: { title: string; questionId: UUID };
  scores: { score: number; count: number }[];
};
