import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  const customTheme = {
    background: "#ffffff", // White background
    text: "#000000", // Black text
    // light: ["#eeeeee", "#dddddd", "#cccccc", "#bbbbbb", "#aaaaaa"], // Lighter shades
    dark: ["#333333", "#333333", "#333333", "#333333", "#333333"], // Darker shades with one color
  };

  return (
    <Row className=" py-8 px-4 rounded">
      <h2 className="font-bold text-8xl mt-20 mb-10 w-full text-center md:text-6xl xs:text-4xl md:mb-16">Days I Code</h2>

      <div className="text-center font-semibold">
        <GitHubCalendar
          username="Deepak6o"
          blockSize={15}
          blockMargin={5}
          fontSize={16}
          theme={customTheme}
        />
      </div>
    </Row>
  );
}

export default Github;




