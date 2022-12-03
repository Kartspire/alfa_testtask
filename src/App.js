import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./asyncActions/users";
import { Loader } from "./components/Loader/Loader";
import { Filter } from "./components/Filter/Filter";
import { CardsList } from "./components/CardsList/CardsList";
import "./app.css";

export const App = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  const loader = useSelector((state) => state.loader.loader);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return loader ? (
    <Loader />
  ) : (
    <div className="container">
      <Filter />
      {<CardsList users={users} />}
    </div>
  );
};
