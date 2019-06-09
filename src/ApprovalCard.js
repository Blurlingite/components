import React from "react";

const ApprovalCard = props => {
  return (
    <div className="ui card">
      {/* "content" could be another component or other content */}
      {/* When we pass in a child component to another component (like ApprovalCard), that component gets added to props under the field name "children" which is why we say {props.children} to show that child component. If we pass it plain text, it will also be put in the "children" field */}
      <div className="content">{props.children}</div>
      <div className="extra content">
        <div className="ui two buttons">
          <div className="ui basic green button">Approve</div>
          <div className="ui basic red button">Reject</div>
        </div>
      </div>
    </div>
  );
};

export default ApprovalCard;
