import SkillCard from "./SkillCard";

const SkillSection = () => {
  return (
    <div className="bg-secondaryC">
      <div className="container py-10">
        <h3 className="inline-block px-5 rounded-3xl uppercase bg-primaryC text-shC mx-5">
          Skills
        </h3>
      </div>
      <SkillCard />
    </div>
  );
};

export default SkillSection;
