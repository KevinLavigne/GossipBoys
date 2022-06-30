import "../App.css";
import { useNavigate } from "react-router-dom";
import etoile from "../assets/etoile.png";

function DashboardCards({ data }) {
  const navigate = useNavigate();

  return (
    <div className="flex flex-row w-11/12 h-full justify-center mr-8">
      <div className="flex justify-between bg-white text-darkGrey w-11/12 mb-8 shadow-lg ">
        <div
          className=" flex flex-start"
          role="link"
          onClick={() => {
            navigate(`/dashboard/${data.id + 1}`);
          }}
        >
          <h3 className="p-3">{data.title}</h3>
          <img className="h-8" src={data.img} alt="icone" />
        </div>
        <div className="flex flex-col">
          <div className="flex justify-end pb-14 m-3">
            <h3 className="flex items-center">{data.reactions} Reactions</h3>
            <button type="button">
              <img src={etoile} alt="Etoile" className="w-7 ml-14" />
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
