import { UUID } from 'crypto';

export type Answer = {
  questionId: UUID;
  surveyId: UUID;
  score: number;
};
