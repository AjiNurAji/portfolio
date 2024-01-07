"use client";

const Hamburger = ({ refBurger, active, handle }) => {
  return (
    <div className="bg-dark rounded-full flex justify-between items-center gap-2 p-1 pr-3">
      <button
        className="w-8 h-8 rounded-full flex justify-center items-center bg-transparent hover:bg-border-botton hover:bg-opacity-5"
        onClick={() => handle(!active)}
        ref={refBurger}
      >
        <div className="w-5 h-3 relative flex justify-center items-center">
          <span className="line top-0"></span>
          <span className="line scale-x-100 -translate-y-1/2 top-1/2 bottom-1/2"></span>
          <span className="line bottom-0"></span>
        </div>
      </button>

      <div className="w-10">
        <p className="font-medium">{!active ? "Menu" : "Close"}</p>
      </div>
    </div>
  );
};

export default Hamburger;
