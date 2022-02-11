import React from "react";
import { BoxesLoader } from "react-awesome-loaders";

export const Loader = () => {
  return (
    <div className="flex justify-center items-center ">
      <BoxesLoader
        boxColor={"#6366F1"}
        style={{ marginBottom: "20px" }}
        desktopSize={"128px"}
        mobileSize={"80px"}
      />
    </div>
  );
};
