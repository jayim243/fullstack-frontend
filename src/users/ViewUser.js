import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ViewUser() {
  //hook used for axios put request on line 30
  const { id } = useParams();

  //use state for storing input
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
  });

  useEffect(() => {
    //sends a GET request to fetch user data based on the id parameter from the URL. The retrieved data is then used to update the state.
    const loadUser = async () => {
      const result = await axios.get(`http://localhost:8080/user/${id}`);
      setUser(result.data);
    };
    loadUser();
  }, [id]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">View User</h2>
          <div className="card">
            <div className="card-header">
              Details of user id: {user.id}
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>Name</b>
                  {user.name}
                </li>
                <li className="list-group-item">
                  <b>Username</b>
                  {user.username}
                </li>
                <li className="list-group-item">
                  <b>Email</b>
                  {user.email}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <Link className="btn btn-primary my-2" to={"/"}>
          Back to Home
        </Link>
      </div>
    </div>
  );
}