import { Property } from "csstype";
import { ComponentProps, ReactElement } from "react";

type Props = ComponentProps<"input"> & {
  type?: string;
  width?: string;
  align?: string;
  paddingX?: string;
  paddingY?: string;
  leftIcon?: ReactElement;
  rightIcon?: ReactElement;
};

const Input = ({
  leftIcon,
  rightIcon,
  type = "text",
  align = "left",
  width = "auto",
  paddingX = "4rem",
  paddingY = "1rem",
  ...rest
}: Props): ReactElement => {
  return (
    <div style={{ width }} className="relative">
      {leftIcon && (
        <div className="absolute left-4 top-[50%] translate-y-[-50%]">
          {leftIcon}
        </div>
      )}
      <input
        {...{ type }}
        {...rest}
        className={`border-[1px] bg-transparent border-[#F4F5F8] placeholder:font-normal text-[#1E2A53] font-bold rounded w-full focus:outline-0 focus:border-[#5586DC] focus:bg-[#F0F5FF] focus:text-[#5586DC] h-full text-[22px]`}
        style={{
          padding: `${paddingY} ${paddingX}`,
          textAlign: align as Property.TextAlign,
        }}
      />
      {rightIcon && (
        <div className="absolute right-4 top-[50%] translate-y-[-50%]">
          {rightIcon}
        </div>
      )}
    </div>
  );
};

export default Input;
