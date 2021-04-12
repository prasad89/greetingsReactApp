import React from "react";

function App() {
  let currDate = new Date();
  currDate = currDate.getHours();
  let greeting = "";
  const cssStyle = {};

  if (currDate >= 5 && currDate < 12) {
    greeting = "Good Morning";
    cssStyle.color = "green";
  } else if (currDate >= 12 && currDate < 15) {
    greeting = "Good Noon";
    cssStyle.color = "red";
  } else if (currDate >= 15 && currDate < 17) {
    greeting = "Good Afternoon";
    cssStyle.color = "orange";
  } else if (currDate >= 17 && currDate < 20) {
    greeting = "Good Evening";
    cssStyle.color = "gray";
  } else {
    greeting = "Good Night";
    cssStyle.color = "black";
  }

  return (
    <>
      <div>
        <h1>
          Hello, <span style={cssStyle}> {greeting} </span>
        </h1>
      </div>
    </>
  );
}

export default App;