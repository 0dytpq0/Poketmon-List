type CardProps = {
  name: string;
  poketmonNum: number;
  poketmonImg: string;
  // onClickFn: React.MouseEventHandler<HTMLDivElement>;
};

function PoketmonCard({
  name,
  poketmonNum,
  poketmonImg,
}: // onClickFn: handleCardClick,
CardProps) {
  return (
    <div
      className={
        "flex flex-col items-start justify-center h-52 border rounded-lg shadow-md hover:shadow-lg transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 hover:opacity-50 duration-300"
      }
      // onClick={handleCardClick}
    >
      <div className="relative flex items-center justify-center w-full h-1/2">
        <img className="w-20 h-auto mb-4 aspect-auto" src={poketmonImg} />
      </div>
      <h1 className="mb-2 text-xl font-semibold">{name}</h1>
      <p>도감번호 : {poketmonNum}</p>
    </div>
  );
}

export default PoketmonCard;
