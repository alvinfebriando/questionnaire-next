import { UUID } from 'crypto';

export const API_URL = process.env.API_URL_DEV;
console.log(process.env);

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
