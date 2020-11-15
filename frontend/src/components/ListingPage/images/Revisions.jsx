import React from "react";

function Icon({ size = 21 }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} fill="none" viewBox="0 0 21 21">
      <path
        fill="#4865FF"
        fillRule="evenodd"
        d="M10.02 2.96c2.394 0 4.447 1.08 5.807 3H12.02v2h7v-7h-2v3.271c-1.725-2.088-4.195-3.27-7-3.27-5.523 0-10 4.477-10 10h2a8 8 0 018-8zm0 16c-2.393 0-4.446-1.078-5.807-3H8.02v-2h-7v7h2v-3.27c1.725 2.088 4.196 3.27 7 3.27 5.523 0 10-4.477 10-10h-2a8 8 0 01-8 8z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default Icon;
