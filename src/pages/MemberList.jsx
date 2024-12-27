import { React, useEffect, useState } from "react";
import apiMember from "../api/apiMember";
import { data } from "react-router-dom";
import Table from "react-bootstrap/Table";

export default function MemberList() {
  const [member, setmember] = useState([]);

  useEffect(() => {
    apiMember.list().then((data) => {
      setmember(data);
    });
  }, []);

  return (
    <>
      <h1>Member List Page</h1>

      <div className="container">
        <Table striped>
          <thead>
            <tr>
              <th>id</th>
              <th>name</th>
              <th>urlPicture</th>
              <th>pictureName</th>
              <th>position</th>
              <th>reportsTo</th>
            </tr>
          </thead>
          <tbody>
            {member.map((obj) => {
              return (
                <tr>
                  <td>
                    <text>{obj["id"]}</text>
                  </td>
                  <td>
                    <text>{obj["name"]}</text>
                  </td>
                  <td>
                    <text>{obj["urlPicture"]}</text>
                  </td>
                  <td>
                    <text>{obj["pictureName"]}</text>
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
