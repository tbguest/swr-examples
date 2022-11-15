import classes from "./Card.module.css";

export const Card = ({ children }) => {
  return <div className={classes.card}>{children}</div>;
};
