export interface ScheduleItem {
  date: string;
  time: string;
  note?: string;
}

export interface Schedule {
  id: string;
  title: string;
  content: ScheduleItem[];
  updatedAt: string;
  isPublished: boolean;
}

export type ScheduleId =
  | 'periodic-check-schedule'
  | 'competitions-schedule'
  | 'tactical-medicine-schedule'
  | 'weapon-safety-schedule'
