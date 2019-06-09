import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
      {/* When we want to show a child component(<CommentDetail>) inside another component(<ApprovalCard>) and want to pass it in as a prop, we just enclose that component (<CommentDetail>) in an opening and closing tag (<ApprovalCard></ApprovalCard>) */}

      <ApprovalCard>
        <div>
          <h4>Warning!</h4>
          Are you sure?
        </div>
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Sam"
          timeAgo="4:45PM"
          text="cool"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Jane"
          timeAgo="6:45PM"
          text="nice"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Alex"
          timeAgo="11:45PM"
          text="ok"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
