const smoothScrollOptions = {
  speed: 900,
  speedAsDuration: true,
  updateURL: false
};
const smoothScroll = new SmoothScroll('a[href^="#"]', smoothScrollOptions);
