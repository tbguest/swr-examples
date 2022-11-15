import classes from "./Notification.module.css";

export const Notification = ({ text }) => {
  return (
    <li key={text} className={classes.notification_container}>
      <div className={classes.notification_item_1}>{text}</div>
    </li>
  );
};
