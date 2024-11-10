import React from "react";
// import { AnimatedTooltip } from "./ui/animated-tooltip";
// import { people } from "@/app/data/data";
import CardDemo from "./blocks/cards-demo-1";
import Image from "next/image";
// import { AnimatedModal } from "./AnimatedModal";
// import { AppleCardsCarouselDemo } from "./ui/applecard";

const Shuffle = () => {
  return (
    <>
      {/* <section className="bg-neutral-950 p-4 md:p-8">
        <div className="container mx-auto px-4" data-path="0.1">
          <div
            className="flex flex-wrap items-center -m-6 pt-32 pb-36"
            data-path="0.1.0"
          >
            <div className="w-full lg:w-1/2 p-6" data-path="0.1.0.0">
              <div className="lg:max-w-xl" data-path="0.1.0.0.0">
                <h1
                  className="mb-6 font-heading text-7xl md:text-10xl xl:text-12xl text-gray-900 font-bold"
                  data-config-id="txt-378f37-1"
                  data-path="0.1.0.0.0.1"
                >
                  Welcome to RadNepal
                </h1>
                <p
                  className="mb-9 text-gray-600 text-lg"
                  data-config-id="txt-378f37-6"
                  data-path="0.1.0.0.0.2"
                >
                  RadNEPAL is a multidiciplinary Media crew and a gravity sports
                  team platform currently curated by Riders , Travellers and
                  passionate cameraguys based in a geographically diverse
                  country of the himalayas , Nepal . We are enthusiastic in
                  spreading the proper way of riding and exploring among the
                  upcomming generation of passionate extreme sport Athletes and
                  free minded travellers and explorers.
                </p>

                <div className="flex flex-row items-center justify-center mb-10 w-full">
                  <button
                    className="group relative font-heading px-10 py-5 w-full lg:w-auto uppercase text-white text-xs font-semibold tracking-px bg-gray-900 overflow-hidden rounded-md"
                    data-path="0.1.0.0.0.3"
                  >
                    <div
                      className="absolute top-0 left-0 transform -translate-x-full group-hover:-translate-x-0 h-full w-full transition ease-in-out duration-500 bg-gray-800"
                      data-path="0.1.0.0.0.3.0"
                    ></div>
                    <p
                      className="relative z-10"
                      data-config-id="txt-378f37-7"
                      data-path="0.1.0.0.0.3.1"
                    >
                      Connect Now
                    </p>
                  </button>
                  <AnimatedTooltip items={people} />
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 p-6 bg-red-400" data-path="0.1.0.1">
              <Image
                className="block mx-auto"
                src="gradia-assets/images/hero/profiles.png"
                alt=""
                data-config-id="img-378f37-3"
                data-path="0.1.0.1.0"
              />
              <h1>Image Here</h1>
            </div>
          </div>
        </div>
      </section> */}

      <section
        data-section-id="1"
        data-share=""
        data-category="features"
        data-component-id="4d2f33a1_04_awz"
        className="relative pt-20 pb-20 lg:pb-32 overflow-hidden bg-neutral-950 p-4 md:p-8"
        data-path="0"
      >
        <Image
          className="absolute top-0 right-0"
          src="/saturn-assets/images/features/star-element-right.png"
          width={200}
          height={200}
          alt=""
          data-config-id="img-5b8a8b-1"
          data-path="0.0"
        />
        <div className="relative container px-4 mx-auto" data-path="0.1">
          <div className="max-w-md lg:max-w-7xl mx-auto" data-path="0.1.0">
            <div
              className="flex flex-wrap -mx-4 mb-18 items-center"
              data-path="0.1.0.0"
            >
              <div
                className="w-full lg:w-2/3 xl:w-1/2 px-4 mb-12 lg:mb-0"
                data-path="0.1.0.0.0"
              >
                <div className="max-w-lg" data-path="0.1.0.0.0.0">
                  <span
                    className="inline-block py-1 px-3 mb-4 text-xs font-semibold text-orange-900 bg-orange-50 rounded-full"
                    data-config-id="txt-5b8a8b-5"
                    data-path="0.1.0.0.0.0.0"
                  >
                    FEATURES
                  </span>
                  <h1
                    className="font-heading text-5xl xs:text-6xl md:text-7xl font-bold text-gray-900"
                    data-path="0.1.0.0.0.0.1"
                  >
                    <span
                      data-config-id="txt-5b8a8b-6"
                      data-path="0.1.0.0.0.0.1.0"
                    >
                      Magnificent Case
                    </span>
                    <span
                      className="font-serif italic"
                      data-config-id="txt-5b8a8b-7"
                      data-path="0.1.0.0.0.0.1.1"
                    >
                      Studies
                    </span>
                  </h1>
                </div>
              </div>
              <div
                className="w-full lg:w-1/3 xl:w-1/2 px-4"
                data-path="0.1.0.0.1"
              >
                <div className="max-w-lg lg:ml-auto" data-path="0.1.0.0.1.0">
                  <p
                    className="text-lg text-gray-500"
                    data-config-id="txt-5b8a8b-4"
                    data-path="0.1.0.0.1.0.0"
                  >
                    So, how do you know which is the right tax software agency
                    for your company? Well, you cant go wrong with choosing
                    Saturn.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap -mx-4" data-path="0.1.0.1">
              <div
                className="w-full lg:w-1/3 px-4 mb-12 lg:mb-0"
                data-path="0.1.0.1.0"
              >
                <div data-path="0.1.0.1.0.0">
                  <div className="block mb-6 w-full h-100">
                    <CardDemo />
                  </div>
                  <div data-path="0.1.0.1.0.0.1">
                    <h3
                      className="text-3xl font-semibold mb-5"
                      data-config-id="txt-5b8a8b-1"
                      data-path="0.1.0.1.0.0.1.0"
                    >
                      The heart of what makes we valuable
                    </h3>
                  </div>
                </div>
              </div>
              <div
                className="w-full lg:w-1/3 px-4 mb-12 lg:mb-0"
                data-path="0.1.0.1.1"
              >
                <div data-path="0.1.0.1.1.0">
                  <div className="block mb-6 w-full h-100">
                    <CardDemo />
                  </div>
                  <div data-path="0.1.0.1.1.0.1">
                    <h3
                      className="text-3xl font-semibold mb-5"
                      data-config-id="txt-5b8a8b-2"
                      data-path="0.1.0.1.1.0.1.0"
                    >
                      The heart of what makes we valuable
                    </h3>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/3 px-4" data-path="0.1.0.1.2">
                <div data-path="0.1.0.1.2.0">
                  <div className="block mb-6 w-full h-100">
                    <CardDemo />
                  </div>
                  <div data-path="0.1.0.1.2.0.1">
                    <h3
                      className="text-3xl font-semibold mb-5"
                      data-config-id="txt-5b8a8b-3"
                      data-path="0.1.0.1.2.0.1.0"
                    >
                      The heart of what makes we valuable
                    </h3>
                    <a
                      className="inline-flex items-center justify-center w-full lg:w-auto px-5 py-3 text-sm font-semibold text-orange-900 rounded-full border border-gray-100 hover:border-orange-900 transition duration-200"
                      href="#"
                      data-path="0.1.0.1.2.0.1.1"
                    >
                      <span
                        className="mr-3"
                        data-config-id="txt-5b8a8b-10"
                        data-path="0.1.0.1.2.0.1.1.0"
                      >
                        Learn More
                      </span>
                      <svg
                        width="13"
                        height="13"
                        viewBox="0 0 13 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        data-config-id="svg-5b8a8b-3"
                        data-path="0.1.0.1.2.0.1.1.1"
                      >
                        <path
                          d="M12.9199 0.62C12.8185 0.375651 12.6243 0.181475 12.3799 0.0799999C12.2597 0.028759 12.1306 0.00157999 11.9999 0H1.99994C1.73472 0 1.48037 0.105357 1.29283 0.292893C1.1053 0.48043 0.999939 0.734784 0.999939 1C0.999939 1.26522 1.1053 1.51957 1.29283 1.70711C1.48037 1.89464 1.73472 2 1.99994 2H9.58994L1.28994 10.29C1.19621 10.383 1.12182 10.4936 1.07105 10.6154C1.02028 10.7373 0.994141 10.868 0.994141 11C0.994141 11.132 1.02028 11.2627 1.07105 11.3846C1.12182 11.5064 1.19621 11.617 1.28994 11.71C1.3829 11.8037 1.4935 11.8781 1.61536 11.9289C1.73722 11.9797 1.86793 12.0058 1.99994 12.0058C2.13195 12.0058 2.26266 11.9797 2.38452 11.9289C2.50638 11.8781 2.61698 11.8037 2.70994 11.71L10.9999 3.41V11C10.9999 11.2652 11.1053 11.5196 11.2928 11.7071C11.4804 11.8946 11.7347 12 11.9999 12C12.2652 12 12.5195 11.8946 12.707 11.7071C12.8946 11.5196 12.9999 11.2652 12.9999 11V1C12.9984 0.869323 12.9712 0.740222 12.9199 0.62Z"
                          fill="#FF460C"
                        ></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section>
          <div
            data-section-id="1"
            data-share=""
            data-category="ticker"
            data-component-id="869c19af_04_awz"
            //   style="height:600px;"
            data-path="0"
          >
            <div
              // className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full"
              data-path="0.0"
            >
              <div
                className="bg-black py-6 transform -rotate-6 translate-y-12 relative z-50"
                data-path="0.0.0"
              >
                <div
                  className="flex items-center justify-center gap-3 animate-ticker animation-linear"
                  data-path="0.0.0.0"
                >
                  <p
                    className="tracking-tight text-white text-5xl font-medium whitespace-nowrap"
                    data-config-id="txt-2c6bc1-1"
                    data-path="0.0.0.0.0"
                  >
                    WEB DESIGN
                  </p>
                  <div
                    className="w-5 h-5 rounded-full bg-orange-400"
                    data-path="0.0.0.0.1"
                  ></div>
                  <p
                    className="tracking-tight text-white text-5xl font-medium whitespace-nowrap"
                    data-config-id="txt-2c6bc1-2"
                    data-path="0.0.0.0.2"
                  >
                    UI/UX DESIGN
                  </p>
                  <div
                    className="w-5 h-5 rounded-full bg-orange-400"
                    data-path="0.0.0.0.3"
                  ></div>
                  <p
                    className="tracking-tight text-white text-5xl font-medium whitespace-nowrap"
                    data-config-id="txt-2c6bc1-3"
                    data-path="0.0.0.0.4"
                  >
                    WEB DESIGN
                  </p>
                  <div
                    className="w-5 h-5 rounded-full bg-orange-400"
                    data-path="0.0.0.0.5"
                  ></div>
                  <p
                    className="tracking-tight text-white text-5xl font-medium whitespace-nowrap"
                    data-config-id="txt-2c6bc1-4"
                    data-path="0.0.0.0.6"
                  >
                    BRAND DESIGN
                  </p>
                  <div
                    className="w-5 h-5 rounded-full bg-orange-400"
                    data-path="0.0.0.0.7"
                  ></div>
                  <p
                    className="tracking-tight text-white text-5xl font-medium whitespace-nowrap"
                    data-config-id="txt-2c6bc1-5"
                    data-path="0.0.0.0.8"
                  >
                    UI/UX DESIGN
                  </p>
                </div>
              </div>
              <div
                className="bg-orange-400 py-6 transform rotate-6"
                data-path="0.0.1"
              >
                <div
                  className="flex items-center justify-center gap-3 animate-ticker animation-linear"
                  data-path="0.0.1.0"
                >
                  <p
                    className="tracking-tight text-white text-5xl font-medium whitespace-nowrap"
                    data-config-id="txt-2c6bc1-6"
                    data-path="0.0.1.0.0"
                  >
                    WEB DESIGN
                  </p>
                  <div
                    className="w-5 h-5 rounded-full bg-white"
                    data-path="0.0.1.0.1"
                  ></div>
                  <p
                    className="tracking-tight text-white text-5xl font-medium whitespace-nowrap"
                    data-config-id="txt-2c6bc1-7"
                    data-path="0.0.1.0.2"
                  >
                    UI/UX DESIGN
                  </p>
                  <div
                    className="w-5 h-5 rounded-full bg-white"
                    data-path="0.0.1.0.3"
                  ></div>
                  <p
                    className="tracking-tight text-white text-5xl font-medium whitespace-nowrap"
                    data-config-id="txt-2c6bc1-8"
                    data-path="0.0.1.0.4"
                  >
                    WEB DESIGN
                  </p>
                  <div
                    className="w-5 h-5 rounded-full bg-white"
                    data-path="0.0.1.0.5"
                  ></div>
                  <p
                    className="tracking-tight text-white text-5xl font-medium whitespace-nowrap"
                    data-config-id="txt-2c6bc1-9"
                    data-path="0.0.1.0.6"
                  >
                    BRAND DESIGN
                  </p>
                  <div
                    className="w-5 h-5 rounded-full bg-white"
                    data-path="0.0.1.0.7"
                  ></div>
                  <p
                    className="tracking-tight text-white text-5xl font-medium whitespace-nowrap"
                    data-config-id="txt-2c6bc1-10"
                    data-path="0.0.1.0.8"
                  >
                    UI/UX DESIGN
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default Shuffle;
