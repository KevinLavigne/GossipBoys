import "../App.css";
import { useNavigate } from "react-router-dom";
import starBlack from "../assets/star_black.svg";
import starYellow from "../assets/star_yellow.svg";

function DashboardCards({ data, handleCheckStar }) {
  const navigate = useNavigate();

  return (
    <div className="flex flex-row w-11/12 h-full justify-center mr-8">
      <div className="flex justify-between bg-white text-darkGrey w-11/12 mb-8 shadow-lg ">
        <div
          className=" flex flex-start linkDashboardCard"
          role="link"
          onClick={() => {
            navigate(`/dashboard/${data.id}`);
          }}
        >
          <h3 className="p-3 text-darkGrey">{data.title}</h3>
          <img className="h-8" src={data.img} alt="icone" />
        </div>
        <div className="flex flex-col">
          <div className="flex justify-end pb-14 m-3">
            <h3 className="flex items-center mr-14 text-darkGrey">
              {data.reactions} Reactions
            </h3>
            <button type="button" onClick={() => handleCheckStar(data)}>
              {data.check ? (
                <img src={starYellow} alt="Etoile" className="w-7" />
              ) : (
                <img src={starBlack} alt="Etoile" className="w-7" />
              )}
            </button>
          </div>
          <div className="m-4 text-darkGrey text-xs">
            <h4 className="text-darkGrey">Last Feedbacks: {data.date}</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardCards;
