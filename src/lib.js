export const getColor = (percentage) => {
  // red 	#BE1C1C
  // orange #FFA500
  // green #77ab59
  let color;
  if (percentage < 30) {
    color = '#d41243'
  } else if (percentage < 60) {
    color = '#FFA500'
  } else {
    color = '#77ab59'
  }
  return color;
}