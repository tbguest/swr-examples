import classes from "../../styles/Home.module.css";

export const Card = ({ children }) => {
  return <div className={classes.card}>{children}</div>;
};
