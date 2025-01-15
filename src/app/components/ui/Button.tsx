"use client";

import { IButton } from "@/app/types/Types";

const Button = ({
  text = "",
  className = "",
  onclick = () => {},
  title = "",
}: IButton) => {
  return (
    <button
      className={`${className} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
      onClick={onclick}
      title={title}
      aria-label={text}
      type="button"
    >
      {text}
    </button>
  );
};
export default Button;
