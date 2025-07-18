import React from "react";

const FacebookLogo = ({currentColor}) => {
  return (
    <svg
      aria-label="Log in with Facebook"
      fill={`${currentColor}`}
      height="20"
      role="img"
      viewBox="0 0 16 16"
      width="20"
    >
      <title>Log in with Facebook</title>
      <g clip-path="">
        <path
          d="M8 0C3.6 0 0 3.6 0 8c0 4 2.9 7.3 6.8 7.9v-5.6h-2V8h2V6.2c0-2 1.2-3.1 3-3.1.9 0 1.8.2 1.8.2v2h-1c-1 0-1.3.6-1.3 1.3V8h2.2l-.4 2.3H9.2v5.6C13.1 15.3 16 12 16 8c0-4.4-3.6-8-8-8Z"
          fill={currentColor}
        ></path>
      </g>
      <defs>
        <clipPath id="a">
          <rect fill={currentColor} height="16" width="16"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

export default FacebookLogo;
