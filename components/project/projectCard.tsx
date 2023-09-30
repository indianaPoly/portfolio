import { XLargeText } from "../components/text";

const ProjectCard = ({
  title,
  image,
  onClickCard,
}: {
  title: string;
  image: string;
  onClickCard: () => void;
}) => {
  return (
    <>
      <article
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        className=" transform transition-all duration-500 w-[400px] h-[200px] bg-[#F5DCB1] rounded-2xl mb-40 hover:scale-105 flex justify-between items-center"
      >
        <section
          className="flex w-full h-full justify-center py-[80px]"
          onClick={onClickCard}
        >
          <div className="flex flex-col justify-center items-center">
            <XLargeText textValue={title} />
          </div>
        </section>
      </article>
    </>
  );
};

export default ProjectCard;
