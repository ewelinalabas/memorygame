export const shuffle = (a) => {
  for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export const formatDuration = (seconds) => {
  const date = new Date(seconds * 1000)
  let hh = date.getUTCHours()
  let mm = date.getUTCMinutes()
  let ss = date.getUTCSeconds()

  if (hh < 10) {hh = "0"+ hh}
  if (mm < 10) {mm = "0"+ mm}
  if (ss < 10) {ss = "0"+ ss}
  
  return hh + ":" + mm + ":" + ss
}
