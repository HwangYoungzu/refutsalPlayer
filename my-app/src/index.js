import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link, Switch, useParams } from "react-router-dom";
import "./index.css";
import Video from "./player";

window.addEventListener("scroll", function () {
  console.log(window.pageYOffset + "px");
  //console.log(window.innerHeight  + 'px')
  if (window.pageYOffset < window.innerHeight * 0.7) window.scrollTo(0, 0);
  else if (window.pageYOffset < window.innerHeight * 1.4) window.scrollTo(0, window.innerHeight);
  else window.scrollTo(0, window.innerHeight * 2);
});

const ReactPlayerUrl = () => {
  let { timeStamp } = useParams();
  console.log(timeStamp);
  const newUrl = "videos/210530_left.MP4#t=" + timeStamp;
  console.log(newUrl);
  return <Video url={newUrl} playerName="leftCamera" isWIP={false} />;
};

ReactDOM.render(
  <div style={{ overflow: "hidden" }}>
    <Router>
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/t/3">time</Link>
        </li>
        <li>
          <Link to="/users">users</Link>
        </li>
      </ul>
      <Switch>
        <Route path="/home">
          <Video url="videos/210530_left.MP4" playerName="leftCamera" isWIP={false} />
        </Route>
        <Route path="/t/:timeStamp" children={<ReactPlayerUrl />} />
        <Route path="/users">
          <div>something</div>
        </Route>
      </Switch>
    </Router>
  </div>,
  document.getElementById("root")
);
