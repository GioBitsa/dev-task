import React from "react";
import Button from "./common/Button";

const walletsArray = [
  {
    id: 1,
    src: "/icons/crypto-advert/visa.svg",
  },
  {
    id: 2,
    src: "/icons/crypto-advert/mastercard.svg",
  },
  {
    id: 3,
    src: "/icons/crypto-advert/i-pay.svg",
  },
  {
    id: 4,
    src: "/icons/crypto-advert/g-pay.svg",
  },
  {
    id: 5,
    src: "/icons/crypto-advert/neteller.svg",
  },
  {
    id: 6,
    src: "/icons/crypto-advert/skrill.svg",
  },
  {
    id: 7,
    src: "/icons/crypto-advert/revolut.svg",
  },
];

const CryptoAdvert = () => {
  return (
    <div className="wrapper my-3">
      <div className="p-6 bg-deep-navy border border-steel-blue rounded flex flex-col items-center justify-between gap-2.5 lg:flex-row">
        <h4 className="text-xl text-white font-bold text-center lg:text-left">
          You don&apos;t have Crypto? <br />
          No problem.
        </h4>
        <div className="flex items-center justify-center flex-wrap lg:flex-nowrap">
          {walletsArray.map((item) => (
            <img key={item.id} src={item.src} alt={`wallet - ${item.id}`} />
          ))}
        </div>
        <Button
          onClick={() => {}}
          className="w-full rounded-[3px] font-bold lg:max-w-[175px]"
        >
          BUY NOW
        </Button>
      </div>
    </div>
  );
};

export default CryptoAdvert;
