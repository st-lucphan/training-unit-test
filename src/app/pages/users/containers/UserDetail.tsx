import React, { useEffect, useState } from "react";
import { deleteUser, getListUser, getUserInfo } from "../user.action";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

const UserList = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const userData = useSelector((state: any) => state.userReducer.dataUser);
  const { isLoading } = useSelector((state: any) => state.userReducer);
  const [isLoadingIndicator, setIsLoadingIndicator] = useState(true);

  useEffect(() => {
    dispatch(getUserInfo(id));
    // if (!isLoading) {
    //   setTimeout(() => {
    //     setIsLoadingIndicator(false);
    //   }, 1000);
    // }
  }, []);

  return (
    <>
      {isLoading ? (
        <p>Loading</p>
      ) : (
        <>
          {userData && (
            <div className="container">
              <div className="card-body p-4">
                <h6 className="txt-bold">Information</h6>
                <div className="row justify-content-center pt-1 ">
                  <div className="col-6 mb-3">
                    <h6>Name</h6>
                    <p className="text-muted">{userData.name}</p>
                  </div>
                  <div className="col-6 mb-3">
                    <h6>Phone</h6>
                    <p className="text-muted">{userData.phone}</p>
                  </div>
                </div>
                <div className="row justify-content-center pt-1">
                  <div className="col-6 mb-3">
                    <h6>Email</h6>
                    <p className="text-muted">{userData.email}</p>
                  </div>
                  <div className="col-6 mb-3">
                    <h6>Website</h6>
                    <p className="text-muted">{userData.website}</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
};
export default UserList;
