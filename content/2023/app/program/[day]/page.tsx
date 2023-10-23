'use client';

import { useEffect, useState } from 'react';
import Article from '@/components/Article';
import ScheduleComponent from '@/components/Schedule';
import ToBeAnnounced from '@/components/ToBeAnnounced';
import { DayType } from '@/models/Schedule';
import { getSchedule } from '@/utils/apis';
import dayjs from '@/utils/day';

export async function generateStaticParams() {
  const schedule = await getSchedule();
  const days = schedule?.conference?.days ?? [];
  return days.map((day) => ({ day: day.date.format('YYYY-MM-DD') }));
}

const Page = ({ params }: { params: { day: string } }) => {
  const currentDay = dayjs(params.day);
  const [days, setDays] = useState<DayType[]>([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchSchedule() {
      const schedule = await getSchedule();
      setDays(schedule?.conference?.days ?? []);
      setLoading(false);
    }

    fetchSchedule();
  }, []);

  if (isLoading) {
    return <Article>Loading...</Article>;
  }

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
