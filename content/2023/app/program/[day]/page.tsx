import { Metadata } from 'next';
import Article from '@/components/Article';
import ScheduleComponent from '@/components/Schedule';
import ToBeAnnounced from '@/components/ToBeAnnounced';
import { getSchedule } from '@/utils/apis';
import dayjs from '@/utils/day';

export const metadata: Metadata = {
  title: 'Programs',
};

export async function generateStaticParams() {
  const schedule = await getSchedule();
  const days = schedule?.conference?.days ?? [];
  return days.map((day) => ({ day: day.date.format('YYYY-MM-DD') }));
}

const Page = async ({ params }: { params: { day: string } }) => {
  const schedule = await getSchedule();
  const days = schedule?.conference?.days ?? [];
  const currentDay = dayjs(params.day);

  return (
    <Article>
      {days.length === 0 ? (
        <ToBeAnnounced />
      ) : (
        <ScheduleComponent days={days} currentDay={currentDay} />
      )}
    </Article>
  );
};

export default Page;
