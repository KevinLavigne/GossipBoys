import "../App.css";

function DashboardCards({ data }) {
  return (
    <div className="flex flex-row">
      <div className="flex flex-col">
        <div className="">
          <h3>{data.title}</h3>
        </div>
        <div className="dashboard-card-body">
          <div className="dashboard-card-body-item">
            <div className="dashboard-card-body-item-header">
              <h4>Last Feedbacks: {data[0].date}</h4>
            </div>
          </div>
          <div className="dashboard-card-body-item">
            <div className="dashboard-card-body-item-header">
              <h4>Posted By : {data[0].Poster}</h4>
            </div>
          </div>
          <div className="dashboard-card-body-item" />
        </div>
      </div>
      <div className="flex flex-col">
        <h3>{data[0].reactions}</h3>
      </div>
    </div>
  );
}

export default DashboardCards;
