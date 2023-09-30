import React from "react";

type Prop = {
  children?: React.ReactNode;
};

const P = ({ children }: Prop) => {
  return <p>{children}</p>;
};

export default P;
