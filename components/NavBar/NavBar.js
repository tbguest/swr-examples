import { BiLeftArrow } from "react-icons/bi";
import { BiRightArrow } from "react-icons/bi";
import Link from "next/link";
import clsx from "clsx";
import classes from "./NavBar.module.css";

export const NavBar = ({ prevUrl, nextUrl }) => {
  const prevHidden = !prevUrl;
  const nextHidden = !nextUrl;
  return (
    <div className={classes.header}>
      {prevHidden && <p></p>}
      <Link
        href={prevUrl}
        className={clsx(classes.nav_button, {
          [classes.hidden]: prevHidden,
        })}
      >
        <BiLeftArrow className={classes.nav_icon} />
        {/* <p>Back</p> */}
      </Link>
      <Link
        href={nextUrl}
        className={clsx(classes.nav_button, {
          [classes.hidden]: nextHidden,
        })}
      >
        {/* <p>Forward</p> */}
        <BiRightArrow />
      </Link>
      {nextHidden && <p></p>}
    </div>
  );
};
