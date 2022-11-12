import { WithUseEffect } from "../components/WithUseEffect";
import { WithSWR } from "../components/WithSWR";
import { Card } from "../components/Card";
import classes from "../styles/Home.module.css";
import { BiLeftArrow } from "react-icons/bi";
import { BiRightArrow } from "react-icons/bi";
import Link from "next/link";

export default function Home() {
  return (
    <div className="App">
      <main className={classes.main}>
        <h1>SWR</h1>
        <NavBar prevUrl="" nextUrl="/page1" />
        <div className={classes.grid}>
          <Card>
            <WithUseEffect url={"/api/time"} />
          </Card>
          <Card>
            <WithSWR url={"/api/time"} opts={null} />
          </Card>
        </div>
      </main>
    </div>
  );
}

const NavBar = ({ prevUrl, nextUrl }) => {
  const prevHidden = !prevUrl;
  const nextHidden = !nextUrl;

  const nextClass = !nextUrl ? classes.hidden : classes.nav_button;

  console.log("prevUrl", !prevUrl);
  console.log("nextUrl", !nextUrl);
  return (
    <div className={!prevUrl ? classes.hidden : classes.header}>
      <Link href={prevUrl} className={classes.nav_button}>
        <BiLeftArrow className={classes.nav_icon} />
        <p>Back</p>
      </Link>
      <Link href={nextUrl} className={nextClass}>
        <p>Forward</p>
        <BiRightArrow className={classes.nav_icon} />
      </Link>
    </div>
  );
};
