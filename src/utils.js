/** Data Generators */
export function generateSeries(interval = 30) {
  // credit: https://stackoverflow.com/a/36134998
  const dates = new Date(1970, 0, 1, 0, 0, 0, 0);
  let datesArray = [];
  while (dates.getDate() === 1) {
    datesArray.push(dates.toLocaleTimeString("en-US").replace(":00 ", " "));
    dates.setMinutes(dates.getMinutes() + interval);
  }

  return datesArray;
}

export function sliceSeries(series, start = "7:00 AM", end = "9:00 PM") {
  // TODO: handle  cases when the endIndex is earlier than the startIndex
  // Example: 9PM to 5AM
  const startIndex = series.findIndex(time => time === start);
  const endIndex = series.findIndex(time => time === end) + 1;
  return series.slice(startIndex, endIndex);
}

/** Converting from time to grid column ranges*/
export function minuteIntervalFrequency(interval) {
  return 60 / interval;
}

export function convertTimeToGanttGrid(series, start, end) {
  // TODO: error handling
  const startIndex = series.findIndex(time => time === start) + 1;
  const endIndex = series.findIndex(time => time === end) + 1;
  return `${startIndex}/${endIndex}`;
}

/** Formatting Header Timeline */
export function removeMinuteIntervals(series, interval) {
  return series.map(time => (time.includes(`:${interval}`) ? null : time));
}

export function removeMeridian(series, keep = "12:00 PM") {
  return series.map(time => {
    if (time === keep) {
      return time;
    }

    return time.replace(" PM", "").replace(" AM", "");
  });
}
