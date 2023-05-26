import { ChangeEvent, FormEvent, ReactElement, useState } from "react";

import Input from "../components/shared/Input";
import Button from "../components/shared/Button";

import { strip } from "../utils";
import penIcon from "../assets/svg/pencil.svg";
import checkmark from "../assets/svg/checkmark.svg";
import dashboard from "../assets/svg/dashboard.svg";
import mastercard from "../assets/svg/mastercard.svg";

const CardForm = (): ReactElement => {
  const [cvv, setCvv] = useState<string>("");
  const [year, setYear] = useState<string>("");
  const [month, setMonth] = useState<string>("");
  const [cardNo, setCardNo] = useState<string>("");

  const onCardChange = (e: ChangeEvent<HTMLInputElement>) => {
    const no = e.target.value;
    const formattedValue = strip(no);
    const groups = formattedValue.match(/.{1,4}/g);
    const formattedNo = groups?.join(" - ") || "";

    if (formattedNo.replace(/-/g, "").length === 25) {
      return;
    }

    setCardNo(formattedNo);
  };

  const onExpiry = (e: ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    const name = e.target.name;
    const no = strip(val);
    const formatted = no.slice(0, 2);
    name === "month" ? setMonth(formatted) : setYear(formatted);
  };

  const onCvvChange = (e: ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    const no = strip(val);
    const formatted = no.slice(0, 3);
    setCvv(formatted);
  };

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const payload = { cvv, month, year, cardNo };
    console.log(payload);
  };

  return (
    <form className="mt-7 w-full grid gap-8" onSubmit={submit}>
      <div className="grid gap-4">
        <div className="flex justify-between items-center">
          <div className="grid gap-2">
            <p className="text-[#1E2A53] text-lg font-bold">Card Number</p>
            <p className="text-[#CCCFDA] text-sm">
              Enter the 16-digit card number on the card
            </p>
          </div>
          <div className="flex items-center gap-3 cursor-pointer">
            <img src={penIcon} alt="edit icon" width={20} />
            <p className="text-[#02A0EC] font-bold">Edit</p>
          </div>
        </div>
        <Input
          placeholder="2412  -  7512  -  3412  -  3456"
          value={cardNo}
          onChange={onCardChange}
          leftIcon={<img src={mastercard} width={30} alt="master card icon" />}
          rightIcon={<img src={checkmark} width={30} alt="check mark icon" />}
        />
      </div>
      <div className="grid gap-4">
        <div className="flex flex-col gap-3 md:flex-row md:justify-between md:items-center">
          <div className="grid gap-2 flex-1">
            <p className="text-[#1E2A53] text-lg font-bold">CVV Number</p>
            <p className="text-[#CCCFDA] text-sm">
              Enter the 3 or 4 digit number on the card
            </p>
          </div>
          <div className="flex-1">
            <Input
              placeholder="Enter CVV"
              onChange={onCvvChange}
              value={cvv}
              align="center"
              paddingX="1rem"
              rightIcon={
                <img src={dashboard} width={30} alt="dashboard icon" />
              }
            />
          </div>
        </div>
      </div>
      <div className="grid gap-4">
        <div className="flex flex-col gap-3 md:flex-row md:justify-between md:items-center">
          <div className="grid gap-2 flex-1">
            <p className="text-[#1E2A53] text-lg font-bold">Expiry Date</p>
            <p className="text-[#CCCFDA] text-sm">
              Enter the expiry date on the card
            </p>
          </div>
          <div className="flex items-center gap-2 flex-1">
            <Input
              placeholder="09"
              align="center"
              paddingX="1rem"
              name="month"
              value={month}
              onChange={onExpiry}
            />
            <p className="font-bold text-[#1E2A53]">/</p>
            <Input
              placeholder="22"
              align="center"
              paddingX="1rem"
              name="year"
              value={year}
              onChange={onExpiry}
            />
          </div>
        </div>
      </div>
      <div className="grid gap-4">
        <div className="flex flex-col gap-3 md:flex-row md:justify-between md:items-center">
          <div className="grid gap-2 flex-1">
            <p className="text-[#1E2A53] text-lg font-bold">Password</p>
            <p className="text-[#CCCFDA] text-sm">
              Enter your Dynamic password
            </p>
          </div>
          <div className="flex-1">
            <Input
              placeholder="Enter password"
              type="password"
              paddingX="1rem"
              rightIcon={
                <img src={dashboard} width={30} alt="dashboard icon" />
              }
            />
          </div>
        </div>
      </div>
      <Button>Pay Now</Button>
    </form>
  );
};

export default CardForm;
