import React from "react";
import Button from "react-bootstrap/Button";
import { Navigate, useNavigate } from "react-router-dom";

import apiMember from "../api/apiMember";

export default function Main() {
  let navigate = useNavigate();

  const onClickList = () => {
    // navigate("/main", { bjir: { id: 1 } });
    navigate("/member", { bjir: { id: 1 } });
  };

  const onClickCreate = () => {
    navigate("/create", { bjir: { id: 1 } });
  };

  return (
    <>
      <h1>Main Page</h1>

      <ul
        className="listButton"
        style={{ listStyle: "none", margin: "0", padding: "0" }}
      >
        <li>
          <Button
            variant="primary"
            style={{ marginBottom: "10px" }}
            onClick={onClickList}
          >
            See all member
          </Button>
        </li>
        <li>
          <Button variant="primary" onClick={onClickCreate}>
            Create Member
          </Button>
        </li>
      </ul>
    </>
  );
}
