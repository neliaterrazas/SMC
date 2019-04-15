import React from "react";
import PropTypes from "prop-types";

function FeedMessage(props){
  return (
      <div>
        <p><strong>{props.name}</strong></p>
        <p>{props.message}</p>
        <hr/>
      </div>
   );
}

FeedMessage.propTypes = {
  names: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired
};

export default FeedMessage;
