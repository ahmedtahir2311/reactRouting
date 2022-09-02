import React from "react";

const users = () => {
  return USERS?.map((user) => <p>{user.name}</p>);
};

export default users;

const USERS = [
  {
    name: "typicode",
  },
  {
    name: "typicode",
  },
  {
    name: "typicode",
  },
  {
    name: "typicode",
  },
];
