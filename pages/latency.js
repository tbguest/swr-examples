import { WithUseEffect } from "../components/TimeCards/WithUseEffect";
import { WithSWR } from "../components/TimeCards/WithSWR";
import classes from "../styles/Home.module.css";
import { NavBar } from "../components/NavBar";

export default function Latency() {
  return (
    <div className="App">
      <main className={classes.main}>
        <h1>Add Latency</h1>
        <NavBar prevUrl="/" nextUrl="/browser-cache" />
        <div className={classes.grid}>
          <WithUseEffect url={"/api/time-delay"} />
          <WithSWR url={"/api/time-delay"} opts={null} />
        </div>
      </main>
    </div>
  );
}
