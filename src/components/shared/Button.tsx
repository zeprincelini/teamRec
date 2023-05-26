import { ReactElement, ComponentProps } from "react";

type Props = ComponentProps<"button"> & {
  width?: string;
  padding?: string;
  children: ReactElement | string;
};

const Button = ({
  width = "auto",
  padding = "",
  children,
  ...rest
}: Props): ReactElement => {
  return (
    <button
      {...rest}
      style={{ width, padding }}
      className="grid place-items-center bg-[#025EFE] rounded-md py-4 text-white font-bold"
    >
      {children}
    </button>
  );
};

export default Button;
