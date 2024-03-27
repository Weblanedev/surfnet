// import { useEffect, useState } from "react";
import "./App.css";

function App() {
  //   const [prevScrollPos, setPrevScrollPos] = useState<number>(0);
  //   const [navbarVisible, setNavbarVisible] = useState<boolean>(true);

  //   const handleScroll = () => {
  //     const currentScrollPos = window.scrollY;
  //     const scrollingDown = currentScrollPos > prevScrollPos;
  //     const scrollingUp = currentScrollPos < prevScrollPos;
  //     // const isTop = currentScrollPos === 0;

  //     if (scrollingUp) {
  //       setNavbarVisible(false);
  //     } else {
  //       setNavbarVisible(true);
  //     }

  //     // console.log("scrollingDown", scrollingDown);
  //     // console.log("scrollingUp", scrollingUp);
  //     console.log("currentScrollPos", currentScrollPos);
  //     console.log("prevScrollPos", prevScrollPos);

  //     setPrevScrollPos(currentScrollPos);
  //   };

  //   useEffect(() => {
  //     handleScroll();
  //     window.addEventListener("scroll", handleScroll);
  //     return () => {
  //       window.removeEventListener("scroll", handleScroll);
  //     };
  //   }, []);

  return (
    <div className="w-full h-full flex flex-col pt-[66px] md:pt-[80px]">
      <nav
        id="navbar"
        className={`transition-all px-[18px] md:px-[130px] z-40 py-[18px] shadow-2xl shadow-blue-900/20 flex items-center justify-between w-full top-[0px] left-0 fixed bg-white`}
      >
        <h1 className="text-[20px] md:text-[30px] md:font-bold font-medium text-[#333333]">
          Surfnet
        </h1>

        <svg
          className="ast-mobile-svg ast-menu-svg"
          fill="currentColor"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M3 13h18c0.552 0 1-0.448 1-1s-0.448-1-1-1h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1zM3 7h18c0.552 0 1-0.448 1-1s-0.448-1-1-1h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1zM3 19h18c0.552 0 1-0.448 1-1s-0.448-1-1-1h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1z"></path>
        </svg>
      </nav>

      <section className="relative border h-[500px] md:h-[700px]">
        <div className="absolute z-10 opacity-50 w-full h-full  bg-black"></div>

        <img
          src="https://www.surfnet.site/wp-content/uploads/2024/03/microsoft-edge-DNADGmifFsc-unsplash-2048x1366.jpg"
          alt=""
          className="w-full h-full object-cover"
        />

        <div className="absolute top-0 z-20 text-white flex flex-col gap-9 md:gap-12 items-start justify-center h-full ml-10 md:ml-[130px]">
          <h1 className="font-medium md:font-semibold text-[40px] md:text-[60px] w-[550px] md:w-[560px] leading-snug md:leading-[72px]">
            Bespoke Branding Solutions For Your Online Business
          </h1>

          <button className="text-base font-medium text-white bg-green-500 rounded-md md:rounded-md px-7 md:px-12 py-4 md:py-5 hover:bg-green-600 flex items-center justify-center gap-3">
            Get Started
          </button>
        </div>
      </section>

      <section className="relative p-10 md:px-[130px] md:py-[130px] flex flex-col gap-8 items-center w-full justify-center">
        <div className="w-full flex flex-col md:flex-row gap-8">
          <div className="flex flex-col items-start gap-[10px]">
            <h3 className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text font-semibold text-[20px] leading-[32px]">
              Bringing Action To Brands
            </h3>
            <h2 className="font-bold text-[35px] w-[330px] leading-[45px] text-[#212d31]">
              Learn How to Grow Your Business in Days
            </h2>
            <p className="text-[15px] text-[#212d31] leading[26px] font-medium mt-[5px] w-[340px]">
              Quis ipsum gravida. Accumsan lacus vel facilisis dolore magna
              aliqua lacus.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center gap-2.5 bg-white w-full md:w-[420px] border-b-[2px] border-green-500 rounded-md shadow-lg shadow-blue-900/20 p-[42px]">
            <img
              src="https://seolounge.radiantthemes.com/wp-content/uploads/2023/01/home-17-creative-1.webp"
              alt=""
              className="w-[90px]"
            />
            <h3 className="font-semibold text-[20px] leading-[32px] text-[#212d31]">
              Creative Content
            </h3>
            <p className="text-[15px] text-[#212d31] leading[26px] font-medium w-[280px] text-center">
              Quis ipsum gravida. Accumsan lacus consectetur.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center gap-2.5 bg-white w-full md:w-[420px] border-b-[2px] border-green-500 rounded-md shadow-lg shadow-blue-900/20 p-[42px]">
            <img
              src="https://seolounge.radiantthemes.com/wp-content/uploads/2023/01/home-17-competitor-1.webp"
              alt=""
              className="w-[90px]"
            />
            <h3 className="font-semibold text-[20px] leading-[32px] text-[#212d31]">
              Competitor Analysis
            </h3>
            <p className="text-[15px] text-[#212d31] leading[26px] font-medium w-[280px] text-center">
              Quis ipsum gravida. Accumsan lacus consectetur.
            </p>
          </div>
        </div>

        <div className="w-full flex flex-col md:flex-row gap-8 md:ml-[150px]">
          <div className="flex flex-col items-center justify-center gap-2.5 bg-white w-full md:w-[420px] border-b-[2px] border-green-500 rounded-md shadow-lg shadow-blue-900/20 p-[42px]">
            <img
              src="https://seolounge.radiantthemes.com/wp-content/uploads/2021/01/home-17-cycle@2x.png"
              alt=""
              className="w-[90px]"
            />
            <h3 className="font-semibold text-[20px] leading-[32px] text-[#212d31]">
              Business Life Cycle
            </h3>
            <p className="text-[15px] text-[#212d31] leading[26px] font-medium w-[280px] text-center">
              Quis ipsum gravida. Accumsan lacus consectetur.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center gap-2.5 bg-white w-full md:w-[420px] border-b-[2px] border-green-500 rounded-md shadow-lg shadow-blue-900/20 p-[42px]">
            <img
              src="https://seolounge.radiantthemes.com/wp-content/uploads/2021/01/home-17-impl@2x.png"
              alt=""
              className="w-[90px]"
            />
            <h3 className="font-semibold text-[20px] leading-[32px] text-[#212d31]">
              Implementation
            </h3>
            <p className="text-[15px] text-[#212d31] leading[26px] font-medium w-[280px] text-center">
              Quis ipsum gravida. Accumsan lacus consectetur.
            </p>
          </div>
        </div>
      </section>

      <section className="relative p-10 md:px-[130px] md:py-[65px] flex md:flex-row flex-col gap-12 items-start w-full justify-center">
        <img
          src="https://seolounge.radiantthemes.com/wp-content/uploads/2020/12/home-17-brand-left.png"
          alt=""
          className="w-[445px]"
        />

        <div className="w-full flex flex-col mt-20 items-start gap-[28px]">
          <div className="flex flex-col items-start gap-[10px]">
            <h3 className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text font-semibold text-[20px] leading-[32px]">
              Bringing Action To Brands
            </h3>
            <h2 className="font-bold text-[35px] w-[630px] leading-[45px] text-[#212d31]">
              An Array Of Online Marketing Services
            </h2>
            <p className="text-[15px] text-[#212d31] leading[26px] font-normal mt-[5px] w-[680px]">
              Quis ipsum gravida. Accumsan lacus vel facilisis dolore magna
              aliqua lacus dolor sit amet, consectetur adipiscing elitd do. Quis
              ipsum gravida.
            </p>
          </div>

          <div className="w-full flex flex-col items-start gap-[20px]">
            <div className="flex gap-5 justify-start">
              <img
                src="https://seolounge.radiantthemes.com/wp-content/uploads/2020/12/home-17-thick@2x.png"
                alt=""
                className="w-[48px] h-[48px] min-w-min"
              />

              <div className="flex flex-col items-start gap-[4px]">
                <h4 className="font-bold text-[15px] leading-[26px] text-[#212d31]">
                  Scientific website optimization
                </h4>
                <p className="font-normal text-[15px] leading-[26px] text-[#212d31] w-[400px]">
                  Quis ipsum gravida. Accumsan lacus facilisis dolor sit amet,
                  consectetur.
                </p>
              </div>
            </div>

            <div className="flex gap-5 justify-start">
              <img
                src="https://seolounge.radiantthemes.com/wp-content/uploads/2020/12/home-17-thick@2x.png"
                alt=""
                className="w-[48px] h-[48px] min-w-min"
              />

              <div className="flex flex-col items-start gap-[4px]">
                <h4 className="font-bold text-[15px] leading-[26px] text-[#212d31]">
                  Generating increased revenue
                </h4>
                <p className="font-normal text-[15px] leading-[26px] text-[#212d31] w-[400px]">
                  Quis ipsum gravida. Accumsan lacus facilisis dolor sit amet,
                  consectetur.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="w-full bg-blue-950 flex flex-col p-10 md:p-20 gap-10 md:px-[130px]">
        <div className="flex flex-col md:flex-row w-full items-center md:justify-between gap-5">
          <h3 className="text-white font-medium text-center md:text-left text-[22px] leading-[35.2px] md:w-[800px]">
          We’re on a mission to build a better future where technology creates good jobs for everyone. Fusce sed rutrum risus pulvinar tortor et. Aenean suscipit ege.
          </h3>

          <button className="text-base font-medium text-white bg-green-500 rounded-md md:rounded-md px-7 md:px-12 py-4 md:py-5 hover:bg-green-600 flex items-center justify-center gap-3 max-w-max">
            Get Started
          </button>
        </div>

        <div className="flex items-center justify-center gap-10">
          <p className="text-[14px] leading-[24px] font-medium text-white cursor-pointer">
            Home
          </p>
          <p className="text-[14px] leading-[24px] font-medium text-white cursor-pointer">
            Blog
          </p>
          <p className="text-[14px] leading-[24px] font-medium text-white cursor-pointer">
            Contact
          </p>
          <p className="text-[14px] leading-[24px] font-medium text-white cursor-pointer">
            Terms
          </p>
          <p className="text-[14px] leading-[24px] font-medium text-white cursor-pointer">
            Privacy
          </p>
        </div>

        <p className="text-[12px] leading-[24px] text-center text-gray-400">© 2024 Surfnet Limited. All Rights Reserved Apollo</p>
      </div>
    </div>
  );
}

export default App;
