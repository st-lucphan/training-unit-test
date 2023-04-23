// import ACTION_TYPES from "@app/core/constants/types";
const ACTION_TYPES = {
  SIGN_IN: "SIGN_IN",
  SIGN_IN_SUCCESS: "SIGN_IN_SUCCESS",
  SIGN_IN_ERROR: "SIGN_IN_ERROR",
  GET_LIST_USER: "GET_LIST_USER",
  GET_LIST_USER_SUCCESS: "GET_LIST_USER_SUCCESS",
  GET_LIST_USER_ERROR: "GET_LIST_USER_ERROR",
  GET_USER_INFO: "GET_USER_INFO",
  GET_USER_INFO_SUCCESS: "GET_USER_INFO_SUCCESS",
  GET_USER_INFO_ERROR: "GET_USER_INFO_ERROR",
  DELETE_USER: "DELETE_USER",
};
export const getUserInfo = (id) => {
  return {
    type: ACTION_TYPES.GET_USER_INFO,
    payload: { id },
  };
};

export const getUserInfoSuccess = (data) => {
  return {
    type: ACTION_TYPES.GET_USER_INFO_SUCCESS,
    payload: { data },
  };
};

export const getUserInfoError = (error) => {
  return {
    type: ACTION_TYPES.GET_USER_INFO_ERROR,
    payload: { error },
  };
};

export const getListUser = () => {
  return {
    type: ACTION_TYPES.GET_LIST_USER,
  };
};

export const getListUserSuccess = (data) => {
  return {
    type: ACTION_TYPES.GET_LIST_USER_SUCCESS,
    payload: { data },
  };
};

export const getListUserError = (error) => {
  return {
    type: ACTION_TYPES.GET_LIST_USER_ERROR,
    payload: { error },
  };
};

export const deleteUser = (id) => {
  return {
    type: ACTION_TYPES.DELETE_USER,
    payload: { id },
  };
};
