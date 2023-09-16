import clsx from 'clsx';
import DayLink from '@/components/DayLink';
import TalkInfoCard from '@/components/TalkInfoCard';
import { DayType } from '@/models/Schedule';
import dayjs from '@/utils/day';
import { getAggregatedTalksByTimeSlot } from '@/utils/schedule';

type Props = {
  days: DayType[];
  currentDay: dayjs.Dayjs;
};

const Schedule = ({ days, currentDay }: Props) => {
  const day = days.find((day) => day.date.isSame(currentDay, 'day'));
  if (!day) return null;
  const timeSlots = getAggregatedTalksByTimeSlot(day.rooms);

  return (
    <>
      <div className="tw-mb-5 tw-flex tw-justify-center tw-gap-8 tablet:tw-mb-10">
        {days.map((day) => (
          <DayLink
            key={day.date.format('MM-DD')}
            to={`/program/${day.date.format('YYYY-MM-DD')}`}
            active={day.date.isSame(currentDay, 'day')}
          >
            {day.date.format('ddd, MM/DD')}
          </DayLink>
        ))}
      </div>
      <div className="tw-flex tw-flex-col tw-gap-6 tablet:tw-gap-8">
        {timeSlots.map((timeSlot) => (
          <>
            <div className="tw-text-center tw-font-yk tw-text-2xl tablet:tw-text-3xl">
              {timeSlot.date.format('HH:mm')}
            </div>
            <div
              className={clsx('tw-grid tw-gap-4', {
                'tw-grid-cols-1 tablet:tw-grid-cols-2':
                  timeSlot.talks.length > 1,
                'tw-grid-cols-1': timeSlot.talks.length === 1,
              })}
            >
              {timeSlot.talks.map((talk) => (
                <TalkInfoCard key={talk.id} talk={talk} />
              ))}
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default Schedule;
