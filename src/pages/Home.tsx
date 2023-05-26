import { ReactElement } from "react";

import Logo from "../components/Logo";
import Timer from "../components/Timer";
import CardForm from "../components/CardForm";

import Checkout from "../components/Checkout";
import closeIcon from "../assets/svg/close.svg";

const Home = (): ReactElement => {
  return (
    <div className="max-w-5xl mx-auto bg-white w-full px-4 pb-8 pt-10 md:px-12 relative">
      <div className="absolute right-[15px] top-4 cursor-pointer">
        <img src={closeIcon} alt="close icon" width={30} />
      </div>
      <div className="grid grid-cols-12 gap-9">
        <div className="col-span-12 md:col-span-8">
          <div className="flex flex-col items-center gap-5 md:flex-row justify-between">
            <div style={{ alignSelf: "start" }}>
              <Logo />
            </div>
            <Timer />
          </div>
          <CardForm />
        </div>
        <div className="col-span-12 md:col-span-4">
          <Checkout />
        </div>
      </div>
    </div>
  );
};

export default Home;
