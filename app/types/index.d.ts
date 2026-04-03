// export type Range = {
//   start: Date;
//   end: Date;
// };

import type { CalendarDate } from "@internationalized/date";

export type Range = {
  start: CalendarDate | undefined;
  end: CalendarDate | undefined;
};
