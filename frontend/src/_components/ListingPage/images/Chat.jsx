import React from "react";

function Icon({ size = 22 }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} fill="none" viewBox="0 0 22 21">
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M19.327.074H2.794c-1.137 0-2.067.93-2.067 2.067v18.6l4.134-4.134h14.466c1.136 0 2.066-.93 2.066-2.066V2.14c0-1.137-.93-2.067-2.066-2.067zm0 14.467H4.86l-2.067 2.066V2.141h16.533v12.4zM7.96 7.308H5.894v2.066H7.96V7.308zm2.067 0h2.067v2.066h-2.067V7.308zm6.2 0H14.16v2.066h2.067V7.308z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default Icon;
