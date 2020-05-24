import React, { useState, useEffect } from "react";
import Heading from "./Heading";
import axios from "axios";
import Singleuser from "./Singleuser";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/users");
      const userInfo = res.data;
      console.log(userInfo);
      setUsers(userInfo);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="container mt-5">
      <Heading
        head="Popular users on our website."
        para="Whant to spy on someone? Say no more. Here is all the information you need."
      />
      <div className="row">
        <div className="col-md-6 m-auto">
          {users.map((user) => (
            <Singleuser singleUser={user} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Users;
