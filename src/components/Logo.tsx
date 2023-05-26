import { ReactElement } from "react";
import cardIcon from "../assets/svg/card.svg";

const Logo = (): ReactElement => {
  return (
    <div className="flex gap-3 items-center">
      <div className="grid place-items-center bg-[#025EFE] rounded-full p-2">
        <img src={cardIcon} width={25} alt="acecoin logo" />
      </div>
      <p className="text-[#1E2A53] font-light text-[22px]">
        <span className="text-[#1E2A53] font-bold text-[22px]">AceCoin</span>Pay
      </p>
    </div>
  );
};

export default Logo;
