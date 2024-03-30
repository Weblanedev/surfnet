import { useState } from "react";
import { Link } from "react-router-dom";

const BlogThree = () => {
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

      <section className="relative border h-[300px] md:h-[550px]">
        <div className="absolute z-10 opacity-20 w-full h-full  bg-black"></div>

        <img
          src="https://seolounge.radiantthemes.com/wp-content/uploads/2018/07/About-Best-Background-Image.jpg?id=836"
          alt=""
          className="w-full h-full object-cover"
        />

        <div className="absolute top-0 z-20 text-white flex flex-col gap-9 md:gap-9 items-center justify-center h-full w-full">
          <h4 className="text-sm leading-[14px] font-medium text-white bg-green-500 hover:bg-green-600 cursor-pointer transition-colors rounded-md md:rounded-md px-[14px] py-[7px] flex items-center justify-center gap-3">
            Sports & Games
          </h4>
          <h1 className="font-medium md:font-semibold text-[40px] md:text-[44px] w-full sm:w-[550px] md:w-[1000px] text-center leading-snug md:leading-[54px]">
            Transforming you Online Business through SEO
          </h1>
        </div>
      </section>

      <section className="relative p-10 md:px-[262px] md:py-[80px] flex flex-col gap-9 items-center w-full justify-center">
        <div className="w-full flex flex-col md:flex-row gap-[66px] justify-between">
          <div className="flex flex-col items-start gap-[10px] md:pt-[78px]">
            <h3 className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-white py-[9px] px-[17px] rounded-full font-semibold text-[14px] leading-[14px]">
              Betting Tips
            </h3>
            <h2 className="font-mediium text-[30.68px] md:text-[40px] w-full sm:w-[530px] md:w-[382px] leading-[45px] text-[#010910]">
              Statistical data in betting
            </h2>
            <p className="text-[16px] text-black leading-[28.8px] font-normal mt-[10px] w-full md:w-[382px]">
              We provide marketing services to startups and small businesses
              looking for a partner for their digital media. We work with you,
              not for you.We are lorem duoa headquartered in North-Eastern
              France, with our 19 associates located across nine countries in
              order to best serve a client base that stretches throughout North
              America, Curabitur accumsan ultricies ultricies. Pellentesque
              dapibus at nulla sed viverra. Fusce tempor orci non massa iaculis,
              eu auctor.
            </p>
          </div>

          <img
            src="https://chopzbetlimited.com/wp-content/uploads/2024/02/leader.jpg"
            alt=""
            className="w-full md:w-[500px]  border-[18px] md:border-[25px] rounded-3xl"
          />
        </div>

        <div className="relative flex flex-col gap-8 items-center w-full justify-center">
          <h3 className="font-mediium text-[30.68px] md:text-[40px] w-full leading-[45px] text-[#010910]">
            Copywriting: What’s branding got to do with it?
          </h3>
          <p className="text-[16px] text-black leading-[28.8px] font-normal w-full">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
            sagittis venenatis massa eu tempus. Integer eu enim diam. In vitae
            vulputate metus, ac dapibus turpis. Vivamus consequat mauris aliquet
            tellus feugiat accumsan. Nam tincidunt dolor vel auctor imperdiet.
            Duis egestas ut ante eget ermentum. Donec eget elit eget urna mattis
            sagittis eu eget dui. Phasellus quis tortor nec nisi rhoncus
            condimentum tempor eu leo. Suspendisse at cursus risus.
          </p>
        </div>

        <div className="relative flex flex-col gap-8 items-center w-full justify-center">
          <h3 className="font-mediium text-[30.68px] md:text-[40px] w-full leading-[45px] text-[#010910]">
            Copywriting: What’s branding got to do with it?
          </h3>
          <p className="text-[16px] text-black leading-[28.8px] font-normal w-full">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
            sagittis venenatis massa eu tempus. Integer eu enim diam. In vitae
            vulputate metus, ac dapibus turpis. Vivamus consequat mauris aliquet
            tellus feugiat accumsan. Nam tincidunt dolor vel auctor imperdiet.
          </p>

          <ul className="text-[16px] text-black leading-[28.8px] font-normal w-full list-decimal pl-12 md:pl-20 mt-[-9px]">
            <li>
              Win Probability: The likelihood of a team or player winning a
              game, calculated based on historical data and performance
              indicators.
            </li>
            <li>
              Win Probability: The likelihood of a team or player winning a
              game, calculated based on historical data and performance
              indicators.
            </li>
            <li>
              Win Probability: The likelihood of a team or player winning a
              game, calculated based on historical data and performance
              indicators.
            </li>
            <li>
              Win Probability: The likelihood of a team or player winning a
              game, calculated based on historical data and performance
              indicators.
            </li>
            <li>
              Win Probability: The likelihood of a team or player winning a
              game, calculated based on historical data and performance
              indicators.
            </li>
          </ul>
        </div>

        <div className="relative flex flex-col gap-8 items-center w-full justify-center">
          <h3 className="font-mediium text-[30.68px] md:text-[40px] w-full leading-[45px] text-[#010910]">
            How to find your brand message?
          </h3>
          <p className="text-[16px] text-black leading-[28.8px] font-normal w-full">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
            sagittis venenatis massa eu tempus. Integer eu enim diam. In vitae
            vulputate metus, ac dapibus turpis. Vivamus consequat mauris aliquet
            tellus feugiat accumsan. Nam tincidunt dolor vel auctor imperdiet.
            Duis egestas ut ante eget ermentum. Donec eget elit eget urna mattis
            sagittis eu eget dui. Phasellus quis tortor nec nisi rhoncus
            condimentum tempor eu leo. Suspendisse at cursus risus.
          </p>
        </div>

        <div className="relative flex flex-col gap-8 items-center w-full justify-center">
          <h3 className="font-mediium text-[30.68px] md:text-[40px] w-full leading-[45px] text-[#010910]">
            Copywriting: What’s branding got to do with it?
          </h3>
          <p className="text-[16px] text-black leading-[28.8px] font-normal w-full">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
            sagittis venenatis massa eu tempus. Integer eu enim diam. In vitae
            vulputate metus, ac dapibus turpis. Vivamus consequat mauris aliquet
            tellus feugiat accumsan. Nam tincidunt dolor vel auctor imperdiet.
          </p>

          <ul className="text-[16px] text-black leading-[28.8px] font-normal w-full list-decimal pl-12 md:pl-20 mt-[-9px]">
            <li>
              Win Probability: The likelihood of a team or player winning a
              game, calculated based on historical data and performance
              indicators.
            </li>
            <li>
              Win Probability: The likelihood of a team or player winning a
              game, calculated based on historical data and performance
              indicators.
            </li>
            <li>
              Win Probability: The likelihood of a team or player winning a
              game, calculated based on historical data and performance
              indicators.
            </li>
            <li>
              Win Probability: The likelihood of a team or player winning a
              game, calculated based on historical data and performance
              indicators.
            </li>
            <li>
              Win Probability: The likelihood of a team or player winning a
              game, calculated based on historical data and performance
              indicators.
            </li>
          </ul>
        </div>

        <Link
          to="/blog/one"
          className="w-full sm:w-[660px] h-[334px] md:w-full md:h-[396px] relative rounded-2xl cursor-pointer group mt-20"
        >
          <div className="absolute z-10 opacity-50 w-full h-full  bg-black rounded-2xl group-hover:opacity-60 transition-all"></div>

          <img
            src="https://www.surfnet.site/wp-content/uploads/2024/03/microsoft-edge-DNADGmifFsc-unsplash-2048x1366.jpg"
            alt=""
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute top-0 bottom-0 left-0 right-0 max-w-max max-h-max mx-auto my-auto z-20 text-white flex flex-col gap-4 items-center justify-center px-5 sm:px-1">
            <h4 className="text-lg leading-[14px] font-medium text-white px-[14px] py-[7px] flex items-center justify-center gap-3">
              Next post
            </h4>

            <h1 className="font-medium md:font-semibold text-[30px] md:text-[40px] w-full sm:w-[550px] md:w-[600px] leading-snug md:leading-snug text-center">
              Advanced Statistical Analysis in Sports Betting: Leveraging Data
              for Success
            </h1>
          </div>
        </Link>
      </section>

      <div className="w-full bg-blue-950 flex flex-col p-10 md:p-20 gap-10 md:px-[130px]">
        <div className="flex flex-col md:flex-row w-full items-center md:justify-between gap-5">
          <h3 className="text-white font-medium text-center md:text-left text-[22px] leading-[35.2px] md:w-[800px]">
            We’re on a mission to build a better future where technology creates
            good jobs for everyone. Fusce sed rutrum risus pulvinar tortor et.
            Aenean suscipit ege.
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

export default BlogThree;
