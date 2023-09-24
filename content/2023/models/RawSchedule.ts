export type RawScheduleWrapperType = {
  schedule: RawScheduleType;
};

export type RawScheduleType = {
  version: string;
  base_url: string;
  conference: RawConferenceType;
};

export type RawConferenceType = {
  acronym: string;
  title: string;
  start: string;
  end: string;
  days_count: number;
  timeslot_duration: string;
  rooms: RawRoomType[];
  days: RawDayType[];
};

export type RawRoomType = {
  name: string;
  guid: string;
  description: string;
  capacity: number;
};

export type RawDayType = {
  index: number;
  date: string;
  day_start: string;
  day_end: string;
  rooms: RawRoomTalkMapType;
};

export type RawRoomTalkMapType = {
  [key: string]: RawTalkType[];
};

export type RawTalkType = {
  id: number;
  guid: string;
  logo: string;
  date: string;
  start: string;
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
  recording_license: string;
  do_not_record: boolean;
  persons: RawPersonType[];
};

export type RawPersonType = {
  id: number;
  code: string;
  public_name: string;
  biography: string;
};

class RawSchedule {
  public static fromJson = (json: any): RawScheduleWrapperType => {
    return json as RawScheduleWrapperType;
  };
}

export default RawSchedule;
