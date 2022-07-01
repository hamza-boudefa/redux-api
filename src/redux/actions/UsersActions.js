import axios from "axios";
import { FAIL_USER, GET_USER,ADD_CARD, DELETE_CARD } from "../constants/Constats";

export const getUsers = () => async (dispatch) => {
  try {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    dispatch({
      type: GET_USER,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: FAIL_USER,
      payload: error,
    });
  }
};

// export const getPosts=()=> async (dispatch)=>{
//     try {
//         const res= await axios.get('https://jsonplaceholder.typicode.com/posts');
//         dispatch({
//             type: GET_POSTS,
//             payload: res.data
//         });
//     }
//     catch (error){
//             dispatch({
//                 type: FAIL_POSTS,
//                 payload: error,
//             })
//         }
//     }

export const AddCards=(payload)=>{
return {
    type:ADD_CARD,
    payload
}
}

export const deleteCard=(id)=>{
  return{
    type:DELETE_CARD,
    payload:id
  }
}