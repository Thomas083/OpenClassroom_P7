import React, { useState } from "react";


import "./WhatsUpForm.scss";

import ENDPOINTS from "../../api/endpoints";
import { POST } from "../../api/axios";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImages, faPaperPlane } from "@fortawesome/free-solid-svg-icons";

import dayjs from "dayjs";

const WhatsUpForm = ({ className, id, name, placeholder }) => {
  const [inputValue, setInputValue] = useState("");

  const [imageAdded, setImageAdded] = useState(false);
  const [imageName, setImageName] = useState("");

  const inputHandler = (e) => {
    setInputValue(e.target.value);
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    const post = new FormData();
    post.append(
      "author_firstname",
      JSON.parse(localStorage.getItem("user")).user_firstname
    );
    post.append(
      "author_lastname",
      JSON.parse(localStorage.getItem("user")).user_lastname
    );
    post.append("message", inputValue);
    post.append("date_creation", dayjs().format('YYYY-MM-DD HH:MM:ss'));
    post.append("post_image", document.getElementById("post_image").files[0]);
    post.append("user_id", JSON.parse(localStorage.getItem("user")).user_id);

    // Requête POST axios
     await POST(ENDPOINTS.CREATE_POST, post);

    // this code is just for MVP, it will be upgrade in final version
    document.location.reload();
  };


    const imageAddedToPost = (e) => {
      setImageName(e.target.value.slice(12));
      setImageAdded(true);
    };


  return (
    <form
      className={className}
      onSubmit={submitHandler}
      method="POST"
      action="/api/post"
      encType="multipart/form-data"
    >
      <input
        className="testt"
        type="text"
        id={id}
        name={name}
        placeholder={placeholder}
        required
        value={inputValue}
        onChange={inputHandler}
      />
      <div className="icons_container">
        <input
          type="file"
          name="post_image"
          id="post_image"
          className="icons_container__add_file"
          onInput={imageAddedToPost}
        />
        <div className="image_name">{imageName}</div>
        <label htmlFor="post_image">
          <FontAwesomeIcon icon={faImages} color={imageAdded ? "#f57251" : null} />
        </label>
        <button type="submit" className="icons_container__submit">
          <FontAwesomeIcon icon={faPaperPlane} />
        </button>
      </div>
    </form>
  );
};

export default WhatsUpForm;
