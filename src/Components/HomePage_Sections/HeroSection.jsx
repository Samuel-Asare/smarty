import phone_image from "../../assets/Header_Section/Phone_mockup.svg";

const HeroSection = () => {
  return (
    <div className="pt-[6rem] md:pt-[11rem] px-8 flex items-center md:h-[80vh] flex-col md:flex-row">
      <article className="md:w-1/2  h-full">
        <h1 className="font-bold text-5xl md:text-7xl">
          unleashing your learning online
        </h1>
        <p className="mt-[1.5rem]">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus
          pariatur perferendis deleniti rerum doloribus, quae officiis expedita
          nemo odio voluptatem suscipit culpa aliquam eligendi maxime eum
          doloremque adipisci odit exercitationem.
        </p>
        <div className="mt-[1.5rem] flex items-center  md:pr-[6rem] ">
          <button className="bg-[#05095D] text-white px-4 py-2 mx-4 rounded-3xl text-center font-semibold flex items-center justify-center mr-10">
            get more
          </button>
          <button className="font-semibold">learn more</button>
        </div>
      </article>
      <div className="md:w-1/2  h-full flex items-center justify-center mt-[1rem]  lg:mt-[2rem] ">
        <img
          src={phone_image}
          className="w-[60%]  mt-[2irem] md:mt-[0rem] md:w-[60%] lg:w-[40%]"
          alt="phone image mockup"
        />
      </div>
    </div>
  );
};

export default HeroSection;
