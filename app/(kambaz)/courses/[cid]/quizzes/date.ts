export default function dateToString(date: Date) {
  let rawHours = date.getHours(); 
  const rawMins = date.getMinutes(); 
  const ampm = rawHours < 12 ? "am" : "pm"; 
  rawHours = rawHours % 12 || 12; 
  const month = date.toLocaleString('default', { month: 'short' });
  const day = String(date.getDate()).padStart(2, "0");
  const hour = String(rawHours).padStart(2, "0");
  const minutes = String(rawMins).padStart(2, "0");

  const time = rawMins === 0 ? `${hour}${ampm}` : `${hour}:${minutes}${ampm}`;

  return `${month} ${day} at ${time}`;
}