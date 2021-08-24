import React from "react";
import MyButton from "./UI/button/MyButton";

const PostItem = (props) => {
    console.log(props)
  return (
    <div>
      <div className="post">
        <div className="post___content">
          <strong> {props.number}. {props.post.title} </strong>
          <div>{props.post.body}</div>
        </div>
        <div className="post___btn">
          <MyButton> Delete </MyButton>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
