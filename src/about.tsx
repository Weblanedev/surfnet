import { useState } from "react";
import { Link } from "react-router-dom";

const About = () => {
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
          <Link to="/" className="text-[16px] leading-[24px] font-medium text-[#333333] cursor-pointer">
            Home
          </Link>
          <Link to="/about-us" className="text-[16px] leading-[24px] font-medium text-[#333333] cursor-pointer">
            About
          </Link>
          <Link to="/blog" className="text-[16px] leading-[24px] font-medium text-[#333333] cursor-pointer">
            Blog
          </Link>
          <Link to="/billing" className="text-[16px] leading-[24px] font-medium text-[#333333] cursor-pointer">
            Billing
          </Link>
          <Link to="/contact-us" className="text-[16px] leading-[24px] font-medium text-[#333333] cursor-pointer">
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

      <section className="relative border h-[300px] md:h-[400px]">
        <div className="absolute z-10 opacity-20 w-full h-full  bg-black"></div>

        <img
          src="https://seolounge.radiantthemes.com/wp-content/uploads/2018/07/About-Best-Background-Image.jpg?id=836"
          alt=""
          className="w-full h-full object-cover"
        />

        <div className="absolute top-0 z-20 text-white flex flex-col gap-9 md:gap-12 items-center justify-center h-full w-full">
          <h1 className="font-medium md:font-semibold text-[40px] md:text-[60px] w-full sm:w-[550px] md:w-[560px] text-center leading-snug md:leading-[72px]">
            About Us
          </h1>
        </div>
      </section>

      <section className="relative p-10 md:px-[130px] md:py-[130px] flex flex-col gap-8 items-center w-full justify-center">
        <div className="w-full flex flex-col md:flex-row gap-8 justify-between">
          <div className="flex flex-col items-start gap-[10px]">
            <h3 className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text font-semibold text-[20px] leading-[32px]">
              Bringing Action To Brands
            </h3>
            <h2 className="font-bold text-[35px] w-full sm:w-[530px] md:w-[555px] leading-[45px] text-[#212d31]">
              We Are a Dynamic Team of Professional People of Digital Marketing
            </h2>
            <p className="text-[15px] text-[#212d31] leading-[26px] font-medium mt-[5px] w-full md:w-[555px]">
              We provide marketing services to startups and small businesses
              looking for a partner for their digital media. We work with you,
              not for you. We are headquartered in North-Eastern
              France, with our 19 associates located across nine countries in
              order to best serve a client base that stretches throughout North
              America.
            </p>
            <Link to="/billing" className="text-base font-medium text-white bg-green-500 rounded-md md:rounded-md px-7 md:px-12 py-4 md:py-5 hover:bg-green-600 flex items-center justify-center gap-3 max-w-max mt-[25px]">
              Get Started
            </Link>
          </div>

          <img
            src="https://seolounge.radiantthemes.com/wp-content/uploads/2018/07/About-Dynamic-Image.png"
            alt=""
            className="w-full md:w-[585px] sm:min-w-min"
          />
        </div>
      </section>

      <div className="w-full bg-blue-950 flex flex-col p-10 md:p-20 gap-10 md:px-[130px]">
        <div className="flex flex-col md:flex-row w-full items-center md:justify-between gap-5">
          <h3 className="text-white font-medium text-center md:text-left text-[22px] leading-[35.2px] md:w-[800px]">
            We’re on a mission to build a better future where technology creates
            good jobs for everyone.
          </h3>

          <Link to="/billing" className="text-base font-medium text-white bg-green-500 rounded-md md:rounded-md px-7 md:px-12 py-4 md:py-5 hover:bg-green-600 flex items-center justify-center gap-3 max-w-max">
            Get Started
          </Link>
        </div>

        <div className="flex items-center justify-center gap-10">
          <Link
            to="/"
            className="text-[14px] leading-[24px] font-medium text-white cursor-pointer"
          >
            Home
          </Link>
          <Link
            to="/about-us"
            className="text-[14px] leading-[24px] font-medium text-white cursor-pointer"
          >
            About
          </Link>
          <Link
            to="/blog"
            className="text-[14px] leading-[24px] font-medium text-white cursor-pointer"
          >
            Blog
          </Link>
          <Link
            to="/contact-us"
            className="text-[14px] leading-[24px] font-medium text-white cursor-pointer"
          >
            Contact
          </Link>
          <Link
            to="/privacy-policy"
            className="text-[14px] leading-[24px] font-medium text-white cursor-pointer"
          >
            Terms & Privacy
          </Link>
        </div>

        <p className="text-[12px] leading-[24px] text-center text-gray-400">
          © 2024 Surfnet Limited. All Rights Reserved Apollo
        </p>
      </div>
    </div>
  );
};

export default About;
