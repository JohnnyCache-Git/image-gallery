import dayjs from "dayjs";

export const formatDatetimeAsDate = (datetime?: string) =>
  !!datetime ? dayjs(datetime).format("MMMM DD, YYYY") : "";
