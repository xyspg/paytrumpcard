import React from "react";
import ApplePayDemo from "./ApplePayDemo";
import GoldCardForm from "./GoldCardForm";

const TrumpGoldCard = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen bg-black text-white">
        <div
          style={{
            position: "absolute",
            left: "-9999px",
            opacity: 0,
            pointerEvents: "none",
          }}
        ></div>
        
        <main className="flex-grow flex flex-col items-center justify-center px-4 md:px-8 pt-20 md:pt-30 lg:pt-50">
          <div className="w-full md:max-w-6xl mx-auto flex flex-col items-center">
            <div
              className="relative flex justify-center items-center gap-8 md:gap-32 lg:gap-48 xl:gap-20"
              style={{ opacity: 1, transform: "none" }}
            >
              <div className="flex flex-col items-center">
                <img
                  alt="USCIS Seal"
                  loading="lazy"
                  width={50}
                  height={50}
                  decoding="async"
                  data-nimg="1"
                  className="md:w-20 md:h-20"
                  style={{ color: "transparent" }}
                  src="/seal.svg"
                />
              </div>
              <img
                alt="US Government Seal"
                loading="lazy"
                width={100}
                height={100}
                decoding="async"
                data-nimg="1"
                className="md:w-[162px] md:h-[162px]"
                style={{ color: "transparent" }}
                src="/gold.png"
              />
              <div className="flex flex-col items-center">
                <img
                  alt="Department of Commerce Seal"
                  loading="lazy"
                  width={50}
                  height={50}
                  decoding="async"
                  data-nimg="1"
                  className="md:w-20 md:h-20"
                  style={{ color: "transparent" }}
                  src="/dhs.svg"
                />
              </div>
            </div>
            <div
              className="px-4 py-6"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <h1
                className="text-6xl md:text-8xl xl:text-9xl font-serif text-center tracking-tight px-4"
                style={{
                  background:
                    "linear-gradient(to top, rgb(255, 227, 153) 0%, rgb(254, 247, 229) 39%) 0% 0% / 100% 1.2em repeat-y text",
                  WebkitTextFillColor: "transparent",
                  fontFamily: "Instrument Serif, serif",
                  fontWeight: 500,
                  letterSpacing: "-0.05em",
                  lineHeight: 1.1,
                  maxWidth: 650,
                  opacity: 1,
                  transform: "none",
                }}
              >
                The Trump Card
                <br />
                is Coming.
              </h1>
            </div>
            <p
              className="mb-4 md:mb-8 max-w-xl tracking-wide text-center text-lg md:text-2xl md:px-4"
              style={{ fontFamily: "Instrument Sans, sans-serif", opacity: 1 }}
            >
              Payment is now open. Enter your information below to get your Trump Card.
            </p>
          </div>
          <div className="my-[100px] lg:my-[140px] xl:px-[366px] px-6">
            <img
              alt="Trump Card"
              loading="lazy"
              width={634.56}
              height={399.39}
              decoding="async"
              data-nimg="1"
              style={{ color: "transparent" }}
              src="/card.svg"
            />
          </div>
          <GoldCardForm />
        </main>
        <div className="relative w-full mt-auto pt-20">
          <footer className="w-full bg-black border-t border-[rgba(255,255,255,0.1)] py-[64px]">
            <div className="hidden md:flex mx-auto px-8 items-center justify-between">
              <div className="flex-1 flex items-center gap-2">
                <img
                  alt="US Flag"
                  loading="lazy"
                  width={20}
                  height={12}
                  decoding="async"
                  data-nimg="1"
                  style={{ color: "transparent" }}
                  src="/usflag.svg"
                />
                <span className="text-sm text-[#fafafa]/50">
                  An unofficial website of the United States government
                </span>
              </div>
              <div className="flex-shrink-0">
                <img
                  alt="The Trump Card"
                  loading="lazy"
                  width={247}
                  height={44}
                  decoding="async"
                  data-nimg="1"
                  style={{ color: "transparent" }}
                  src="/ttc.svg"
                />
              </div>
              <div className="flex-1 flex justify-end">
                <a
                  href="mailto:trumpcard@doc.gov"
                  className="text-sm text-[#fafafa]/50 hover:text-white transition-colors"
                >
                  trumpcard@doc.gov
                </a>
              </div>
            </div>
            <div className="block md:hidden px-4 space-y-4">
              <div className="flex flex-col items-center gap-4">
                <img
                  alt="The Trump Card"
                  loading="lazy"
                  width={180}
                  height={32}
                  decoding="async"
                  data-nimg="1"
                  style={{ color: "transparent" }}
                  src="/ttc_footer.png"
                />
                <div className="flex items-center gap-2">
                  <img
                    alt="US Flag"
                    loading="lazy"
                    width={16}
                    height={10}
                    decoding="async"
                    data-nimg="1"
                    style={{ color: "transparent" }}
                    src="/usflag.svg"
                  />
                  <span className="text-xs text-[#fafafa]/50 text-center">
                    An unofficial website of the United States government
                  </span>
                </div>
                <a
                  href="mailto:trumpcard@doc.gov"
                  className="text-xs text-[#fafafa]/50 hover:text-white transition-colors"
                >
                  trumpcard@doc.gov
                </a>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default TrumpGoldCard;

