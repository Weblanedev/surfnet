import { useState } from "react";
import { Link } from "react-router-dom";

const Blog = () => {
  const [navbarVisible, setNavbarVisible] = useState<boolean>(false);

  return (
    <div className="w-full h-full flex flex-col pt-[66px] md:pt-[80px]">
      <nav
        id="navbar"
        className={`px-[40px] md:px-[130px] z-40 py-[18px] shadow-2xl shadow-blue-900/20 flex items-center justify-between w-full top-[0px] left-0 fixed bg-white`}
      >
        <Link
          to="/"
          className="text-[20px] md:text-[30px] md:font-bold font-medium text-[#333333]"
        >
          Surfnet
        </Link>

        <div className="md:flex items-center justify-center gap-14 hidden">
          <Link
            to="/"
            className="text-[16px] leading-[24px] font-medium text-[#333333] cursor-pointer"
          >
            Home
          </Link>
          <Link
            to="/about-us"
            className="text-[16px] leading-[24px] font-medium text-[#333333] cursor-pointer"
          >
            About
          </Link>
          <Link
            to="/blog"
            className="text-[16px] leading-[24px] font-medium text-[#333333] cursor-pointer"
          >
            Blog
          </Link>
          <Link
            to="/billing"
            className="text-[16px] leading-[24px] font-medium text-[#333333] cursor-pointer"
          >
            Billing
          </Link>
          <Link
            to="/contact-us"
            className="text-[16px] leading-[24px] font-medium text-[#333333] cursor-pointer"
          >
            Contact
          </Link>
        </div>

        {navbarVisible ? (
          <svg
            className="md:hidden cursor-pointer w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="100"
            height="100"
            viewBox="0 0 50 50"
            onClick={() => setNavbarVisible(!navbarVisible)}
          >
            <path d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z"></path>
          </svg>
        ) : (
          <svg
            className="md:hidden cursor-pointer"
            fill="currentColor"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            onClick={() => setNavbarVisible(!navbarVisible)}
          >
            <path d="M3 13h18c0.552 0 1-0.448 1-1s-0.448-1-1-1h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1zM3 7h18c0.552 0 1-0.448 1-1s-0.448-1-1-1h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1zM3 19h18c0.552 0 1-0.448 1-1s-0.448-1-1-1h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1z"></path>
          </svg>
        )}

        <div
          className={`pb-[5px] transition duration-300 ease-in-out ${
            navbarVisible ? "top-[66px]" : "-top-[300px]"
          } shadow-2xl shadow-blue-900/20 flex flex-col items-center justify-between w-full left-0 absolute bg-white px-10 md:hidden`}
        >
          <Link
            to="/"
            className="text-[16px] leading-[24px] font-normal text-[#333333] cursor-pointer text-left w-full border-b py-3 hover:text-green-500 transition-colors"
          >
            Home
          </Link>
          <Link
            to="/about-us"
            className="text-[16px] leading-[24px] font-normal text-[#333333] cursor-pointer text-left w-full border-b py-3 hover:text-green-500 transition-colors"
          >
            About
          </Link>
          <Link
            to="/blog"
            className="text-[16px] leading-[24px] font-normal text-[#333333] cursor-pointer text-left w-full border-b py-3 hover:text-green-500 transition-colors"
          >
            Blog
          </Link>
          <Link
            to="/billing"
            className="text-[16px] leading-[24px] font-normal text-[#333333] cursor-pointer text-left w-full border-b py-3 hover:text-green-500 transition-colors"
          >
            Billing
          </Link>
          <Link
            to="/contact-us"
            className="text-[16px] leading-[24px] font-normal text-[#333333] cursor-pointer text-left w-full py-3 hover:text-green-500 transition-colors"
          >
            Contact
          </Link>
        </div>
      </nav>

      <section className="relative p-10 md:px-[130px] md:py-[100px] flex flex-col md:flex-col gap-8 items-center w-full justify-center">
        <div className="flex flex-col md:flex-row gap-7">
          <Link
            to="/blog/one"
            className="w-[660px] h-[334px] md:w-[607px] md:h-[396px] relative rounded-2xl cursor-pointer group"
          >
            <div className="absolute z-10 opacity-50 w-full h-full  bg-black rounded-2xl group-hover:opacity-60 transition-all"></div>

            <img
              src="https://www.surfnet.site/wp-content/uploads/2024/03/microsoft-edge-DNADGmifFsc-unsplash-2048x1366.jpg"
              alt=""
              className="w-full h-full object-cover rounded-2xl"
            />

            <div className="absolute top-0 z-20 text-white flex flex-col gap-4 items-start justify-start ml-10 mt-10">
              <h4 className="text-sm leading-[14px] font-medium text-white bg-green-500 rounded-md md:rounded-md px-[14px] py-[7px] flex items-center justify-center gap-3">
                News
              </h4>

              <h1 className="font-medium md:font-semibold text-[30px] md:text-[40px] w-[550px] md:w-[400px] leading-snug md:leading-snug">
                Advanced Statistical Analysis in Sports Betting: Leveraging Data
                for Success
              </h1>
            </div>
          </Link>

          <div className="flex gap-7">
            <Link
              to="/blog/two"
              className="flex flex-col gap-[25px] group w-[316px] md:w-[288px] cursor-pointer"
            >
              <div className="w-full h-[236px] md:h-[216px] relative">
                <div className="absolute z-10 opacity-50 w-full h-[236px] md:h-[216px] bg-black rounded-2xl group-hover:opacity-60 transition-all"></div>
                <img
                  src="https://www.surfnet.site/wp-content/uploads/2024/03/microsoft-edge-DNADGmifFsc-unsplash-2048x1366.jpg"
                  alt=""
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>

              <div className="text-[#333333] flex flex-col gap-4 items-start justify-start">
                <h4 className="text-sm leading-[14px] font-medium text-white bg-green-500 rounded-md md:rounded-md px-[14px] py-[7px] flex items-center justify-center gap-3">
                  Sports & Games
                </h4>

                <h1 className="font-medium md:font-semibold text-[23px] w-full md:w-full leading-snug">
                  Navigating the World of eSports Betting: A Beginner’s Guide
                </h1>
              </div>
            </Link>

            <Link
              to="/blog/three"
              className="flex flex-col gap-[25px] group w-[316px] md:w-[288px] cursor-pointer"
            >
              <div className="w-full h-[236px] md:h-[216px] relative">
                <div className="absolute z-10 opacity-50 w-full h-[236px] md:h-[216px] bg-black rounded-2xl group-hover:opacity-60 transition-all"></div>
                <img
                  src="https://www.surfnet.site/wp-content/uploads/2024/03/microsoft-edge-DNADGmifFsc-unsplash-2048x1366.jpg"
                  alt=""
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>

              <div className="text-[#333333] flex flex-col gap-4 items-start justify-start">
                <h4 className="text-sm leading-[14px] font-medium text-white bg-green-500 rounded-md md:rounded-md px-[14px] py-[7px] flex items-center justify-center gap-3">
                  Sports & Games
                </h4>

                <h1 className="font-medium md:font-semibold text-[23px] w-full md:w-full leading-snug">
                  Maximizing Profit with Live Betting: Tips and Strategies
                </h1>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <div className="w-full bg-blue-950 flex flex-col p-10 md:p-20 gap-10 md:px-[130px]">
        <div className="flex flex-col md:flex-row w-full items-center md:justify-between gap-5">
          <h3 className="text-white font-medium text-center md:text-left text-[22px] leading-[35.2px] md:w-[800px]">
            We’re on a mission to build a better future where technology creates
            good jobs for everyone. Fusce sed rutrum risus pulvinar tortor et.
            Aenean suscipit ege.
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

        <p className="text-[12px] leading-[24px] text-center text-gray-400">
          © 2024 Surfnet Limited. All Rights Reserved Apollo
        </p>
      </div>
    </div>
  );
};

export default Blog;
