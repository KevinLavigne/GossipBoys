import "../App.css";
import { useNavigate } from "react-router-dom";
import Flamme from "../assets/Flamme.png";
import etoile from "../assets/etoile.png";

function DashboardCards({ data }) {
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
        <div className="flex flex-col dashboard-card-body justify-center items-center p-4">
          <div className="dashboard-card-body-item">
            <div className="dashboard-card-body-item-header mb-4 text-gray-500">
              <h4>Last Feedbacks: {data.date}</h4>
            </div>
          </div>
          <div className="dashboard-card-body-item">
            <div className="dashboard-card-body-item-header text-gray-500">
              <h4>Posted By : {data.Poster}</h4>
            </div>
          </div>
        </div>
        <div className=" flex flex-start w-8 m-2">
          <img className="w-8" src={data.img} alt="icone" />
        </div>
      </div>
      <div className="flex flex-col bglogin w-1/5 h-full justify-center items-center mb-4">
        <h3 className="mb-4 mt-12">{data.reactions} Reactions</h3>
        <div className="flex flex-row justify-center mb-4">
          <img src={Flamme} alt="Flamme" className="w-16" />
          <img src={etoile} alt="Etoile" className="w-16" />
        </div>
      </div>
    </div>
  );
}

export default DashboardCards;
