import { RoomTalkMapType, TalkType } from '@/models/Schedule';
import dayjs from '@/utils/day';

type TimeSlotType = {
  start: dayjs.Dayjs;
  end: dayjs.Dayjs;
};

const duration = 30;

const floorByDuration = (time: dayjs.Dayjs, d: number) => {
  return time.subtract(time.minute() % d, 'minute');
};

const ceilByDuration = (time: dayjs.Dayjs, d: number) => {
  return time.add(d - (time.minute() % d), 'minute');
};

export const getTodayTimeSlots = (roomSessions: RoomTalkMapType) => {
  const days = Object.keys(roomSessions).flatMap((roomName: any) => {
    return roomSessions[roomName].map((session: any) => {
      return {
        start: session.start,
        end: session.end,
      };
    });
  });

  // find the earliest start time
  const earliestStart = days.reduce((prev, curr) => {
    return prev.start.isBefore(curr.start) ? prev : curr;
  });

  // find the latest end time
  const latestEnd = days.reduce((prev, curr) => {
    return prev.end.isAfter(curr.end) ? prev : curr;
  });

  // align the earliest start time
  const alignedEarliestStart = floorByDuration(earliestStart.start, duration);

  // align the latest end time
  const alignedLatestEnd = ceilByDuration(latestEnd.end, duration);

  // generate the time slots
  const timeSlots = [];
  for (
    let time = alignedEarliestStart;
    time.isBefore(alignedLatestEnd);
    time = time.add(duration, 'minute')
  ) {
    timeSlots.push({
      start: time,
      end: time.add(duration, 'minute'),
    });
  }

  return timeSlots;
};

export const getTimeSlotIndexRangeOfRoom = (
  roomSession: TalkType,
  timeSlots: TimeSlotType[],
) => {
  // align the room session start time
  const alignedStart = floorByDuration(roomSession.start, duration);
  // align the room session end time
  const alignedEnd = floorByDuration(roomSession.end, duration);
  // find the time slot index where the room session start in
  // time slot start time <= room session start time <= time slot end time
  const start = timeSlots.findIndex((timeSlot) => {
    return alignedStart.isBetween(timeSlot.start, timeSlot.end, null, '[)');
  });
  // find the time slot index where the room session end in
  // time slot start time <= room session end time <= time slot end time
  const end = timeSlots.findIndex((timeSlot) => {
    return alignedEnd.isBetween(timeSlot.start, timeSlot.end, null, '(]');
  });
  return { start, end };
};

export const getAggregatedTalksByTimeSlot = (roomTalks: RoomTalkMapType) => {
  const aggregatedDateTalksMap: {
    [key: string]: TalkType[];
  } = {};
  Object.keys(roomTalks).forEach((roomName) => {
    roomTalks[roomName].forEach((talk) => {
      // align the room session date time
      const alignedDate = floorByDuration(talk.date, duration);
      const key = alignedDate.format();
      if (aggregatedDateTalksMap[key]) {
        aggregatedDateTalksMap[key].push(talk);
      } else {
        aggregatedDateTalksMap[key] = [talk];
      }
    });
  });

  // to array
  const aggregatedTalks = Object.keys(aggregatedDateTalksMap).map((key) => {
    return {
      date: dayjs(key),
      talks: aggregatedDateTalksMap[key],
    };
  });
  // sort by date asc
  return aggregatedTalks.sort((a, b) => {
    return a.date.isBefore(b.date) ? -1 : 1;
  });
};
