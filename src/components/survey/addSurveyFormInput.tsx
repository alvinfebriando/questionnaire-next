import { AddSurveyField, SurveyFormValue } from '@/pages/admin/survey/add';
import { Question } from '@/types/question';
import { Checkbox, Group, NumberInput, Stack, TextInput } from '@mantine/core';
import { DateInput, DateValue } from '@mantine/dates';
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
              value={form.values[f.name as keyof SurveyFormValue] as DateValue}
              onChange={value => form.setFieldValue(f.name, value)}
            />
          );
        } else if (f.type === 'text') {
          return (
            <TextInput
              key={f.name}
              label={f.label}
              placeholder={f.name}
              value={form.values[f.name as keyof SurveyFormValue] as string}
              onChange={event =>
                form.setFieldValue(f.name, event.currentTarget.value)
              }
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
              value={
                form.values[
                  f.name as keyof SurveyFormValue
                ] as unknown as number
              }
              onChange={value => form.setFieldValue(f.name, value)}
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
