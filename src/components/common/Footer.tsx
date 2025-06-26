import {
  footerLegalLogos,
  footerLinksArray,
  footerPayments,
} from "@/constants";
import useIsMobile from "@/hooks/useIsMobile";
import Link from "next/link";
import React from "react";

const Footer = () => {
  const isMobile = useIsMobile(1023);
  return (
    <div className="w-full bg-deep-navy">
      <div className="w-full wrapper py-6 flex flex-col gap-5">
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-[auto] lg:grid-flow-col">
          <div className="col-span-2 border-b border-[#282F48] pb-4 flex flex-col gap-3 lg:col-auto lg:border-none lg:pb-0">
            <div className="w-20 h-10 rounded-md bg-steel-blue" />
            <p className="text-sm text-cadet-blue lg:max-w-[300px]">
              Strike it rich at CASINO! Experience heart-pounding action with
              massive jackpots, fast payouts, and VIP treatment that keeps
              champions coming back. Join thousands of winners today - your
              fortune awaits!
            </p>
          </div>

          {footerLinksArray.map((item, index) => (
            <ul
              key={item.id}
              className={`w-[150px] flex flex-col gap-3 
                ${
                  index % 2 === 0 ? "mr-auto sm:mx-auto" : "ml-auto sm:mx-auto"
                } 
                lg:mx-0`}
            >
              <li className="text-white text-md font-bold">{item.title}</li>

              {item.links.map((singleLink) => (
                <li key={singleLink.id}>
                  <Link
                    href={singleLink.href}
                    className="text-sm text-pastel-blue"
                  >
                    {singleLink.name}
                  </Link>
                </li>
              ))}
            </ul>
          ))}

          <div className="flex flex-col items-end pr-[20px] gap-1 sm:pr-0 sm:items-center lg:hidden">
            <img
              src="/images/afiliate-1.png"
              alt="afiliate 1"
              className="w-[130px] h-full object-contain"
            />
            <img
              src="/images/afiliate-2.png"
              alt="afiliate 2"
              className="w-[130px] h-full object-contain"
            />
          </div>
        </div>
        <div className="flex items-center justify-center gap-2.5 py-6 border-y border-[#282F48] flex-wrap">
          {footerPayments.map((item) => (
            <img
              key={item.id}
              src={item.icon}
              alt="payments"
              className="w-auto"
            />
          ))}
        </div>
        <div className="relative text-center text-xs text-slate-gray flex flex-col gap-5">
          <div
            className={`flex items-center gap-2.5 ${
              isMobile
                ? "justify-center border-b border-[#282F48] pb-6"
                : "absolute top-0 right-0"
            }`}
          >
            {footerLegalLogos.map((item) => (
              <img key={item.id} src={item.icon} alt={item.name} />
            ))}
          </div>
          <>
            <p className="text-sm">
              © {new Date().getFullYear()}{" "}
              <span className="text-white">CASINO.COM.</span> All Rights
              Reserved.
            </p>
            <p className="text-sm">
              GAMBLING CAN BE ADDICTIVE. PLAY RESPONSIBLY!{" "}
            </p>
            <p>
              CASINO casino is operated by CASINO B.V., ensuring a secure and
              fair gaming environment for all players. We strictly adhere to all
              regulatory requirements to maintain transparency and fairness. Our
              commitment to integrity and ethical practices is at the core of
              our business. We employ advanced security measures, including SSL
              encryption and robust firewall systems, to protect your personal
              and financial information. Promoting responsible gaming is a
              priority at CASINO Casino. We provide tools and resources to help
              you gamble responsibly. We offer a variety of secure payment
              methods and ensure seamless transactions. All payment processes
              are encrypted and compliant with industry standards. Our customer
              support team is available 24/7 to assist you with any questions or
              issues you may have. Contact us via Live Chat, Email, or Phone for
              prompt and professional assistance.
            </p>
          </>
        </div>
      </div>
    </div>
  );
};

export default Footer;
