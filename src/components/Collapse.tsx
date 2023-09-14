import { useState, useEffect } from "react";

interface Details {
  title: string;
  description: string;
}

interface Sectione {
  title: string;
  description: string;
  key_capabilities?: Details[];
  benefits?: {
    details: Details[];
    testimonial?: string;
  };
  image?: string;
}
interface Props {
  sections: Sectione[];
}

Collapse.defaultProps = {
  sections: [],
};

export default function Collapse({ sections }: Props) {
  const [activeSection, setActiveSection] = useState<number | null>(null);

  return (
    <div className="bg-gradient-to-b from-sky-200 to-sky-100 flex items-center justify-center">
      <div className="w-11/12 lg:w-2/3 flex items-center justify-start 2lg:justify-center my-20">
        <div className="flex flex-row gap-x-14 w-full">
          <div className="hidden lg:flex flex-col gap-y-4 w-1/3 h-fit p-6 rounded-3xl bg-white sticky top-20">
            {(sections || []).map((item, index) => (
              <div
                key={index}
                className={`flex flex-row gap-x-2 rounded-lg items-start justify-start transition-all duration-300 cursor-pointer ${
                  activeSection === index
                    ? "text-white bg-blue-500  ml-px p-2 w-fit scale-105"
                    : "text-gray-600 hover:scale-105"
                }`}
                onClick={() =>
                  setActiveSection(activeSection === index ? null : index)
                }
              >
                <p
                  className={`${
                    activeSection === index ? "text-white" : "text-slate-300"
                  } font-bold text-xs xl:text-base`}
                >
                  {index + 1}.
                </p>
                <p className="font-semibold text-xs xl:text-base leading-tight mt-0.5">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-y-6 w-full">
            {(sections || []).map((item, index) => (
              <div key={index} className="flex flex-col gap-y-6 w-full">
                <div
                  className="flex flex-row justify-between cursor-pointer w-full"
                  onClick={() =>
                    setActiveSection(activeSection === index ? null : index)
                  }
                >
                  <div className="flex flex-row gap-x-4">
                    <p className="text-blue-500 font-bold text-xl xl:text-3xl">
                      {index + 1}.
                    </p>
                    <h1 className="font-bold text-xl xl:text-3xl leading-tight text-gray-600">
                      {item.title}
                    </h1>
                  </div>
                  <img
                    className={`transform duration-500 ${
                      activeSection === index ? "-scale-y-100" : ""
                    }`}
                    src="arrow.svg"
                    alt=""
                    width={15}
                    height={15}
                  />
                </div>
                <div
                  className={`transform transition-max-h duration-500 ease-in-out overflow-hidden ${
                    activeSection === index
                      ? "max-h-[3000px] opacity-100 scale-100"
                      : "max-h-0 opacity-0 scale-95"
                  }`}
                >
                  <div className="flex flex-col gap-y-6">
                    <div className="flex flex-col gap-y-2">
                      <div className="flex flex-row gap-x-4 w-full items-start justify-start">
                        <img
                          className="w-5 mt-2"
                          src="software_img/description.svg"
                          alt=""
                          width={20}
                          height={20}
                        />
                        <div className="flex flex-col gap-y-2">
                          <h2 className="text-blue-500 font-bold text-lg xl:text-2xl leading-tight">
                            Description
                          </h2>
                          <p className="text-gray-600 text-xs xl:text-base">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className={`${item.key_capabilities ? "" : "hidden absolute"} flex flex-col gap-y-2`}>
                      <div className="flex flex-row gap-x-4 w-full items-start justify-start">
                        <img
                          className="w-5 mt-2"
                          src="software_img/key.svg"
                          alt=""
                          width={20}
                          height={20}
                        />
                        <div className="flex flex-col gap-y-5">
                          <h2 className="text-blue-500 font-bold text-lg xl:text-2xl leading-tight">
                            Key Capabilities
                          </h2>
                          <div className="flex flex-col gap-y-4">
                            {item.key_capabilities?.map((detail, index) => (
                              <div
                                key={index}
                                className="flex flex-col gap-y-1"
                              >
                                <h3 className="text-gray-600 text-xs xl:text-base font-bold">
                                  {detail.title}
                                </h3>
                                <p className="text-gray-600 text-xs xl:text-base">
                                  {detail.description}
                                </p>
                              </div>
                            ))}
                          </div>
                          <div className="w-full">
                              {item.image ? <img src={`/software_img/${item.image}`} alt="" className="w-full" loading='lazy'/> : null}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={`${item.benefits ? "" : "hidden absolute"} flex flex-col gap-y-2`}>
                      <div className="flex flex-row gap-x-4 w-full items-start justify-start">
                        <img
                          className="w-5 mt-2"
                          src="software_img/star.svg"
                          alt=""
                          width={20}
                          height={20}
                        />
                        <div className="flex flex-col gap-y-5">
                          <h2 className="text-blue-500 font-bold text-lg xl:text-2xl leading-tight">
                            Benefits to users
                          </h2>
                          <div className="flex flex-col gap-y-4">
                            {item.benefits?.details.map((detail, index) => (
                              <div
                                key={index}
                                className="flex flex-col gap-y-1"
                              >
                                <h3 className="text-gray-600 text-xs xl:text-base font-bold">
                                  {detail.title}
                                </h3>
                                <p className="text-gray-600 text-xs xl:text-base">
                                  {detail.description}
                                </p>
                              </div>
                            ))}
                            <p className="text-gray-600 text-xs xl:text-base italic">{item.benefits?.testimonial}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
