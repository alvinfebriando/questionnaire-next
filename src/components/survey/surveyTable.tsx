import { Surveys, Survey } from '@/types/survey';
import { DataTable, DataTableColumn } from 'mantine-datatable';
import { useRouter } from 'next/router';
import AdminActionRow from './adminActionRow';
import RespondentActionRow from './respondentActionRow';
import { useState } from 'react';
import { UUID } from 'crypto';
import { deleteSurvey } from '@/api/survey';
import { notifications } from '@mantine/notifications';

type SurveyTableProps = {
  survey: Surveys;
  role: 'Admin' | 'Respondent';
};

const SurveyTable = ({ survey, role }: SurveyTableProps) => {
  const router = useRouter();
  const [records, setRecords] = useState(survey.surveys);

  const handleDelete = async (id: UUID) => {
    await deleteSurvey(id);
    setRecords(prev => {
      const index = prev.findIndex(r => r.id == id);
      const newRecords = [...prev];
      newRecords.splice(index, 1);
      return newRecords;
    });
    notifications.show({
      title: 'Deleted',
      message: 'Survey deleted successfully',
      color: 'red',
    });
  };

  const columns: DataTableColumn<Survey>[] = [
    { accessor: 'place' },
    { accessor: 'date' },
    { accessor: 'subject' },
    { accessor: 'lecturer' },
  ];

  if (role === 'Admin') {
    columns.push({
      accessor: 'action',
      textAlignment: 'right',
      render: s => <AdminActionRow survey={s} handleDelete={handleDelete} />,
    });
  } else if (role === 'Respondent') {
    columns.push({
      accessor: 'action',
      textAlignment: 'right',
      render: s => <RespondentActionRow survey={s} />,
    });
  }

  return (
    <DataTable striped highlightOnHover columns={columns} records={records} />
  );
};

export default SurveyTable;
