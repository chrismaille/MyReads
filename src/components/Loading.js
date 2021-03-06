import React from "react";

import Spinner from "react-spinkit";

const Loading = () => (
  <div className="overlay-content">
    <div className="wrapper">
      <Spinner name="ball-grid-beat" color="green" fadeIn="none" />
    </div>
  </div>
);

export default Loading;
