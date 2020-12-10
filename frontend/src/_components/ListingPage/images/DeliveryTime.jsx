import React from "react";

function Icon({ size = 23 }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} fill="none" viewBox="0 0 23 23">
      <path
        fill="#4865FF"
        fillRule="evenodd"
        d="M11.02 22.922c-6.075 0-11-4.925-11-11 0-6.076 4.925-11 11-11s11 4.925 11 11-4.925 11-11 11zm0-2a9 9 0 100-18 9 9 0 000 18zm5-10h-4v-5h-2v7h6v-2z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default Icon;
