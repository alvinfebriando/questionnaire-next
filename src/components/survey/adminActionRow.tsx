import { SurveyTableRecords } from '@/types/survey';
import { Group, ActionIcon, Tooltip } from '@mantine/core';
import { IconTrash, IconReport, IconClipboard } from '@tabler/icons-react';
import { UUID } from 'crypto';
import { useRouter } from 'next/router';

type AdminActionRowProps = {
  survey: SurveyTableRecords;
  handleDelete: (id: UUID) => void;
};

const AdminActionRow = ({ survey, handleDelete }: AdminActionRowProps) => {
  const router = useRouter();
  return (
    <Group spacing={4} position='right' noWrap>
      <Tooltip label='Answer'>
        <ActionIcon
          color='green'
          onClick={() => router.push(`/admin/survey/answer/${survey.id}`)}
        >
          <IconClipboard size={16} />
        </ActionIcon>
      </Tooltip>
      <Tooltip label='View Report'>
        <ActionIcon
          color='green'
          onClick={() => router.push(`/admin/survey/report/${survey.id}`)}
        >
          <IconReport size={16} />
        </ActionIcon>
      </Tooltip>
      <Tooltip label='Delete survey'>
        <ActionIcon color='red' onClick={() => handleDelete(survey.id)}>
          <IconTrash size={16} />
        </ActionIcon>
      </Tooltip>
    </Group>
  );
};

export default AdminActionRow;
