export const shuffle = (a) => {
  for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
  };
  return a;
};

export const formatDuration = (seconds) => {
  const date = new Date(seconds * 1000);
  let hh = date.getUTCHours();
  let mm = date.getUTCMinutes();
  let ss = date.getUTCSeconds();

  if (hh < 10) {hh = "0"+ hh};
  if (mm < 10) {mm = "0"+ mm};
  if (ss < 10) {ss = "0"+ ss};
  
  return hh + ":" + mm + ":" + ss;
};

const subtract = (values) => {
  return values[0] - values[1];
};

export const compareNumbers = (a, b, criterion, direction) => {
  const values = direction === 'ASC' ? [a, b] : [b, a];

  if(criterion === 'created_at') {
    return subtract(values.map(score => Date.parse(score.created_at)));
  } else if(criterion === 'time') {
    return subtract(values.map(score => score.time));
  } else {
    return a - b;
  };
};

export const chunkify = (list, step) => {
  const numberOfChunks = Math.ceil(list.length / step);
  let chunkedList = [];
  let beginning = 0;
  
  for(let i = 0; i < numberOfChunks; i++) {
    chunkedList.push(list.slice(beginning, beginning + step))
    beginning += step
  };
  return chunkedList;
};
