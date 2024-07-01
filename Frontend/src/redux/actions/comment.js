import { DELETE_COMMENT, GET_COMMENT, UPDATE_COMMENT } from '../../constants';
import * as api from '../../api/index';


export const commentGet = (id) => async (dispatch) => {
  try {
    const { data } = await api.getComment(id);
    dispatch({ type: GET_COMMENT, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const commentCreate = (content, userId, postId) => async (dispatch) => {
  try {
    await api.createComment(content, userId, postId);
    dispatch(commentGet(postId));  
  } catch (error) {
    console.log(error);
  }
};

export const commentEdit = (id, content) => async (dispatch) => {
  try {
    const {data} = await api.updateComment(id, content);
    dispatch({ type: UPDATE_COMMENT, payload: data });
  } catch (error) {
    console.log(error);
  }
};



export const commentDelete = (id) => async (dispatch) => {
  try {
    await api.deleteComment(id);
    dispatch({ type: DELETE_COMMENT, payload: id })
  } catch (error) {
    console.log(error);
  }
};