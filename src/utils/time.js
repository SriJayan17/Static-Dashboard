import moment from "moment";

export const getRelativeTimeDifference = (time) => {
  const difference = moment().unix() - moment(time*1000).unix();

  if (difference < 60) return 'Just now';

  if (difference < 3600) return Math.floor(difference/60) + ' minutes ago';

  if (difference < 13*3600) return Math.floor(difference/3600) + ' hours ago';

  if (difference < 24*3600) return 'Today, ' + moment(time*1000).format('HH:MM');

  return moment(time*1000).format('DD/MM/YY HH:MM');
}