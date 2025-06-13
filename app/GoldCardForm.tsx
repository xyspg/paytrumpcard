'use client'
import ApplePayDemo from './ApplePayDemo'

const GoldCardForm = () => {
  return (
    <>
    <div
            className="max-w-8xl overflow-hidden flex items-start justify-center mx-auto flex flex-col items-center"
            style={{
              minHeight: 600,
              transition: "min-height 0.5s ease-in-out",
            }}
          >
            <form
              className="w-full space-y-2"
              style={{ opacity: 1, transform: "none" }}
            >
              <div
                className="flex flex-wrap items-center gap-1 md:gap-2 text-lg font-serif w-full"
                style={{ opacity: 1, transform: "none" }}
              >
                <span
                  className="text-4xl md:text-5xl lg:text-7xl font-serif md:pr-2 flex-shrink-0"
                  style={{
                    fontFamily: "Instrument Serif, serif",
                    fontWeight: 500,
                    lineHeight: 1.2,
                  }}
                >
                  My name is
                </span>
                <input
                  type="text"
                  placeholder="(First, Last)"
                  className="bg-transparent border-0 border-b-2 border-[rgba(255,255,255,0.3)] outline-none px-0 flex-1 min-w-[300px] md:min-w-[600px] focus:border-[rgba(255,255,255,0.6)] transition-colors text-4xl md:text-5xl lg:text-7xl py-2 md:py-3 placeholder:text-[rgba(255,255,255,0.4)]"
                  style={{
                    fontFamily: "Instrument Serif, serif",
                    fontWeight: 500,
                    lineHeight: 1.2,
                  }}
                  value=""
                  onChange={(e) => {
                    console.log(e.target.value);
                  }}
                />
              </div>
              <div
                className="flex flex-wrap items-center gap-3 md:gap-2 text-4xl font-serif"
                style={{ opacity: 1, transform: "none" }}
              >
                <span
                  className="text-4xl md:text-5xl lg:text-7xl font-serif md:pr-2"
                  style={{
                    fontFamily: "Instrument Serif, serif",
                    fontWeight: 500,
                    lineHeight: 1.2,
                    maxWidth: "100%",
                  }}
                >
                  from
                </span>
                <div
                  className="relative mobile-dropdown"
                  style={{
                    fontFamily: "Instrument Sans, sans-serif",
                    color: "rgba(255,255,255,0.6)",
                    verticalAlign: "middle",
                  }}
                >
                  <button
                    type="button"
                    className="border border-[rgba(255,255,255,0.2)] pl-4 md:pl-8 pr-4 md:pr-8 py-3 md:py-4 outline-none w-full max-w-[280px] sm:max-w-[320px] md:w-[340px] appearance-none focus:border-[rgba(255,255,255,0.4)] transition-colors text-base md:text-lg lg:text-xl align-middle text-left flex items-center justify-between bg-transparent rounded-4xl"
                    style={{
                      fontFamily: "Instrument Sans, sans-serif",
                      color: "rgba(255,255,255,0.6)",
                      verticalAlign: "middle",
                    }}
                  >
                    <span className="flex-1">Region</span>
                    <svg
                      className="w-3 h-2 md:w-3 md:h-2 transition-transform duration-200 flex-shrink-0 ml-2 "
                      fill="none"
                      stroke="rgba(255,255,255,0.6)"
                      strokeWidth={1.5}
                      viewBox="0 0 12 8"
                    >
                      <path
                        d="M1 1.5L6 6.5L11 1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </button>
                </div>
                <span
                  className="text-4xl md:text-5xl lg:text-7xl font-serif md:pl-2"
                  style={{
                    fontFamily: "Instrument Serif, serif",
                    fontWeight: 500,
                    lineHeight: 1.2,
                    maxWidth: "100%",
                  }}
                >
                  and I&apos;m interested
                </span>
              </div>
              <div
                className="flex flex-wrap items-center gap-3 md:gap-2 text-lg font-serif"
                style={{ opacity: 1, transform: "none" }}
              >
                <span
                  className="text-4xl md:text-5xl lg:text-7xl font-serif md:pr-2"
                  style={{
                    fontFamily: "Instrument Serif, serif",
                    fontWeight: 500,
                    lineHeight: 1.2,
                    maxWidth: "100%",
                  }}
                >
                  as
                </span>
                <div
                  className="relative mobile-dropdown"
                  style={{
                    fontFamily: "Instrument Sans, sans-serif",
                    color: "#ffffff",
                    verticalAlign: "middle",
                  }}
                >
                  <button
                    type="button"
                    className="border border-[rgba(255,255,255,0.2)] pl-4 md:pl-8 pr-4 md:pr-8 py-3 md:py-4 outline-none w-full max-w-[280px] sm:max-w-[320px] md:w-[340px] appearance-none focus:border-[rgba(255,255,255,0.4)] transition-colors text-base md:text-lg lg:text-xl align-middle text-left flex items-center justify-between bg-transparent rounded-4xl"
                    style={{
                      fontFamily: "Instrument Sans, sans-serif",
                      color: "#ffffff",
                      verticalAlign: "middle",
                    }}
                  >
                    <span className="flex-1">an Individual</span>
                    <svg
                      className="w-3 h-2 md:w-3 md:h-2 transition-transform duration-200 flex-shrink-0 ml-2 "
                      fill="none"
                      stroke="rgba(255,255,255,0.6)"
                      strokeWidth={1.5}
                      viewBox="0 0 12 8"
                    >
                      <path
                        d="M1 1.5L6 6.5L11 1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </button>
                </div>
                <span
                  className="md:px-2 text-4xl md:text-5xl lg:text-7xl font-serif"
                  style={{
                    fontFamily: "Instrument Serif, serif",
                    fontWeight: 500,
                    lineHeight: 1.2,
                    maxWidth: "100%",
                  }}
                >
                  for
                </span>
                <div
                  className="relative mobile-dropdown"
                  style={{
                    fontFamily: "Instrument Sans, sans-serif",
                    color: "#ffffff",
                    verticalAlign: "middle",
                  }}
                >
                  <button
                    type="button"
                    className="border border-[rgba(255,255,255,0.2)] pl-4 md:pl-8 pr-4 md:pr-8 py-3 md:py-4 outline-none w-full max-w-[280px] sm:max-w-[320px] md:w-[340px] appearance-none focus:border-[rgba(255,255,255,0.4)] transition-colors text-base md:text-lg lg:text-xl align-middle text-left flex items-center justify-between bg-transparent rounded-4xl"
                    style={{
                      fontFamily: "Instrument Sans, sans-serif",
                      color: "#ffffff",
                      verticalAlign: "middle",
                    }}
                  >
                    <span className="flex-1">Myself</span>
                    <svg
                      className="w-3 h-2 md:w-3 md:h-2 transition-transform duration-200 flex-shrink-0 ml-2 "
                      fill="none"
                      stroke="rgba(255,255,255,0.6)"
                      strokeWidth={1.5}
                      viewBox="0 0 12 8"
                    >
                      <path
                        d="M1 1.5L6 6.5L11 1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
              <div
                className="flex flex-wrap items-center gap-3 md:gap-2 text-lg"
                style={{ opacity: 1, transform: "none" }}
              >
                <span
                  className="text-4xl md:text-5xl lg:text-7xl font-serif md:pr-2"
                  style={{
                    fontFamily: "Instrument Serif, serif",
                    fontWeight: 500,
                    lineHeight: 1.2,
                    maxWidth: "100%",
                  }}
                >
                  My email is
                </span>
                <div className="w-full max-w-[320px] sm:max-w-[400px] md:w-[500px]">
                  <input
                    type="email"
                    placeholder="email@example.com"
                    className="w-full border border-[rgba(255,255,255,0.2)] rounded-full px-4 md:px-8 py-3 md:py-4 outline-none focus:border-[rgba(255,255,255,0.4)] transition-colors text-base md:text-lg lg:text-xl"
                    style={{ fontFamily: "Instrument Sans, sans-serif" }}
                    required
                    value=""
                    onChange={(e) => {
                      console.log(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div
                className="pt-5 md:pt-15 flex justify-start"
                style={{ opacity: 1, transform: "none" }}
              >
                <ApplePayDemo />
              </div>
            </form>
          </div>
    </>
  )
}

export default GoldCardForm