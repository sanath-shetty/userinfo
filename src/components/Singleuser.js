import React from "react";

const Singleuser = (props) => {
  return (
    <div className="card mb-2">
      <div className="card-body">
        <div className="flex-box">
          <h4 className="card-title">{props.singleUser.name}</h4>
        </div>
        <div className="flex-box">
          <div className="left">
            <p className="head">Username :</p>
            <p className="head">Email : </p>
            <p className="head">Street : </p>
            <p className="head">Phone : </p>
            <p className="head">Website : </p>
          </div>
          <div className="right">
            <p className="card-text para">{props.singleUser.username}</p>
            <p className="card-text para">{props.singleUser.email}</p>
            <p className="card-text para">{props.singleUser.address.street}</p>
            <p className="card-text para">{props.singleUser.phone}</p>
            <p className="card-text para">{props.singleUser.website}</p>
          </div>
        </div>

        <a href="#!" className="btn btn-primary">
          Contact Now.
        </a>
      </div>
    </div>
  );
};

export default Singleuser;
