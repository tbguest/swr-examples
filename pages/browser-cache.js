import { WithUseEffect } from "../components/TimeCards/WithUseEffect";
import { WithSWR } from "../components/TimeCards/WithSWR";
import classes from "../styles/Home.module.css";
import { NavBar } from "../components/NavBar";

export default function BrowserCache() {
  return (
    <div className="App">
      <main className={classes.main}>
        <h1>Browser Cache</h1>
        <NavBar prevUrl="/latency" nextUrl="/polling" />
        <div className={classes.grid}>
          <WithUseEffect url={"/api/time-delay"} />
          <WithSWR url={"/api/time-delay"} opts={null} />
        </div>
      </main>
    </div>
  );
}

// export default function Page2() {
//   return (
//     <div className="App">
//       <main className={classes.main}>
//         <h1>SWR</h1>
//         <NavBar prevUrl="page1" nextUrl="/page3" />
//         <div className={classes.grid}>
//           <Card>
//             <WithUseEffect url={"/api/time"} />
//           </Card>
//           <Card>
//             <WithSWR url={"/api/time"} />
//           </Card>
//           <Card>
//             <WithUseEffect url={"/api/cached-time"} />
//           </Card>
//           <Card>
//             <WithSWR url={"/api/cached-time"} />
//           </Card>
//         </div>
//       </main>
//     </div>
//   );
// }
