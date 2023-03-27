import { UUID } from 'crypto';
import { Question } from './question';

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
  aspectCount: string;
};

export type SurveyFormValue = Omit<
  Survey,
  'id' | 'questionCount' | 'aspectCount'
> & {
  questions: string[];
};
