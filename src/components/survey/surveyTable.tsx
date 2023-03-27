import { Surveys, Survey } from '@/types/survey';
import { Group, ActionIcon } from '@mantine/core';
import { IconEye, IconEdit, IconTrash } from '@tabler/icons-react';
import { DataTable, DataTableColumn } from 'mantine-datatable';
import AdminActionRow from './adminActionRow';
import RespondentActionRow from './respondentActionRow';

type SurveyTableProps = {
  survey: Surveys;
  role: 'Admin' | 'Respondent';
};

const SurveyTable = ({ survey, role }: SurveyTableProps) => {
  const columns: DataTableColumn<Survey>[] = [
    { accessor: 'place' },
    { accessor: 'date' },
    { accessor: 'subject' },
    { accessor: 'lecturer' },
  ];

  if (role === 'Admin') {
    columns.push({
      accessor: 'action',
      title: 'Row actions',
      textAlignment: 'right',
      render: s => <AdminActionRow survey={s} />,
    });
  } else if (role === 'Respondent') {
    columns.push({
      accessor: 'action',
      title: 'Row actions',
      textAlignment: 'right',
      render: s => <RespondentActionRow survey={s} />,
    });
  }

  return (
    <DataTable
      striped
      highlightOnHover
      columns={columns}
      records={survey.surveys}
    ></DataTable>
  );
};

export default SurveyTable;
