import { useState } from "react";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
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
          <h1 className="font-medium md:font-semibold text-[40px] md:text-[44px] w-[550px] md:w-[1000px] text-center leading-snug md:leading-[54px]">
            Terms of Use & Privacy Policy
          </h1>
        </div>
      </section>

      <section className="relative p-10 md:px-[262px] md:py-[80px] flex flex-col gap-9 items-center w-full justify-center">
        <div className="relative flex flex-col gap-8 items-center w-full justify-center">
          <h2 className="font-mediium text-[30.68px] md:text-[40px] w-full leading-[45px] text-[#010910]">
            Who we are{" "}
          </h2>
          <p className="text-[16px] text-black leading-[28.8px] font-normal mt-[10px] w-full">
            We provide marketing services to startups and small businesses
            looking for a partner for their digital media. We work with you, not
            for you.We are lorem duoa headquartered in North-Eastern France,
            with our 19 associates located across nine countries in order to
            best serve a client base that stretches throughout North America,
            Curabitur accumsan ultricies ultricies. Pellentesque dapibus at
            nulla sed viverra. Fusce tempor orci non massa iaculis, eu auctor.
          </p>
        </div>

        <div className="relative flex flex-col gap-8 items-center w-full justify-center">
          <h3 className="font-mediium text-[30.68px] md:text-[40px] w-full leading-[45px] text-[#010910]">
            Comments{" "}
          </h3>
          <p className="text-[16px] text-black leading-[28.8px] font-normal w-full">
            When visitors leave comments on the site we collect the data shown
            in the comments form, and also the visitor’s IP address and browser
            user agent string to help spam detection. An anonymized string
            created from your email address (also called a hash) may be provided
            to the Gravatar service to see if you are using it. The Gravatar
            service privacy policy is available here:
            https://densefit.com/privacy-policy/. After approval of your
            comment, your profile picture is visible to the public in the
            context of your comment.
          </p>
        </div>

        <div className="relative flex flex-col gap-8 items-center w-full justify-center">
          <h3 className="font-mediium text-[30.68px] md:text-[40px] w-full leading-[45px] text-[#010910]">
            Media{" "}
          </h3>
          <p className="text-[16px] text-black leading-[28.8px] font-normal w-full">
            If you upload images to the website, you should avoid uploading
            images with embedded location data (EXIF GPS) included. Visitors to
            the website can download and extract any location data from images
            on the website.
          </p>

          <ul className="text-[16px] text-black leading-[28.8px] font-normal w-full list-decimal pl-12 md:pl-20 mt-[-9px]">
            <li>
            If you have an account on this site, or have left comments, you can request to receive an exported file of the personal data we hold about you, including any data you have provided to us.
            </li>
            <li>
            If you have an account on this site, or have left comments, you can request to receive an exported file of the personal data we hold about you, including any data you have provided to us.
            </li>
            <li>
            If you have an account on this site, or have left comments, you can request to receive an exported file of the personal data we hold about you, including any data you have provided to us.
            </li>
            <li>
            If you have an account on this site, or have left comments, you can request to receive an exported file of the personal data we hold about you, including any data you have provided to us.
            </li>
            <li>
            If you have an account on this site, or have left comments, you can request to receive an exported file of the personal data we hold about you, including any data you have provided to us.
            </li>
            
          </ul>
        </div>

        <div className="relative flex flex-col gap-8 items-center w-full justify-center">
          <h3 className="font-mediium text-[30.68px] md:text-[40px] w-full leading-[45px] text-[#010910]">
            Cookies{" "}
          </h3>
          <p className="text-[16px] text-black leading-[28.8px] font-normal w-full">
            If you leave a comment on our site you may opt-in to saving your
            name, email address and website in cookies. These are for your
            convenience so that you do not have to fill in your details again
            when you leave another comment. These cookies will last for one
            year. If you visit our login page, we will set a temporary cookie to
            determine if your browser accepts cookies. This cookie contains no
            personal data and is discarded when you close your browser. When you
            log in, we will also set up several cookies to save your login
            information and your screen display choices. Login cookies last for
            two days, and screen options cookies last for a year. If you select
            “Remember Me”, your login will persist for two weeks. If you log out
            of your account, the login cookies will be removed. If you edit or
            publish an article, an additional cookie will be saved in your
            browser. This cookie includes no personal data and simply indicates
            the post ID of the article you just edited. It expires after 1 day.
          </p>
        </div>

        <div className="relative flex flex-col gap-8 items-center w-full justify-center">
          <h3 className="font-mediium text-[30.68px] md:text-[40px] w-full leading-[45px] text-[#010910]">
          Embedded content from other websites          </h3>
          <p className="text-[16px] text-black leading-[28.8px] font-normal w-full">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
            sagittis venenatis massa eu tempus. Integer eu enim diam. In vitae
            vulputate metus, ac dapibus turpis. Vivamus consequat mauris aliquet
            tellus feugiat accumsan. Nam tincidunt dolor vel auctor imperdiet.
          </p>

          <ul className="text-[16px] text-black leading-[28.8px] font-normal w-full list-decimal pl-12 md:pl-20 mt-[-9px]">
            <li>
            If you have an account on this site, or have left comments, you can request to receive an exported file of the personal data we hold about you, including any data you have provided to us.
            </li>
            <li>
            If you have an account on this site, or have left comments, you can request to receive an exported file of the personal data we hold about you, including any data you have provided to us.
            </li>
            <li>
            If you have an account on this site, or have left comments, you can request to receive an exported file of the personal data we hold about you, including any data you have provided to us.
            </li>
            <li>
            If you have an account on this site, or have left comments, you can request to receive an exported file of the personal data we hold about you, including any data you have provided to us.
            </li>
            <li>
            If you have an account on this site, or have left comments, you can request to receive an exported file of the personal data we hold about you, including any data you have provided to us.
            </li>
            
          </ul>
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

export default PrivacyPolicy;
