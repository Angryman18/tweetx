export const calculatePostTime = (time: string) => {
  /* @ts-ignore */
  const timeage = new Date(new Date().toISOString()) - new Date(time);
  const minutes = timeage / (1000 * 60);
  const hours =
    minutes > 60
      ? `${Math.floor(minutes / 60)} ${minutes < 120 ? "hour" : "hours"} ago`
      : minutes > 24 * 60 && minutes < 48 * 60
      ? "1 day ago"
      : minutes > 24 * 60
      ? new Date(time).toDateString()
      : `${Math.floor(minutes)} minutes ago`;
  return hours;
};
