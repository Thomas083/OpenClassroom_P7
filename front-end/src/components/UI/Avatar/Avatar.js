import React, { useState } from "react";
import "./Avatar.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-solid-svg-icons";

const Avatar = ({ className, editable, id }) => {
  return (
    <div className={className}>
      <img src="/imgs/profile-imgs/mee.png" alt="profile_picture" />
      {editable && <input type="file" name="image" id={id} /> }
      {editable && <label for="image"> <FontAwesomeIcon icon={faImage} className="profile_picture__change" /> </label>}
    </div>
  );
};

export default Avatar;