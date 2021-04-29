import React from "react";
import "../Styles/RecentDonations.css"

const RecentDonations = (props) => {
  const {amount, caption, id, name} = props;
  return (
    <heading>
     <h5> {name} donated ${amount} </h5>
     <p> {caption} </p>
    </heading >
  );
};

export default RecentDonations;
