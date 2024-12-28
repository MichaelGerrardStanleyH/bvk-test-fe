import { React, useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useLocation, useNavigate } from "react-router-dom";

import apiMember from "../api/apiMember";
import { data } from "react-router-dom";

export default function CreateMember() {
  const [member, setmember] = useState([]);

  let navigate = useNavigate();

  useEffect(() => {
    apiMember.list().then((data) => {
      setmember(data);
    });
  }, []);

  const [img, setImage] = useState();

  const [dto, setDto] = useState({
    name: "",
    position: "",
    organizationId: 1,
    reportsToId: 0,

  });

  const handleChangeName = (event) => {
    setDto({
      ...dto,
      ["name"]: event.target.value,
    });

    console.log(dto);
  };

  const handleChangePosition = (event) => {
    setDto({
      ...dto,
      ["position"]: event.target.value,
    });

    console.log(dto);
  };

  const handleChangeReportsTo = (event) => {
    setDto({
      ...dto,
      ["reportsToId"]: parseInt(event.target.value),
    });

    console.log(dto);
  };

  const onSubmit = (event) => {
    event.preventDefault();

    const payload = {
      dto: dto,
      image: img,
    };

    console.log(payload);
    

    apiMember
      .createWithImage(payload)
      .then((data) => {
        console.log("data has been saved");
      })
      .catch((error) => console.log(error));

    navigate("/member");
  };

  return (
    <>
      <h1>Create Member Page</h1>

      <div className="container">
        <Form onSubmit={onSubmit}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter name"
              onChange={handleChangeName}
            />
            {/* <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text> */}
          </Form.Group>

          <Form.Group
            className="mb-3"
            controlId="formBasicPosition"
            onChange={handleChangePosition}
          >
            <Form.Label>Position</Form.Label>
            <Form.Control type="text" placeholder="Enter positon" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicReportsTo">
            <Form.Label>Reports To</Form.Label>
            <Form.Select
              aria-label="Default select example"
              style={{ marginBottom: "20px" }}
              onChange={handleChangeReportsTo}
            >
              <option>Select Reports To</option>
              {member.map((obj) => {
                return <option value={obj["id"]}>{obj["name"]}</option>;
              })}
            </Form.Select>
          </Form.Group>

          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Default file input example</Form.Label>
            <Form.Control
              type="file"
              onChange={(e) => setImage(e.target.files[0])}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
}
