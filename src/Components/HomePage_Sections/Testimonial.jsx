const Testimonial = () => {
  return (
    <div className="pt-[5rem] flex pb-[3rem] px-[2rem] flex-col md:flex-row">
      <div className="md:w-1/2 w-full  flex items-center justify-center">
        <img
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="person image"
          className="object-cover w-[45%] rounded-md"
        />
      </div>
      <div className="md:w-1/2 w-full flex items-center md:text-start text-center mt-[1.5rem] md:mt-[0] md:items-start  justify-center flex-col">
        <h1 className="font-bold text-[2rem]">
          “I love that they keep their product simple, you can learn as many
          courses as you want”
        </h1>
        <h6 className="mt-[1rem] font-semibold">Robbin Collins</h6>
        <p className="text-sm">Los Angeles</p>
        <button className="mt-[3rem] bg-[#05095D] text-white px-4 py-2 font-semibold rounded-3xl text-center">
          read more
        </button>
      </div>
    </div>
  );
};

export default Testimonial;
