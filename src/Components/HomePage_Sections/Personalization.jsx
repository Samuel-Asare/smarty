const personalizedData = [
  {
    id: 1,
    number: "1.",
    headerText: "Lorem, ipsum dolor sit amet consectetur",
    details:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus ipsam animi quam nam magni dicta quos officia nostrum, itaque eaque!",
  },
  {
    id: 2,
    number: "2.",
    headerText: "Lorem, ipsum dolor sit amet consectetur",
    details:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus ipsam animi quam nam magni dicta quos officia nostrum, itaque eaque!",
  },
  {
    id: 3,
    number: "3.",
    headerText: "Lorem, ipsum dolor sit amet consectetur",
    details:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus ipsam animi quam nam magni dicta quos officia nostrum, itaque eaque!",
  },
  {
    id: 4,
    number: "4.",
    headerText: "Lorem, ipsum dolor sit amet consectetur",
    details:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus ipsam animi quam nam magni dicta quos officia nostrum, itaque eaque!",
  },
];

const Personalization = () => {
  return (
    <div className="flex md:flex-row flex-col items-center gap-10 px-[2rem] pb-[2rem] pt-[1rem]">
      <section className="mt-[6rem] px-[1rem] md:w-1/2 w-full">
        <div className="flex items-center justify-center">
          <h1 className="font-bold text-center text-3xl w-full ">
            Your personalized learning journey
          </h1>
        </div>
        <div className="mt-10 flex md:flex-wrap md:flex-row flex-col  gap-y-8   items-center justify-center md:items-start md:justify-start">
          {personalizedData.map((data) => (
            <div
              key={data.id}
              className="md:w-1/2 w-[90%] border md:border-none p-[1rem] md:p-[0] shadow-md md:shadow-none md:mb-[0]"
            >
              <div className="font-bold text-xl">{data.number}</div>
              <h4 className="font-semibold">{data.headerText}</h4>
              <p className="text-sm mt-2">{data.details}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="md:w-1/2 w-full flex items-center flex-col justify-between h-full gap-y-8 md:mt-[7rem] mt-[2rem]">
        <p className="text-sm text-center">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus
          pariatur perferendis deleniti rerum doloribus, quae officiis expedita
          nemo odio
        </p>
        <div className="w-[80%]  rounded-lg overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1503676382389-4809596d5290?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="student image"
          />
        </div>
      </section>
    </div>
  );
};

export default Personalization;

// const Article = ({ h1Text, para }) => {
//   return (
//     <>
//       <article className="w-1/2 ">
//         <div className="font-bold text-xl">1.</div>
//         <h4 className="font-semibold">{h1Text}</h4>
//         <p className="text-sm mt-2">{para}</p>
//       </article>
//     </>
//   );
// };
