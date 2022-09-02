import React from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";

const CoponentA = () => {
  const navigate = useNavigate();
  let [, setSearchParams] = useSearchParams();

  const clickhandler = () => {
    navigate("/dashboard/component-b", {
      state: { a: "ahmed" },
    });
  };
  return (
    <div>
      CoponentA
      <Link to={"/dashboard/component-b"}>
        AHMED this will route to Component B
      </Link>
      <button onClick={clickhandler}>Click me to go on component c</button>
    </div>
  );
};

export default CoponentA;
