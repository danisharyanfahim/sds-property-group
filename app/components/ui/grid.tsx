import React from "react";

const Grid = ({ children }: { children: React.ReactNode }) => {
  return <ol className="grid">{children}</ol>;
};

export default Grid;
