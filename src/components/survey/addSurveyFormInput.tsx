import { AddSurveyField } from '@/pages/admin/survey/add';
import { Question } from '@/types/question';
import { SurveyFormValue } from '@/types/survey';
import { NumberInput, TextInput } from '@mantine/core';
import { DateInput } from '@mantine/dates';
import { UseFormReturnType } from '@mantine/form';
import QuestionCheckbox from './questionCheckbox';

type AddSurevyFormInputProps = {
  surveyFields: AddSurveyField[];
  form: UseFormReturnType<
    SurveyFormValue,
    (values: SurveyFormValue) => SurveyFormValue
  >;
  questions: Question[];
};

const AddSurveyFormInput = ({
  surveyFields,
  form,
  questions,
}: AddSurevyFormInputProps) => {
  return (
    <>
      {surveyFields.map(f => {
        if (f.type === 'date') {
          return (
            <DateInput
              key={f.name}
              label={f.label}
              placeholder={f.name}
              {...form.getInputProps(f.name)}
            />
          );
        } else if (f.type === 'text') {
          return (
            <TextInput
              key={f.name}
              label={f.label}
              placeholder={f.name}
              {...form.getInputProps(f.name)}
            />
          );
        } else if (f.type === 'number') {
          return (
            <NumberInput
              key={f.name}
              label={f.label}
              placeholder={f.name}
              min={1}
              max={100}
              {...form.getInputProps(f.name)}
            />
          );
        } else if (f.type === 'checkbox') {
          return (
            <QuestionCheckbox
              key={f.name}
              f={f}
              form={form}
              questions={questions}
            />
          );
        }
      })}
    </>
  );
};

export default AddSurveyFormInput;
