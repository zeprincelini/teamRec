import { ReactElement } from "react";
import apple from "../assets/svg/mac.svg";
import chipIcon from "../assets/svg/chip.svg";
import wifiIcon from "../assets/svg/wifi.svg";
import receipt from "../assets/svg/receipt.svg";
import mastercard from "../assets/svg/mastercard.svg";

const Checkout = (): ReactElement => {
  return (
    <div className="relative">
      <div className="absolute w-[20px] h-[5px] bg-[#025EFE] left-[50%] translate-x-[-50%]"></div>
      <div className="bg-white shadow rounded-[20px] w-[70%] py-8 px-6 mx-auto relative z-[4]">
        <div className="flex justify-between items-center">
          <img src={chipIcon} width={40} alt="card chip icon" />
          <img src={wifiIcon} width={30} alt="wifi icon" />
        </div>
        <div className="grid gap-3 mt-20">
          <p className="font-semibold text-[#1E2A53]">Jonathan Michael</p>
          <p className="font-bold text-[#1E2A53]">**** 3456</p>
        </div>
        <div className="flex justify-between mt-5">
          <p className="font-bold text-[#1E2A53]">09/22</p>
          <img src={mastercard} alt="mastercard icon" width={30} />
        </div>
      </div>
      <div className="absolute w-full bg-[#E9EDF1] px-6 rounded-[20px] pt-[250px] pb-8 z-[1] top-[100px]">
        <div className="relative">
          <div className="flex justify-between">
            <div className="grid gap-3">
              <p className="text-[#B3BACB]">Company</p>
              <p className="text-[#B3BACB]">Order Number</p>
              <p className="text-[#B3BACB]">Product</p>
              <p className="text-[#B3BACB]">VAT (20%)</p>
            </div>
            <div className="grid gap-3 text-right">
              <div className="flex gap-2 items-center justify-end">
                <div className="rounded-full grid place-items-center p-1 bg-[#1E2A53]">
                  <img src={apple} alt="apple logo" width={10} />
                </div>
                <p className="font-bold text-[#1E2A53]">Apple</p>
              </div>
              <p className="font-bold text-[#1E2A53]">1266201</p>
              <p className="font-bold text-[#1E2A53]">MacBook Air</p>
              <p className="font-bold text-[#1E2A53]">$100.00</p>
            </div>
          </div>
          <>
            <div className="absolute w-[30px] h-[30px] bg-transparent md:bg-white rounded-full bottom-[65px] right-[-35px]"></div>
            <div className="absolute w-[30px] h-[30px] bg-transparent md:bg-white rounded-full left-[-35px]"></div>
            <div className="h-[1px] border-dashed border-[0.5px] border-[#D8DDE5] my-4"></div>
          </>
          <div className="flex mt-5 justify-between items-center">
            <div className="grid gap-2">
              <p className="text-[#B3BACB] font-bold">You have to Pay</p>
              <div className="flex">
                <p className="text-[#1E2A53] text-xl font-bold">
                  549
                  <span className="text-[smaller] font-semibold">
                    .99
                    <span className="text-[#B3BACB] font-semibold"> USD</span>
                  </span>
                </p>
              </div>
            </div>
            <img src={receipt} alt="receipt icon" className="w-8 h-8" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
