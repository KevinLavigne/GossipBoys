import { Link } from "react-router-dom";

function Disclaimer() {
  return (
    <div className="h-screen bg-darkRed flex flex-col justify-center items-center">
      <div className="w-5/6">
        <h1 className="disclaimer-text flex justify-center text-white">
          Warning !
        </h1>
        <div className="text-white flex justify-center disclaimer-paragraph items-center text-5xl p-52">
          The following website contains material that may be harmful or
          traumatizing to some audiences
        </div>
        <Link to="/login" className="flex justify-center">
          <button
            type="button"
            className="pl-9  pr-9 rounded-full text-white transition duration-150 ease-out hover:scale-125 disclaimer-button mb-12"
          >
            <img
              src="https://cdn-icons.flaticon.com/png/512/2767/premium/2767146.png?token=exp=1656629534~hmac=ba99158890f29a5cf6526c9b4f957f6c"
              alt="eye of the disclaimer"
              className="disclaimer-eye"
            />
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Disclaimer;
