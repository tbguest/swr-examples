import { WithUseEffect } from "../components/WithUseEffect";
import { WithSWR } from "../components/WithSWR";
import { Card } from "../components/Card";
import classes from "../styles/Home.module.css";

export default function Page2() {
  return (
    <div className="App">
      <main className={classes.main}>
        <h1>SWR</h1>
        <div className={classes.grid}>
          <Card>
            <WithUseEffect url={"/api/time"} />
          </Card>
          <Card>
            <WithSWR url={"/api/time"} />
          </Card>
          <Card>
            <WithUseEffect url={"/api/cached-time"} />
          </Card>
          <Card>
            <WithSWR url={"/api/cached-time"} />
          </Card>
        </div>
      </main>
    </div>
  );
}
