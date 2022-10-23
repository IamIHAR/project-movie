import { MutatingDots } from "react-loader-spinner";
import React from "react";

function Spinner() {
  return (
    <div>
      <MutatingDots
        height="80"
        width="80"
        radius="9"
        color="green"
        ariaLabel="three-dots-loading"
      />
    </div>
  );
}

export default Spinner;
