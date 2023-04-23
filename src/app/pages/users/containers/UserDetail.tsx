import React, { useEffect } from "react";
import { getUserInfo } from "../user.action";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

const UserList = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  const { dataUser, hasError } = useSelector((state: any) => state.userReducer);
  const { isLoading } = useSelector((state: any) => state.userReducer);

  useEffect(() => {
    dispatch(getUserInfo(id));
  }, []);

  useEffect(() => {
    if (hasError) {
      navigate("/user/error");
    }
  }, [hasError]);

  return (
    <>
      {isLoading ? (
        <p>Loading</p>
      ) : (
        <>
          {dataUser && (
            <div className="container">
              <div className="card-body p-4">
                <h6 className="txt-bold">User Information</h6>
                <div className="row justify-content-center pt-1 ">
                  <div className="col-6 mb-3">
                    <h6>Name</h6>
                    <p className="text-muted">{dataUser.name}</p>
                  </div>
                  <div className="col-6 mb-3">
                    <h6>Phone</h6>
                    <p className="text-muted">{dataUser.phone}</p>
                  </div>
                </div>
                <div className="row justify-content-center pt-1">
                  <div className="col-6 mb-3">
                    <h6>Email</h6>
                    <p className="text-muted">{dataUser.email}</p>
                  </div>
                  <div className="col-6 mb-3">
                    <h6>Website</h6>
                    <p className="text-muted">{dataUser.website}</p>
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
