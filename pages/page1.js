import { WithUseEffect } from "../components/WithUseEffect";
import { WithSWR } from "../components/WithSWR";
import { Card } from "../components/Card";
import classes from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="App">
      <main className={classes.main}>
        <h1>SWR</h1>
        <div className={classes.grid}>
          <Card>
            <WithUseEffect url={"/api/time-delay"} />
          </Card>
          <Card>
            <WithSWR url={"/api/time-delay"} opts={{ refreshInterval: 500 }} />
          </Card>
        </div>
      </main>
    </div>
  );
}
