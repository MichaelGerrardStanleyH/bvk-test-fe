import { React, useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import apiMember from "../api/apiMember";
import Image from "react-bootstrap/Image";

export default function MemberDetails(props) {
  let navigate = useNavigate();

  let { state } = useLocation();

  console.log(state);

  const [member, setMember] = useState({});

  
  useEffect(() => {
      apiMember.getById(state.memberId).then((data) => {
        //   setMember(data);
          setMember({
              ...data,
              ["imageData"]: "data:image/jpeg;base64," + data["imageData"],
            });
            
        });
    }, []);

    console.log(member);
    

  return (
    <>
      <h1>Member Detail</h1>
      <div className="container">
        <p>Name: {member["name"]}</p>
        <p>Postion: {member["position"]}</p>
        <p>
          Reports To: {member["reportsTo"] ? member["reportsTo"]["name"] : "-"}
        </p>
        {/* <p>Picture: {member["urlPicture"]}</p> */}
        <p>Picture: </p>

        <img src={member["imageData"]} />

        {/* {member["imageData"] ? (
          <Image src={member["imageData"]} rounded />
        ) : (
            <Image
            src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
            rounded
            />
        )}
        <Image src={'data:image/jpeg;base64' +member["imageData"]} rounded /> 
        <Image src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" rounded /> */}
      </div>
    </>
  );
}