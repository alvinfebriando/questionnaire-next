import { SurveyTableRecords } from '@/types/survey';
import { ActionIcon, Group, Tooltip } from '@mantine/core';
import { IconClipboard } from '@tabler/icons-react';
import { useRouter } from 'next/router';

type RespondentActionRowProps = {
  survey: SurveyTableRecords;
};

const RespondentActionRow = ({ survey }: RespondentActionRowProps) => {
  const router = useRouter();
  return (
    <Group spacing={4} position='right' noWrap>
      <Tooltip label='Answer'>
        <ActionIcon
          color='green'
          onClick={() => router.push(`/survey/${survey.id}`)}
        >
          <IconClipboard size={16} />
        </ActionIcon>
      </Tooltip>
    </Group>
  );
};

export default RespondentActionRow;
