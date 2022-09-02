import React from "react";

import { Outlet } from "react-router-dom";

const Routing = () => {
  return (
    <div>
      <p>Hi this componet is routed by Simple Routing</p>

      <p>
        <Outlet />
      </p>
    </div>
  );
};

export default Routing;
