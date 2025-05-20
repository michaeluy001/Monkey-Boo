const GameOverForm = (props) => {
    const handleSubmit = async (e) => {
        e.preventDefault();

        const fromData = {
            playerName: e.target.
        }
    }



  return (
    <>
      <form className="flex flex-col gap-2 items-center m-5" method="POST" onSubmit={handleSubmit} >
        <input type="hidden" value={props.score} name="score" />
        <input
          name="playerName"
          type="text"
          id="input"
          className="rounded-2xl h-10 border-2 border-green-800 ring-1 ring-green-200 px-2 placeholder:text-center"
          placeholder="Enter Your Name"
        />
        <input type="submit" className="w-1/3 h-8 border-2 rounded-2xl" />
      </form>
    </>
  );
};
export default GameOverForm;
