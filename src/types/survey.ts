import { UUID } from 'crypto';

export type Surveys = {
  surveys: Survey[];
};

export type Survey = {
  id: UUID;
  place: string;
  date: Date;
  subject: string;
  respondent: number;
  lecturer: string;
  questionCount: number;
  aspectCount: number;
};

export type SurveyFormValue = Omit<
  Survey,
  'id' | 'questionCount' | 'aspectCount'
> & {
  questionId: string[];
};

export type AddSurveyRequest = Omit<Survey, 'id' | 'date'> & {
  questionId: string[];
  date: string;
};