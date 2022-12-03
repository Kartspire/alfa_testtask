import React from "react";
import { useDispatch } from "react-redux";
import { addLike, removeLike } from "../../store/usersSlice";
import styles from "./Like.module.css";

export const Like = ({ user }) => {
  const dispatch = useDispatch();

  const likeUser = () => {
    user.liked ? dispatch(removeLike(user.id)) : dispatch(addLike(user.id));
  };

  return (
    <div
      onClick={likeUser}
      className={`${styles.likeButton} ${user.liked && styles.liked} `}
    >
      <span className={styles.likeIcon}>
        <div className={styles.heartAnimationFirst}></div>
        <div className={styles.heartAnimationSecond}></div>
      </span>
    </div>
  );
};
