import StatsItem from "./StatsItem";

const statsData = [
  {
    endCountNum: 2,
    endCountText: "+",
    text: "Yrs. of Experience",
  },
  {
    endCountNum: 9,
    endCountText: "+",
    text: "Websites Built",
  },
  {
    endCountNum: 95,
    endCountText: "%",
    text: "Clients Satisfied",
  },
];

const Stats = () => {
  return (
    <section
      className="flex justify-center xl:justify-normal mx-auto xl:mx-0 
    xl:w-[380px] gap-4 xl:gap-0"
    >
      {statsData.map((item, index) => {
        return (
          <StatsItem
            endCountNum={item.endCountNum}
            endCountText={item.endCountText}
            text={item.text}
            key={index}
          />
        );
      })}
    </section>
  );
};

export default Stats;
