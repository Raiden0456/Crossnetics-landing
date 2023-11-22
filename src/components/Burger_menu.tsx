import pkg from "react-burger-menu";
const { stack: Menu } = pkg;

import "../styles/Burger.css";
// Header sections
const header_sections = {
  sections: [
    {
      title: "Home",
      url: "/",
    },
    {
      title: "Software",
      url: "/software",
    },
    {
      title: "Security",
      url: "/security",
    },
    {
      title: "Blog",
      url: "/blog",
    },
    {
      title: "Community",
      url: "/community",
    },
  ],
};

interface Social {
  title: string;
  url: string;
  icon: {
    src: string;
    width?: number;
    height?: number;
    format?: string;
  };

}

// BurgerMenu component
const BurgerMenu = ({ social_media = [] }: { social_media?: Social[] }) => {
  return (
    <Menu right width={"100%"}>
      <>
        <div className="flex flex-col gap-1 justify-center items-center mb-[70px]">
          <img src="/cool_logo.svg" alt="" className="w-28" loading="lazy" />
          <span className="uppercase text-[#DEEFFF] font-extrabold text-base">
            Crossnetics
          </span>
        </div>
      </>
      <>
        <div className="flex flex-col gap-10 justify-center items-center text-[#DEEFFF] font-bold uppercase text-lg mb-[70px]">
          {header_sections.sections.map((section, index) => (
            <a key={index} className="menu-item" href={section.url}>
              {section.title}
            </a>
          ))}
        </div>
      </>
      <>
        <div className="lg:hidden h-11 px-7 py-2.5 bg-blue-500 rounded-2xl justify-center items-center gap-4 inline-flex cursor-pointer shadow-[0_0_50px_0px] shadow-blue-500 mb-10 flex-shrink-0">
          <div className="text-white text-xs font-extrabold uppercase">
            View pricing
          </div>
        </div>
      </>
      <>
        <div className="w-full bg-gray-200 h-px mb-10 flex-shrink-0" />
      </>
      <>
        <div className="w-full flex flex-row items-center lg:flex-col justify-between pb-10 gap-5">
          <div className="w-full flex flex-row items-start gap-6">
            <div className="w-full flex flex-row md:justify-between gap-6">
              <div className="flex flex-row flex-wrap items-center right-0 justify-start md:justify-end gap-4 w-fit">
                {social_media && social_media.map((social, index) => (
                  <div key={index}  className="flex flex-row gap-x-1 2lg:gap-x-2 items-center justify-center w-22 text-slate-300 hover:text-sky-100">
                    <img
                      src={social.icon.src}
                      alt=""
                      width={10}
                      height={10}
                      className="w-[20px] lg:w-[10px]"
                    />
                    <a
                      href={social.url}
                      className="hidden lg:flex text-sm font-bold uppercase"
                    >
                      {social.title}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="w-fit">
            <a
              href="/web3-guide"
              className="w-fit h-11 px-4 py-2.5 bg-footer-button hover:bg-gray-600 rounded-2xl flex justify-center items-center cursor-pointer text-footer-button-text hover:text-footer-button-hover-text text-sm"
            >
              <span className="font-light">WEB</span>
              <span className="font-semibold">3.0</span>
              <span className="font-thin"></span>
              <span className="font-light">GUIDE</span>
            </a>
          </div>
        </div>
      </>
    </Menu>
  );
};

export default BurgerMenu;
