import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row >
      <h1>
        Days I <strong>Code</strong>
      </h1>
      <GitHubCalendar
        username="Deepak6o"
        blockSize={15}
        blockMargin={5}
        color="#c084f5"
        fontSize={16}
      />
    </Row>
  );
}

export default Github;
