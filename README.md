## SWR Caching in Action

This small project is a supplement to a talk on managing server state and stale-while-revalidate as a cache invalidation strategy. You can watch the talk here: https://www.youtube.com/watch?v=E7t_dcnB6Vw.

This app compares API responses from a basic `useEffect`+`fetch` strategy with data fetched using a server state management library (Vercel's `useSWR` in this case). There are four examples demonstrating some of the benefits you get out-of-the-box when you hand off the server state management to the library:
- fetch on refocus
- use of the in-memory cache during higher-latency requests
- polling
- coupling `useSWR` (an in-memory cache) with HTTP cache control directives like `stale-while-revalidate` (browser cache) 

All the examples use very simple requests for server timestamps. If you visit the [app](https://useswr-examples.vercel.app/), try refreshing or refocusing the page to get a sense of how the cache(s) are being hit and refreshed to show you the data on the page.
