import { React, useEffect, useState } from "react";
import apiMember from "../api/apiMember";
import { data } from "react-router-dom";
import Table from "react-bootstrap/Table";
import { Navigate, useNavigate } from "react-router-dom";
import HeaderMain from "../component/headermain/HeaderMain";

export default function MemberList() {
  let navigate = useNavigate();

  const [member, setmember] = useState([]);

  useEffect(() => {
    apiMember.list().then((data) => {
      setmember(data);
    });
  }, []);

  const onClickDetail = (id) => () => {
    navigate("details", { state: { memberId: id } });
  };

  const onClickBanner = () =>{
    navigate(-1);
  }


  

  return (
    <>
      <HeaderMain onClick={onClickBanner} />

      <div className="container">
        <h1>Member List Page</h1>
        <Table striped>
          <thead>
            <tr>
              <th>id</th>
              <th>name</th>
              <th>position</th>
              <th>reportsTo</th>
            </tr>
          </thead>
          <tbody>
            {member.map((obj) => {
              return (
                <tr onClick={onClickDetail(obj["id"])}>
                  <td>
                    <text>{obj["id"]}</text>
                  </td>
                  <td>
                    <text>{obj["name"]}</text>
                  </td>
                  <td>
                    <text>{obj["position"]}</text>
                  </td>
                  <td>
                    {obj["reportsTo"] ? (
                      <text>{obj["name"]}</text>
                    ) : (
                      <text>-</text>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </>
  );
}
