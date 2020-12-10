import React from "react";

function Icon({ size = 12 }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      fill="none"
      viewBox="0 0 20 12"
    >
      <path
        stroke="#fff"
        strokeWidth="3"
        d="M1.542 1.208l8.546 8.546 8.547-8.546"
      ></path>
    </svg>
  );
}

export default Icon;
