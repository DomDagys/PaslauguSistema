import React from "react";

function Icon({ size = 22 }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height="100%"
      fill="none"
      viewBox="0 0 25 22"
    >
      <rect
        width="23.417"
        height="4.563"
        x="0.872"
        y="0.042"
        fill="#000"
        rx="2.282"
      ></rect>
      <rect
        width="23.417"
        height="4.563"
        x="0.872"
        y="8.364"
        fill="#000"
        rx="2.282"
      ></rect>
      <rect
        width="23.417"
        height="4.563"
        x="0.872"
        y="16.686"
        fill="#000"
        rx="2.282"
      ></rect>
    </svg>
  );
}

export default Icon;
