import React from "react";
import Button from "./common/Button";

const AboutCasino = () => {
  return (
    <div className="wrapper my-3">
      <div className="relative p-6 bg-deep-navy border border-steel-blue rounded text-white text-sm">
        <h6 className="text-lg">
          CASINO <span className="font-bold">Casino</span>
        </h6>
        <p>
          CASINO is your premier online casino platform, offering a world-class
          gaming experience with hundreds of top-tier casino games, exclusive
          bonuses, and lightning-fast payouts. Whether you're a fan of classic
          slots, live dealer games, table games, or jackpot progressives, CASINO
          delivers everything you need for high-stakes excitement and non-stop
          fun — all from the comfort of your home or mobile device. Join
          thousands of players worldwide who trust CASINO for its secure, fair,
          and licensed gameplay. We partner with the industry's most reputable
          software providers to bring you an unbeatable selection of games with
          stunning graphics, realistic sound effects, and smooth gameplay. From
          roulette and blackjack to immersive live casino tables and high-RTP
          video slots, CASINO is designed to satisfy both new players and
          seasoned pros. At CASINO, new users are greeted with a generous
          welcome bonus and ongoing promotions, cashback offers, free spins, and
          VIP rewards for loyal players. Our platform supports multiple payment
          options, including credit cards, cryptocurrencies, e-wallets, and bank
          transfers, all processed with the highest level of security and
          privacy. Our 24/7 customer support team ensures your questions are
          answered quickly — whenever you need assistance.
        </p>

        <Button
          onClick={() => {}}
          className="uppercase w-[250px] h-10 absolute bottom-5 left-1/2 -translate-x-1/2 rounded-[2px] text-xs font-semibold"
        >
          read more
        </Button>
      </div>
    </div>
  );
};

export default AboutCasino;
