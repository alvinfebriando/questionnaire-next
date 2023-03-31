import { Survey } from '@/types/survey';
import { ActionIcon, Group } from '@mantine/core';
import { IconClipboard } from '@tabler/icons-react';
import { useRouter } from 'next/router';

type RespondentActionRowProps = {
  survey: Survey;
};

const RespondentActionRow = ({ survey }: RespondentActionRowProps) => {
  const router = useRouter();
  return (
    <Group spacing={4} position='right' noWrap>
      <ActionIcon
        color='green'
        onClick={() => router.push(`/survey/${survey.id}`)}
      >
        <IconClipboard size={16} />
      </ActionIcon>
    </Group>
  );
};

export default RespondentActionRow;
