import { Metadata } from 'next';
import Article from '@/components/Article';
import ScheduleComponent from '@/components/Schedule';
import ToBeAnnounced from '@/components/ToBeAnnounced';
import RawSchedule from '@/models/RawSchedule';
import Schedule, { DayType } from '@/models/Schedule';

export const metadata: Metadata = {
  title: 'Programs',
};

const getDays = (json: any): DayType[] => {
  if (!json) {
    return [];
  }

  const rawSchedule = RawSchedule.fromJson(json);
  const schedule = Schedule.fromRaw(rawSchedule);
  return schedule.conference.days;
};

const Page = () => {
  // TODO: Fetch schedule from pretalx API
  const scheduleJson = null;
  const days = getDays(scheduleJson);

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
