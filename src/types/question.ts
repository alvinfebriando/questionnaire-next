import { UUID } from 'crypto';

export interface Questions {
  questions: Question[];
}

export interface Question {
  id: UUID;
  question: string;
}
