"use client";

import { IButton } from "@/app/types/Types";

const Button = ({ text, className, onclick, title }: IButton) => {
  return (
    <button className={className} onClick={onclick} title={title}>
      {text}
    </button>
  );
};
export default Button;