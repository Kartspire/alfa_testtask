import React from "react";
import { useDispatch } from "react-redux";
import { showLiked } from "../../store/reducers/usersSlice";
import styles from "./Filter.module.css";

export const Filter = () => {
  const dispatch = useDispatch();

  return (
    <div className={styles.checkboxWrapper}>
      <input
        onChange={() => {
          setTimeout(() => dispatch(showLiked()), 300);
        }}
        className={styles.customCheckbox}
        type="checkbox"
        id="liked"
      />
      <label className={styles.customCheckboxLabel} htmlFor="liked">
        Показать избранное
      </label>
    </div>
  );
};
