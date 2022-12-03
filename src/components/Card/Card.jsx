import React from "react";
import { DeleteBtn } from "../DeleteBtn/DeleteBtn";
import { Like } from "../Like/Like";
import styles from "./Card.module.css";

export const Card = React.memo(({ user }) => {
  return (
    <li className={styles.card}>
      <img
        src={user.image}
        alt="тут был сочный бургер"
        className={styles.image}
      />
      <h2 className={styles.name}>{user.name}</h2>
      <div className={styles.buttons}>
        <Like user={user} />
        <DeleteBtn user={user} />
      </div>
    </li>
  );
});
