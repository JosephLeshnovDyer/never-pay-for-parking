export default function formatDate(date) {
  const month = date.toLocaleString("default", {
    month: "long",
  });
  const day = date.getDate();
  const year = date.getFullYear();
  const dateStr = `${month} ${day}, ${year}`;

  return dateStr;
}
