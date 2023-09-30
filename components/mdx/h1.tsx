import React from "react";

type Prop = {
  children?: React.ReactNode;
};

const H1 = ({ children }: Prop) => {
  return <h1>{children}</h1>;
};

export default H1;
