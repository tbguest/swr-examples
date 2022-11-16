import { WithUseEffect } from "../components/TimeCards/WithUseEffect";
import { WithSWR } from "../components/TimeCards/WithSWR";
import classes from "../styles/Home.module.css";
import { NavBar } from "../components/NavBar";

export default function Home() {
  return (
    <div className="App">
      <main className={classes.main}>
        <h1>SWR</h1>
        <NavBar prevUrl="/browser-cache" nextUrl="/latency" />
        <div className={classes.grid}>
          <WithUseEffect url={"/api/time"} />
          <WithSWR url={"/api/time"} opts={null} />
        </div>
      </main>
    </div>
  );
}
