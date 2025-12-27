import { formatDistance, parseISO } from "date-fns";
import { differenceInDays } from "date-fns/esm";

export const subtractDates = (dateStr1: string | Date, dateStr2: string | Date): number => {
  const parsedDate1 = typeof dateStr1 === "string" ? parseISO(dateStr1) : dateStr1;
  const parsedDate2 = typeof dateStr2 === "string" ? parseISO(dateStr2) : dateStr2;

  return differenceInDays(parsedDate1, parsedDate2);
};

export const formatDistanceFromNow = (dateStr: string): string => {
  const parsedDate = parseISO(dateStr);

  return formatDistance(parsedDate, new Date(), { addSuffix: true })
    .replace("about ", "")
    .replace("in", "In");
};

interface GetTodayOptions {
  end?: boolean;
}

export const getToday = (options?: GetTodayOptions): string => {
  const today = new Date();

  if (options?.end) {
    today.setUTCHours(23, 59, 59, 999);
  } else {
    today.setUTCHours(0, 0, 0, 0);
  }

  return today.toISOString();
};

export const formatCurrency = (value: number): string => {
  return new Intl.NumberFormat("en", { style: "currency", currency: "USD" }).format(value);
};
