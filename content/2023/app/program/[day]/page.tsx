import { Metadata } from 'next';
import Article from '@/components/Article';
import ScheduleComponent from '@/components/Schedule';
import ToBeAnnounced from '@/components/ToBeAnnounced';
import { DayType } from '@/models/Schedule';
import dayjs from '@/utils/day';

export const metadata: Metadata = {
  title: 'Programs',
};

export function generateStaticParams() {
  // TODO: Fetch schedule from pretalx API
  const days: DayType[] = [];
  return days.map((day) => ({ day: day.date.format('YYYY-MM-DD') }));
}

const Page = ({ params }: { params: { day: string } }) => {
  // TODO: Fetch schedule from pretalx API
  const days: DayType[] = [];
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
