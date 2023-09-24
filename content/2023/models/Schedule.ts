import {
  RawConferenceType,
  RawDayType,
  RawPersonType,
  RawRoomTalkMapType,
  RawRoomType,
  RawScheduleWrapperType,
  RawTalkType,
} from '@/models/RawSchedule';
import dayjs from '@/utils/day';

export type ScheduleType = {
  version: string;
  baseUrl: string;
  conference: ConferenceType;
};

export type ConferenceType = {
  acronym: string;
  title: string;
  start: string;
  end: string;
  daysCount: number;
  timeslotDuration: string;
  rooms: RoomType[];
  days: DayType[];
};

export type RoomType = {
  name: string;
  guid: string;
  description: string;
  capacity: number;
};

export type DayType = {
  index: number;
  date: dayjs.Dayjs;
  rooms: RoomTalkMapType;
};

export type RoomTalkMapType = {
  [key: string]: TalkType[];
};

export type TalkType = {
  id: number;
  logo: string;
  date: dayjs.Dayjs;
  start: dayjs.Dayjs;
  end: dayjs.Dayjs;
  duration: string;
  room: string;
  slug: string;
  url: string;
  title: string;
  subtitle: string;
  track: string;
  type: string;
  language: string;
  abstract: string;
  description: string;
  recordingLicense: string;
  doNotRecord: boolean;
  persons: PersonType[];
};

export type PersonType = {
  id: number;
  code: string;
  publicName: string;
  biography: string;
};

class Schedule {
  public static fromRaw(dto: RawScheduleWrapperType): ScheduleType {
    const { schedule } = dto;
    const { version, base_url, conference } = schedule;
    return {
      version,
      baseUrl: base_url,
      conference: Schedule.getConference(conference),
    };
  }

  public static getConference(
    rawConference: RawConferenceType,
  ): ConferenceType {
    const {
      acronym,
      title,
      start,
      end,
      days_count,
      timeslot_duration,
      rooms,
      days,
    } = rawConference;
    return {
      acronym,
      title,
      start,
      end,
      daysCount: days_count,
      timeslotDuration: timeslot_duration,
      rooms: Schedule.getRooms(rooms),
      days: Schedule.getDays(days),
    };
  }

  public static getRooms(rawRooms: RawRoomType[]): RoomType[] {
    return rawRooms.map((rawRoom) => {
      const { name, guid, description, capacity } = rawRoom;
      return {
        name,
        guid,
        description,
        capacity,
      };
    });
  }

  public static getDays(rawDays: RawDayType[]): DayType[] {
    return rawDays.map((rawDay) => {
      const { index, date, rooms } = rawDay;
      return {
        index,
        date: dayjs(date),
        rooms: Schedule.getRoomTalks(rooms),
      };
    });
  }

  public static getRoomTalks(
    rawRoomTalks: RawRoomTalkMapType,
  ): RoomTalkMapType {
    return Object.keys(rawRoomTalks).reduce((acc, roomName) => {
      acc[roomName] = Schedule.getRoomTalk(rawRoomTalks[roomName]);
      return acc;
    }, {} as { [key: string]: TalkType[] });
  }

  public static getRoomTalk(rawTalks: RawTalkType[]): TalkType[] {
    return rawTalks.map((talks) => {
      const {
        id,
        logo,
        date,
        start,
        duration,
        room,
        slug,
        url,
        title,
        subtitle,
        track,
        type,
        language,
        abstract,
        description,
        recording_license,
        do_not_record,
        persons,
      } = talks;
      const [durationHour, durationMinute] = duration.split(':');
      const startDate = dayjs(`2023-01-01T${start}:00+08:00`);
      return {
        id,
        logo,
        date: dayjs(date),
        start: startDate,
        end: startDate
          .add(parseInt(durationHour), 'hour')
          .add(parseInt(durationMinute), 'minute'),
        duration,
        room,
        slug,
        url,
        title,
        subtitle,
        track,
        type,
        language,
        abstract,
        description,
        recordingLicense: recording_license,
        doNotRecord: do_not_record,
        persons: Schedule.getPersons(persons),
      };
    });
  }

  public static getPersons(rawPersons: RawPersonType[]): PersonType[] {
    return rawPersons.map((rawPerson) => {
      const { id, code, public_name, biography } = rawPerson;
      return {
        id,
        code,
        publicName: public_name,
        biography,
      };
    });
  }
}

export default Schedule;
