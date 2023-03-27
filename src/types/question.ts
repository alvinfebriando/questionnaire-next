import { UUID } from 'crypto';

export type Questions = {
  questions: Question[];
};

export type Question = {
  id: UUID;
  question: string;
};
