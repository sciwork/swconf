import { Metadata } from 'next';
import Article from '@/components/Article';
import ScheduleComponent from '@/components/Schedule';
import sampleSchedule from '@/contents/sample_schedule.json';
import RawSchedule from '@/models/RawSchedule';
import Schedule from '@/models/Schedule';
import dayjs from '@/utils/day';

const rawSchedule = RawSchedule.fromJson(sampleSchedule);
const schedule = Schedule.fromRaw(rawSchedule);
const days = schedule.conference.days;

export const metadata: Metadata = {
  title: 'Programs',
};

export function generateStaticParams() {
  return days.map((day) => ({
    params: { day: day.date },
  }));
}

const Page = ({ params }: { params: { day: string } }) => {
  const currentDay = dayjs(params.day);

  return (
    <Article>
      <ScheduleComponent days={days} currentDay={currentDay} />
    </Article>
  );
};

export default Page;
