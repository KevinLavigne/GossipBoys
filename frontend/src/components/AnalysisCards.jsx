/* eslint-disable react/jsx-no-duplicate-props */
import "../App.css";
import ProgressBar from "@ramonak/react-progress-bar";

function AnalysisCards({ data }) {
  return (
    <div className="topic-cards flex flex-col m-4">
      <div className="topic-cards flex flex-col justify-center w-4/5">
        <div className="topic-cards flex flex-col shawdow p-4">
          <div
            className={`topic-cards ${data.color} h-6 w-6 mb-2 boder rounded`}
          />
          <p className="text-xl text-center">{data.text}</p>
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
