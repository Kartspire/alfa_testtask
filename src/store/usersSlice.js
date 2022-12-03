import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: "usersSlice",
  initialState: {
    users: [],
    filteredUsers: [],
    filter: false,
  },
  reducers: {
    getUsers(state, action) {
      state.users = [...state.users, ...action.payload];
      console.log(state.users);
    },
    addLike(state, action) {
      state.filteredUsers.map((el) => {
        if (el.id === action.payload) {
          el.liked = true;
        }
        return el;
      });
      state.users.map((el) => {
        if (el.id === action.payload) {
          el.liked = true;
        }
        return el;
      });
    },
    removeLike(state, action) {
      state.filteredUsers.map((el) => {
        if (el.id === action.payload) {
          el.liked = false;
        }
        return el;
      });
      state.users.map((el) => {
        if (el.id === action.payload) {
          el.liked = false;
        }
        return el;
      });
    },
    removeUser(state, action) {
      state.filteredUsers = state.filteredUsers.filter(
        (el) => el.id !== action.payload
      );
      state.users = state.users.filter((el) => el.id !== action.payload);
    },
    showLiked(state) {
      state.filteredUsers = state.users.filter((el) => el.liked);
      state.filter = !state.filter;
    },
  },
});

export default usersSlice.reducer;
export const { getUsers, addLike, removeLike, removeUser, showLiked } =
  usersSlice.actions;
