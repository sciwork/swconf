import { RoomTalkMapType, TalkType } from '@/models/Schedule';
import dayjs from '@/utils/day';

const duration = 30;

const floorByDuration = (time: dayjs.Dayjs, d: number) => {
  return time.subtract(time.minute() % d, 'minute');
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
