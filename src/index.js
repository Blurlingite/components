import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";

const App = () => {
  return (
    <div className="ui container comments">
      <div className="comment">
        <a href="/" className="avatar">
          {/* faker.image.avatar() will generate a fake avatar that it gets from the faker we imported above (See github repo of faker) */}
          <img alt="avatar" src={faker.image.avatar()} />
        </a>

        <div className="content">
          <a href="/" className="author">
            Sam
          </a>

          <div className="metadata">
            <span className="date">Today at 6PM</span>
          </div>

          <div className="text">Nice blog post!</div>
        </div>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
