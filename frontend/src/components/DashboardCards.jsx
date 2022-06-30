import "../App.css";
import { useNavigate } from "react-router-dom";
import starBlack from "../assets/star_black.svg";
import starYellow from "../assets/star_yellow.svg";

function DashboardCards({ data, handleCheckStar }) {
  const navigate = useNavigate();

  return (
    <div
      className="flex flex-row w-11/12 h-full justify-center mr-8"
      role="link"
      onClick={() => {
        navigate(`/dashboard/${data.id}`);
      }}
    >
      <div className="flex flex-col bglongin3 w-4/5 h-full mb-8">
        <div className=" flex flex-start">
          <h3>{data.title}</h3>
        </div>
        <div className="flex flex-col">
          <div className="flex justify-end pb-14 m-3">
            <h3 className="flex items-center">{data.reactions} Reactions</h3>
            <button type="button" onClick={() => handleCheckStar(data)}>
              {data.check ? (
                <img src={starBlack} alt="Etoile" className="w-7 ml-14" />
              ) : (
                <img src={starYellow} alt="Etoile" className="w-7 ml-14" />
              )}
            </button>
          </div>
          <div className="m-4 text-darkGrey text-xs">
            <h4>Last Feedbacks: {data.date}</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardCards;
