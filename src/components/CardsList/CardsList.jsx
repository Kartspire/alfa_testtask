import React from "react";
import { useSelector } from "react-redux";
import { Card } from "../Card/Card";

export const CardsList = React.memo(({ users }) => {
  const filteredUsers = useSelector((state) => state.users.filteredUsers);
  const filter = useSelector((state) => state.users.filter);

  return (
    <ul>
      {filter ? (
        filteredUsers.length > 0 ? (
          filteredUsers.map((user) => <Card key={user.id} user={user} />)
        ) : (
          <div>Упс! У вас нет избранных бургеров</div>
        )
      ) : users.length > 0 ? (
        users.map((user) => <Card key={user.id} user={user} />)
      ) : (
        <div>Упс! У вас нет избранных бургеров</div>
      )}
    </ul>
  );
});
