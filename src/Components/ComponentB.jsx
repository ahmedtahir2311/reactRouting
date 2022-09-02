import React, { useEffect } from "react";
import { useLocation, useSearchParams } from "react-router-dom";

const ComponentB = () => {
  const location = useLocation();
  let [searchParm, setSearchParams] = useSearchParams();

  useEffect(() => {
    setSearchParams({ a: "ahmed", b: "tahir" });
  }, []);

  return <div>{searchParm.get("a")} pp</div>;
};

export default ComponentB;
