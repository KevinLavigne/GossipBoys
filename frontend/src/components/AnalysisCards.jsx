/* eslint-disable react/jsx-no-duplicate-props */
import "../App.css";
import ProgressBar from "@ramonak/react-progress-bar";

function AnalysisCards({ data }) {
  return (
    <div className="flex flex-col w-full m-8">
      <div className="flex flex-col mr-32">
        <div className="flex flex-col shadow-lg p-4">
          <div className={`${data.color} h-6 w-6 mb-2 boder rounded`} />
          <p className="text-xl text-center">{data.comments}</p>
          <div className="mt-4 opacity-50">
            <ProgressBar
              completed={data.completed}
              bgColor="#48BB1D"
              labelColor="white"
              labelSize="1rem"
              animateOnRender={true}
              baseBgColor="#F00306"
              height={28}
              labelAlignment="center"
              ariaValuetext="completed"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AnalysisCards;
