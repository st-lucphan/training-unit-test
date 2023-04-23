import React, { useEffect, useState } from "react";
import { deleteUser, getListUser, getUserInfo } from "../user.action";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

const Error = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const userData = useSelector((state: any) => state.userReducer.dataUser);
  const { isLoading } = useSelector((state: any) => state.userReducer);
  const [isLoadingIndicator, setIsLoadingIndicator] = useState(true);

  return (
    <>
      <p>Error</p>
    </>
  );
};
export default Error;
