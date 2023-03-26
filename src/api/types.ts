import { UUID } from 'crypto';

export interface AllSurveyResponse {
  surveys: SurveyResponse[];
}

export interface SurveyResponse {
  id: UUID;
  place: string;
  date: Date;
  subject: string;
  respondent: string;
  lecturer: string;
  questionCount: number;
  aspectCount: string;
}

export interface QuestionResponse {
  id: UUID;
  question: string;
}
