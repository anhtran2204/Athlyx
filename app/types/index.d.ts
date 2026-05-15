// export type Range = {
//   start: Date;
//   end: Date;
// };

import type { CalendarDate } from "@internationalized/date";

export type Period = "daily" | "weekly" | "monthly";

export type Range = {
  start: CalendarDate;
  end: CalendarDate;
};

type Exercise = {
  id: string;
  name: string;
  category: string;
  equipment: string;
  difficulty: string;
};
