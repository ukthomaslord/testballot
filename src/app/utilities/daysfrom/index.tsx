export default function daysFrom(date: string) {
  var date1 = new Date(date);
  var currentDate = new Date();
  var diff = Math.abs(date1.getTime() - currentDate.getTime());
  var diffDays = Math.ceil(diff / (1000 * 3600 * 24));
  return diffDays;
}
