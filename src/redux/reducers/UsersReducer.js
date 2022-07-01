import { GET_USER, ADD_CARD, DELETE_CARD } from "../constants/Constats";

const initialisation = { users: [] };
export const userReducer = (state = initialisation, { type, payload }) => {
  switch (type) {
    case GET_USER:
      return { ...state, users: payload };
    case ADD_CARD:
      return { users: [...state.users, payload] };
    case DELETE_CARD:
      return {users : state.users.filter((user) => user.id !== payload)};
    default:
      return state;
  }
};
