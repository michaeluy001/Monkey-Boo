import Button from "./Button";

const LevelUpDialog = (props) => {
  const handleNext = () => {
    props.onNextLevel();
  };

  return (
    <>
      <div className="bg-amber-300/30 h-screen  w-full  fixed top-0 left-0 flex items-center">
        <div className="bg-amber-400 flex flex-col text-3xl h-1/3 w-full border-2 content-center  justify-items-center text-center">
          <p>Great!</p>
          <Button type="nextLevel" onClick={handleNext}>
            Next Level
          </Button>
        </div>
      </div>
    </>
  );
};

export default LevelUpDialog;
