import { UUID } from 'crypto';

export interface Surveys {
  surveys: Survey[];
}

export interface Survey {
  id: UUID;
  place: string;
  date: Date;
  subject: string;
  respondent: number;
  lecturer: string;
  questionCount: number;
  aspectCount: string;
}
