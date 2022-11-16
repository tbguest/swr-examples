import { WithUseEffect } from "../components/TimeCards/WithUseEffect";
import { WithSWR } from "../components/TimeCards/WithSWR";
import classes from "../styles/Home.module.css";
import { NavBar } from "../components/NavBar";

export default function BrowserCache() {
  return (
    <div className="App">
      <main className={classes.main}>
        <h1>Browser Cache</h1>
        <NavBar prevUrl="/polling" nextUrl="/" />
        <div className={classes.grid}>
          <WithUseEffect url={"/api/cached-time"} />
          <WithSWR url={"/api/cached-time"} opts={null} />
        </div>
      </main>
    </div>
  );
}
