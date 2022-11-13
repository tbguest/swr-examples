// import { useEffect, useState } from "react";

// export default function App() {
//   const [data, setData] = useState();
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(false);

//   useEffect(() => {
//     const fetchData = async () => {
//       setLoading(true);
//       const response = await fetch("/api/route");
//       const data = await response.json();
//       setData(data);
//       setLoading(false);
//     };

//     fetchData();
//   }, []);

//   return <>{data && data}</>;
// }

// //

// // import { useState, useEffect, useRef } from "react";

// function useFetch(url) {
//   const cache = useRef({});
//   const [data, setData] = useState();
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(false);

//   useEffect(() => {
//     const fetchData = async () => {
//       setLoading(true);
//       if (cache.current[url]) {
//         setData(cache.current[url]);
//         setLoading(false);
//       } else {
//         const response = await fetch(url);
//         const data = await response.json();
//         cache.current[url] = data;
//         setData(data);
//         setLoading(false);
//       }
//     };
//     fetchData();
//   }, [url]);

//   return { data, loading, error };
// }

// export function Appp() {
//   const { data: userData } = useFetch("/api/user");
//   const { data: userPosts } = useFetch("/api/user/posts");
//   return <>{"..."}</>;
// }

// //

// import useSWR from "swr";

// const fetcher = (url) => fetch(url).then((res) => res.json());

// function Apppp() {
//   const { data, error } = useSWR("/api/route", fetcher);
//   return (
//     <div className="App">
//       {!error && <p>{data}</p>}
//       ...
//     </div>
//   );
// }

// //

// const useData = (url) => {
//   const { data, error } = useSWR(url, fetcher);
//   return { data, error };
// };

// function Appppp() {
//   const { data: userData, ...status1 } = useData("/api/user");
//   const { data: userPosts, ...status2 } = useData("/api/posts");
//   return (
//     <div className="App">
//       {!error && <p>{data}</p>}
//       ...
//       <Card />
//       <Card />
//     </div>
//   );
// }
