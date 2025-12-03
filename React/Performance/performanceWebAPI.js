// 1. Performance.now()

const start = performance.now();
// Run some code here
const end = performance.now();

console.log(`Execution time: ${end - start}ms`);

// 2.  Performance Timing API

let [navigationTiming] = performance.getEntriesByType("navigation");

if (navigationTiming instanceof PerformanceNavigationTiming) {
  // Calculate time from navigation start to DOM content loaded
  const pageLoadTime =
    navigationTiming.domContentLoadedEventEnd - navigationTiming.startTime;

  console.log("DOM Content Loaded Time:", pageLoadTime, "ms");
}

// 3. PerformanceObserver

const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    console.log(`Long task detected: ${entry.duration}ms`);
  });
});

observer.observe({ type: "longtask", buffered: true });
