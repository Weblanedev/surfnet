import { MouseEventHandler, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { COUNTRIES_AND_STATES } from "./country-states";
import { useModals } from "./useModal";
import ShowOrderModal from "./show-order";

const Billing = () => {
  const [navbarVisible, setNavbarVisible] = useState<boolean>(false);

  const [selectedCountry, setSelectedCountry] = useState<string>("");
  const [selectedState, setSelectedState] = useState<string>("");

  // State to manage the disabled state of the button
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  // State to manage form field values
  const [cardHolderName, setCardHolderName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expireDate, setExpireDate] = useState("");
  const [cardCVC, setCardCVC] = useState("");

  useEffect(() => {
    // Function to check if all form fields are filled
    const checkFormValidity = () => {
      if (cardHolderName && cardNumber && expireDate && cardCVC) {
        setIsButtonDisabled(false); // Enable the button if all fields are filled
      } else {
        setIsButtonDisabled(true); // Disable the button if any field is empty
      }
    };

    checkFormValidity();
  }, [cardHolderName, cardNumber, expireDate, cardCVC]);

  // Event handlers to update form field values and check validity
  const handleCardHolderNameChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCardHolderName(e.target.value);
  };

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCardNumber(e.target.value);
  };

  const handleExpireDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setExpireDate(e.target.value);
  };

  const handleCardCVCChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCardCVC(e.target.value);
  };

  const handleCountryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCountry(event.target.value);
    setSelectedState("");
  };

  const handleStateChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedState(event.target.value);
  };

  const handleSubmit: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    toggleShowInvoiceModal();
  };

  const showInvoice = useModals(["showInvoice"]);

  function toggleShowInvoiceModal() {
    showInvoice.toggleModal("showInvoice");
  }

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

      <section className="relative border h-[300px] md:h-[400px]">
        <div className="absolute z-10 opacity-20 w-full h-full  bg-black"></div>

        <img
          src="https://seolounge.radiantthemes.com/wp-content/uploads/2018/07/About-Best-Background-Image.jpg?id=836"
          alt=""
          className="w-full h-full object-cover"
        />

        <div className="absolute top-0 z-20 text-white flex flex-col gap-9 md:gap-12 items-center justify-center h-full w-full">
          <h1 className="font-medium md:font-semibold text-[40px] md:text-[60px] w-full sm:w-[550px] md:w-[560px] text-center leading-snug md:leading-[72px]">
            Order Details
          </h1>
        </div>
      </section>

      <section className="relative p-10 md:px-[130px] md:py-[130px] flex flex-col lg:flex-row gap-8 items-center lg:items-start w-full justify-center">
        <div className="flex flex-col gap-8 items-start w-full justify-center lg:pr-8 lg:border-r">
          <div className="flex flex-col gap-2.5 text-[#181616] items-start justify-center lg:w-[720px]">
            <h2 className="text-[32px] font-medium">Billing details</h2>
          </div>

          <div className="w-full lg:w-[720px]">
            <form className="mx-auto w-full flex flex-col gap-5">
              <div className="flex flex-col w-full gap-5 md:flex-row">
                <input
                  type="text"
                  className="border border-gray-300 text-gray-900 text-[15px] block w-full p-[15px]"
                  placeholder="First Name"
                  required
                />
                <input
                  type="text"
                  className="border border-gray-300 text-gray-900 text-[15px] block w-full p-[15px]"
                  placeholder="Last Name"
                  required
                />
              </div>

              <input
                type="text"
                className="border border-gray-300 text-gray-900 text-[15px] block w-full p-[15px]"
                placeholder="Company name (optional)"
                required
              />

              <select
                id="country"
                value={selectedCountry}
                onChange={handleCountryChange}
                className="border border-gray-300 text-gray-900 text-[15px] block w-full p-[15px] pr-20"
              >
                <option className="text-[17px]" value="">
                  Select a country / region
                </option>
                {Object.entries(COUNTRIES_AND_STATES.country)?.map(
                  ([code, name]) => (
                    <option key={code} value={code} className="text-[17px]">
                      {name}
                    </option>
                  )
                )}
              </select>

              <div className="flex flex-col w-full gap-5 md:flex-row">
                <input
                  type="text"
                  className="border border-gray-300 text-gray-900 text-[15px] block w-full p-[15px]"
                  placeholder="Street Address"
                  required
                />

                <input
                  type="text"
                  className="border border-gray-300 text-gray-900 text-[15px] block w-full p-[15px]"
                  placeholder="Apartment, suite, etc. (optional)"
                  required
                />
              </div>

              <input
                type="text"
                className="border border-gray-300 text-gray-900 text-[15px] block w-full p-[15px]"
                placeholder="Town / City"
                required
              />

              <select
                id="state"
                value={selectedState}
                onChange={handleStateChange}
                className="border border-gray-300 text-gray-900 text-[15px] block w-full p-[15px]"
              >
                <option value="" className="text-[17px]">
                  Select a state
                </option>
                {COUNTRIES_AND_STATES.states[selectedCountry]?.map(
                  ({ code, name }) => (
                    <option key={code} value={code} className="text-[17px]">
                      {name}
                    </option>
                  )
                )}
              </select>

              <input
                type="text"
                className="border border-gray-300 text-gray-900 text-[15px] block w-full p-[15px]"
                placeholder="ZIP / Postal Code"
                required
              />

              <input
                type="text"
                className="border border-gray-300 text-gray-900 text-[15px] block w-full p-[15px]"
                placeholder="Phone"
                required
              />

              <input
                type="email"
                className="border border-gray-300 text-gray-900 text-[15px] block w-full p-[15px]"
                placeholder="Email Address"
                required
              />
            </form>

            <div className="flex flex-col gap-5 mt-10 text-[#181616] items-start justify-center lg:w-[720px]">
              <h2 className="text-[32px] font-medium">Additional Details</h2>

              <textarea
                id="message"
                rows={7}
                className="block p-[15px] w-full text-sm text-gray-900 border border-gray-300"
                placeholder="Your Message"
              ></textarea>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-[15px] items-start w-full justify-center">
          <h4 className="font-bold text-[#a20401] leading-[28px]">
            PAYMENT DETAILS
          </h4>

          <div className="flex flex-col items-start justify-center w-full gap-5">
            <p className="text-[#707070] font-normal text-[13px]">
              You are about to make payment for Digital Marketing and Branding
              Service.
            </p>

            <textarea
              id="message"
              rows={7}
              className="block p-[15px] w-full text-sm text-gray-900 border border-gray-300 mt-[-10px]"
              placeholder="Kindly type in this box the service description"
            ></textarea>

            <div className="relative w-full">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                <p className="text-gray-500 font-medium">₦</p>
              </div>

              <input
                type="text"
                defaultValue="25,000 - 37,000"
                className="border border-gray-300 text-gray-900 text-[15px] block w-full p-[15px] ps-10"
                placeholder="Amount"
                required
              />
            </div>
          </div>

          <form>
            <div className="flex flex-wrap gap-3 w-full">
              <label className="relative w-full flex flex-col">
                <span className="font-bold mb-3">Card holder's name</span>
                <input
                  className="rounded-md peer pl-12 pr-2 py-2 border-2 border-gray-200 placeholder-gray-300"
                  type="text"
                  name="card_holders_name"
                  placeholder="JOHN DOE"
                  required
                  value={cardHolderName}
                  onChange={handleCardHolderNameChange}
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute bottom-0 left-0 -mb-0.5 transform translate-x-1/2 -translate-y-1/2 text-black peer-placeholder-shown:text-gray-300 h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                  />
                </svg>
              </label>

              <label className="relative w-full flex flex-col">
                <span className="font-bold mb-3">Card number</span>
                <input
                  className="rounded-md peer pl-12 pr-2 py-2 border-2 border-gray-200 placeholder-gray-300"
                  type="text"
                  name="card_number"
                  required
                  placeholder="0000 0000 0000"
                  value={cardNumber}
                  onChange={handleCardNumberChange}
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute bottom-0 left-0 -mb-0.5 transform translate-x-1/2 -translate-y-1/2 text-black peer-placeholder-shown:text-gray-300 h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                  />
                </svg>
              </label>

              <div className="w-full flex gap-5 flex-col lg:flex-row">
                <label className="relative w-full lg:flex-1 flex flex-col">
                  <span className="font-bold mb-3">Expire date</span>
                  <input
                    className="rounded-md peer pl-12 pr-2 py-2 border-2 border-gray-200 placeholder-gray-300"
                    type="text"
                    name="expire_date"
                    required
                    placeholder="MM/YY"
                    value={expireDate}
                    onChange={handleExpireDateChange}
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute bottom-0 left-0 -mb-0.5 transform translate-x-1/2 -translate-y-1/2 text-black peer-placeholder-shown:text-gray-300 h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </label>

                <label className="relative w-full lg:flex-1 flex flex-col">
                  <span className="font-bold flex items-center gap-3 mb-3">
                    CVC/CVV
                    <span className="relative group">
                      <span className="hidden group-hover:flex justify-center items-center px-2 py-1 text-xs absolute -right-2 transform translate-x-full -translate-y-1/2 w-max top-1/2 bg-black text-white">
                        The 3 digit number on the back of your card
                      </span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </span>
                  </span>
                  <input
                    className="rounded-md peer pl-12 pr-2 py-2 border-2 border-gray-200 placeholder-gray-300"
                    type="text"
                    name="card_cvc"
                    required
                    placeholder="&bull;&bull;&bull;"
                    value={cardCVC}
                    onChange={handleCardCVCChange}
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute bottom-0 left-0 -mb-0.5 transform translate-x-1/2 -translate-y-1/2 text-black peer-placeholder-shown:text-gray-300 h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </label>
              </div>
            </div>

            <p className="text-[#707070] mt-[20px] font-normal text-[13px]">
              Note: Fee charged is decided by the specific type service, and
              based on service demand. It may be lesser or higher.
            </p>

            <h4 className="font-bold text-[#a20401] mt-[20px] leading-[28px]">
              PAYMENT METHODS
            </h4>

            <div className="w-full flex flex-col gap-2 items-start">
              <img
                src="https://help.zazzle.com/hc/article_attachments/360010513393"
                alt=""
                className="w-full"
              />
              <p className="text-[#707070] font-normal text-[13px]">
                Make payment using your debit, credit card & bank account
              </p>
            </div>

            <p className="text-[#161616] font-normal text-[16px] text-left">
              Your personal data will be used to process your order, support
              your experience throughout this website, and for other purposes
              described in our{" "}
              <Link
                to="/privacy-policy"
                className="text-[#a20401] cursor-pointer"
              >
                privacy policy.
              </Link>
            </p>

            <button
              type="submit"
              disabled={isButtonDisabled}
              className="text-base font-medium text-white bg-green-500 rounded-md md:rounded-md px-7 md:px-12 py-[15px] hover:bg-green-600 w-full mt-[22px] transition-colors disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-green-500"
              onClick={handleSubmit}
            >
              Place Order
            </button>
          </form>
        </div>
      </section>

      <div className="w-full bg-blue-950 flex flex-col p-10 md:p-20 gap-10 md:px-[130px]">
        <div className="flex flex-col md:flex-row w-full items-center md:justify-between gap-5">
          <h3 className="text-white font-medium text-center md:text-left text-[22px] leading-[35.2px] md:w-[800px]">
            We’re on a mission to build a better future where technology creates
            good jobs for everyone.
          </h3>

          <Link
            to="/billing"
            className="text-base font-medium text-white bg-green-500 rounded-md md:rounded-md px-7 md:px-12 py-4 md:py-5 hover:bg-green-600 flex items-center justify-center gap-3 max-w-max"
          >
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

      <ShowOrderModal
        show={showInvoice.modals.showInvoice.show}
        toggle={toggleShowInvoiceModal}
      />
    </div>
  );
};

export default Billing;
