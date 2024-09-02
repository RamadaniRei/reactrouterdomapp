import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useResolvedPath } from "react-router-dom";

import { useTheme } from "../Context";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const getUrl = "https://jsonplaceholder.typicode.com/users";

  const { theme } = useTheme();
  const resolvedPath = useResolvedPath("");

  useEffect(() => {
    axios.get(getUrl).then(function (response) {
      setUsers(response.data);
      setLoading(false);
    });
  }, []);

  return (
    <div className="container">
      <h1 className="display-4">Users</h1>
      <div className="row">
        {loading ? (
          <div className="display-5">Loading.....</div>
        ) : (
          users.map((user) => (
            <div className="col-md-3 my-2" key={user.id}>
              <div className={`card bg-${theme}`}>
                <img
                  className="w-100"
                  src="https://www.shutterstock.com/shutterstock/photos/2053015835/display_1500/stock-photo-orange-with-sliced-and-green-leaves-isolated-on-white-background-2053015835.jpg"
                  alt="user's photo"
                />
                <div className="card-body">
                  <h5 className="pl-2 card-title">{user.name}</h5>
                  <ul className="list-group my-3">
                    <li className="list-group-item">
                      <strong>Username:</strong> {user.username}
                    </li>
                    <li className="list-group-item">
                      <strong>Email:</strong> {user.email}
                    </li>
                    <li className="list-group-item">
                      <strong>Phone:</strong> {user.phone}
                    </li>
                  </ul>
                  <Link
                    className="btn btn-outline-danger w-100"
                    to={`${resolvedPath.pathname}/${user.id}`}
                  >
                    Show more details
                  </Link>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Users;
