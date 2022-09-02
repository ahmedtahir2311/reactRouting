import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ComponentC = () => {
  const location = useLocation();

  return (
    <div>
      ComponentC <p> {location.search}</p>
    </div>
  );
};

export default ComponentC;
