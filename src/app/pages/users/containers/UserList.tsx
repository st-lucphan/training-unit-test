import React, { useEffect, useState } from 'react';
import { deleteUser, getListUser } from '../user.action';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

const UserList = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { dataList, hasError } = useSelector((state: any) => state.userReducer);
  const { isLoading } = useSelector((state: any) => state.userReducer);
  const [users, setUsers] = useState([]);
  const deleteUserItem = (id) => {
    setUsers(users?.filter((user) => user.id !== id));
    dispatch(deleteUser(id));
  };

  useEffect(() => {
    dispatch(getListUser());
  }, []);

  useEffect(() => {
    setUsers(dataList);
  }, [dataList]);

  useEffect(() => {
    if (hasError) {
      navigate('/user/error');
    }
  }, [hasError]);

  return (
    <>
      {isLoading ? (
        <p>Loading</p>
      ) : (
        <div className="container">
          <h1 className="txt-center txt-bold">User List</h1>
          <ul data-testid="user-list" className="txt-center">
            {users &&
              users.map((item) => (
                <li
                  data-testid="user-item"
                  className="d-flex justify-content-center mt-2"
                  key={item.id}
                >
                  <Link
                    to={`/users/${item.id}`}
                    data-testid="user-item1"
                    className="col-2 txt-left"
                  >
                    {item?.name}
                  </Link>
                  <button
                    className="btn btn-danger col-1"
                    onClick={() => deleteUserItem(item?.id)}
                  >
                    Delete
                  </button>
                </li>
              ))}
          </ul>
        </div>
      )}
    </>
  );
};
export default UserList;
