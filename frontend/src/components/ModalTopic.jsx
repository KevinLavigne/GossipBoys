import Popup from "reactjs-popup";
import plus from "../assets/plus.png";

function ModalTopic() {
  const contentStyle = {
    width: "75%",
  };

  return (
    <Popup
      trigger={
        <button type="button">
          <img
            src={plus}
            alt="plus button"
            className="w-9 transition duration-120 ease-out hover:scale-110"
          />
        </button>
      }
      modal
      contentStyle={contentStyle}
    >
      {(close) => (
        <div className="bg-white shadow-lg opacity-95">
          <div className="flex flex-col">
            <button
              type="button"
              onClick={close}
              className="flex justify-end pt-8 pr-8"
            >
              Retour
            </button>
            <h1 className="flex justify-left pl-8 text-2xl">Your new Topic</h1>
          </div>
          <button
            type="button"
            className="text-white font-bold py-2 px-4 rounded-full"
          >
            Submit your question
          </button>
        </div>
      )}
    </Popup>
  );
}

export default ModalTopic;
