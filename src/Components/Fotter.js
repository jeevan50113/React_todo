import React from "react";

export const Fotter = () => {
  let FotterStyle = {
    position: "relative",
    top: "70vh",
    width: "100%",
  };

  return (
    <div className="bg-dark text-light" style={FotterStyle}>
      <p className="text-center py-2">Copyright &copy; Todo_jeevan.com</p>
    </div>
  );
};
