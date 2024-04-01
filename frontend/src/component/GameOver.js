const GameOver = () => {
  return (
    <>
      <p className="mt-40 font-raleway text-[#443091] text-4xl font-bold  text-center">
        GAME <span className="text-[#B50096]">OVER</span>
      </p>
      <div className="text-center mb-8">
        <h6>Oops you run out of time</h6>
        <h6>Better luck next time</h6>
      </div>
      <div className="flex justify-center">
        <button className="bg-primary text-white rounded mr-5">
          Back to menu
        </button>
        <button className="bg-primary text-white rounded">Play again</button>
      </div>
    </>
  );
};

export default GameOver;
