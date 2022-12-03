import { removeLoader } from "../store/reducers/loaderSlice";
import { getUsers } from "../store/reducers/usersSlice";

export const fetchUsers = () => {
  return (dispatch) => {
    fetch(
      "https://api.spoonacular.com/food/search?query=burger&number=15&apiKey=9c3b5bc6a42a4f14949445caa1b31477"
    )
      .then((response) => response.json())
      .then((json) => dispatch(getUsers(json.searchResults[0].results)))
      .then(() => dispatch(removeLoader()));
  };
};
