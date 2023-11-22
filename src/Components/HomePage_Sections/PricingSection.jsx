import phone_mockup from "../../assets/Pricing_Section/phone_mockup.svg";

const PricingSection = () => {
  return (
    <div className="bg-[#F5F5F5] mt-[3rem]- pt-[1.5rem]   md:h-[60vh] h-[90vh]  overflow-hidden px-[2rem]">
      <h5 className="text-center font-bold text-2xl">One platform One price</h5>
      <section className="flex md:flex-row flex-col text-center md:items-start md:justify-evenly md:mt-[5rem] mt-[3rem]">
        <div className="md:w-1/3  w-full">
          <p className="text-sm">
            Take your e-learning expertise to new heights. smarty gives you the
            training you need, on the topics you want -all from industry-leading
            e-learning gurus
          </p>
          <button className="mt-[3rem] text-red-600 font-semibold">
            learn more
          </button>
        </div>
        <div className="md:w-1/3  w-full order-3 md:order-2 flex items-center justify-center">
          <img
            src={phone_mockup}
            alt="pricing phone mockup"
            className="mb-[-10%] md:w-[70%] w-[50%] "
          />
        </div>
        <div className="md:w-1/3 w-full order-2 md:order-3 text-center mt-[1rem] md:mt-[0] mb-[1rem] md:mb-[0]">
          <h4 className="font-bold text-[1.7rem]">$5.99</h4>
          <p className="mt-[1rem]">/month</p>

          <button className="mt-[2.5rem] bg-[#05095D] text-white px-4 py-2  rounded-3xl text-center font-semibold">
            get started
          </button>
        </div>
      </section>
    </div>
  );
};

export default PricingSection;
