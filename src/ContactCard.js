import React from "react";

const ContactCard = (props) => {
  const [showAge, setShowAge] = React.useState(false);
  return (
    <>
      <div className="contact-card">
        <img src={props.avatar} alt="profile" />
        <div className="user-details">
          <p>Name : {props.name}</p>
          <p>Email: {props.email}</p>
          {/* {showAge === true ? <p>Age: 25</p> : null} */}
          <button onClick={() => setShowAge(!showAge)}>Toggle Age</button>
          {showAge && <p>{props.age}</p>}
        </div>
      </div>
    </>
  );
};
export default ContactCard;
