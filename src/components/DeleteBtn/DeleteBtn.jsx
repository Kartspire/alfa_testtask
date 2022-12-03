import React from "react";
import { useDispatch } from "react-redux";
import { removeUser } from "../../store/usersSlice";
import styles from "./DeleteBtn.module.css";

export const DeleteBtn = ({ user }) => {
  const dispatch = useDispatch();

  return (
    <button
      className={styles.deleteBtn}
      onClick={() => dispatch(removeUser(user.id))}
    >
      удалить
    </button>
  );
};
