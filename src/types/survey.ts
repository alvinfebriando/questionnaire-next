import { UUID } from 'crypto';
import { Question } from './question';
import { Lecturer } from './lecturer';

export type Surveys = {
  surveys: SurveyResponse[];
};

export type SurveyResponse = {
  id: UUID;
  place: string;
  date: Date;
  subject: string;
  lecturer: Lecturer;
  questionCount: number;
  aspectCount: number;
  questions: Question[];
};

export type SurveyTableRecords = Omit<SurveyResponse, 'lecturer'> & {
  lecturerId: UUID;
  lecturerName: string;
};

export type SurveyFormValue = Omit<
  SurveyTableRecords,
  'id' | 'questionCount' | 'aspectCount' | 'questions' | 'lecturerName'
> & {
  questionId: string[];
};

export type AddSurveyRequest = Omit<
  SurveyTableRecords,
  'id' | 'date' | 'lecturerName'
> & {
  questionId: string[];
  date: string;
};
