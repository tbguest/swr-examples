import { WithUseEffect } from "../components/TimeCards/WithUseEffect";
import { WithSWR } from "../components/TimeCards/WithSWR";
import classes from "../styles/Home.module.css";
import { NavBar } from "../components/NavBar";

export default function Polling() {
  return (
    <div className="App">
      <main className={classes.main}>
        <h1>Polling</h1>
        <NavBar prevUrl="/latency" nextUrl="browser-cache" />
        <div className={classes.grid}>
          <WithUseEffect url={"/api/time"} />
          <WithSWR url={"/api/time"} opts={{ refreshInterval: 2000 }} />
        </div>
      </main>
    </div>
  );
}
