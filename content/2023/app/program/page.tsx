import { Metadata } from 'next';
import Article from '@/components/Article';
import ScheduleComponent from '@/components/Schedule';
import ToBeAnnounced from '@/components/ToBeAnnounced';
import { getSchedule } from '@/utils/apis';

export const metadata: Metadata = {
  title: 'Programs',
};

const Page = async () => {
  const schedule = await getSchedule();
  const days = schedule?.conference?.days ?? [];

  return (
    <Article>
      {days.length === 0 ? (
        <ToBeAnnounced />
      ) : (
        <ScheduleComponent days={days} currentDay={days[0].date} />
      )}
    </Article>
  );
};

export default Page;
