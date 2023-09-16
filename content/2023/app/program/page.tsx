import { Metadata } from 'next';
import Article from '@/components/Article';
import ScheduleComponent from '@/components/Schedule';
import sampleSchedule from '@/contents/sample_schedule.json';
import RawSchedule from '@/models/RawSchedule';
import Schedule from '@/models/Schedule';

export const metadata: Metadata = {
  title: 'Programs',
};

const rawSchedule = RawSchedule.fromJson(sampleSchedule);
const schedule = Schedule.fromRaw(rawSchedule);
const days = schedule.conference.days;

const Page = () => {
  return (
    <Article>
      <ScheduleComponent days={days} currentDay={days[0].date} />
    </Article>
  );
};

export default Page;
