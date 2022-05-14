import React from "react";

// ID based for now due to the lack of options for cursor detection
const Clickable = ({ children, ...props }: any) => {
  return (
    <div id="Clickable" {...props}>
      {children}
    </div>
  );
};

export default Clickable;
