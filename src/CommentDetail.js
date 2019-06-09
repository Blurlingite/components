import React from "react";

const CommentDetail = props => {
  return (
    <div className="comment">
      <a href="/" className="avatar">
        {/* faker.image.avatar() will generate a fake avatar that it gets from the faker we imported above (See github repo of faker) */}
        <img alt="avatar" src={props.avatar} />
      </a>

      <div className="content">
        <a href="/" className="author">
          {props.author}
        </a>

        <div className="metadata">
          <span className="date">Today at {props.timeAgo}</span>
        </div>

        <div className="text">{props.text}</div>
      </div>
    </div>
  );
};

CommentDetail.propTypes = {};
// export this file so other files can use it
export default CommentDetail;
