/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
import Popup from "reactjs-popup";
import { useForm } from "react-hook-form";
import cities from "../data/modalData";
import plus from "../assets/plus.png";

function ModalTopic() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.warn(data);

  const contentStyle = {
    width: "55%",
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
        <div className="bg-white shadow-lg opacity-95 p-14">
          <div className="flex flex-col">
            <button
              type="button"
              onClick={close}
              className="flex justify-end pr-8 font-medium"
            >
              {"< Retour"}
            </button>
            <h1 className="flex justify-left text-7xl text-[#ffc09f] mb-12">
              Your new Topic
            </h1>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
            <label className="flex flex-col">
              <h2 className="text-[#3e3d3d]"> Ask your question </h2>
              <input
                className="shadow appearance-none border border-grey-500 rounded w-35 py-2 px-3 text-gray-700 mb-3 mt-3"
                required
              />
            </label>

            <label className="flex flex-col">
              <h3 className="text-[#3e3d3d]">
                Add some context to your question
              </h3>
              <input
                className="shadow appearance-none border border-grey-500 rounded w-35 py-2 px-3 text-gray-700 mb-3 mt-3"
                required
              />
            </label>
            <h4 className="mb-4 text-[#3e3d3d]">
              Add a category to your Topic
            </h4>
            <select {...register("categorie")} className="w-36">
              <option value="company">Company</option>
              <option value="life at work">Life at work</option>
              <option value="other">Other</option>
            </select>
            <h5 className="mb-4 mt-4 text-[#3e3d3d]">Your Agency</h5>
            <select {...register("Agency")} className="w-36">
              {cities.map((citie) => (
                <option value={citie.city}>{citie.city}</option>
              ))}
            </select>
            <div className="flex justify-center">
              <input
                type="submit"
                value="Submit a new Topic"
                className="bg-[#ffc09f] text-[#3e3d3d] text-lg rounded-full w-48 p-3 shadow-lg transition duration-500 ease-out hover:scale-105"
              />
            </div>
          </form>
        </div>
      )}
    </Popup>
  );
}

export default ModalTopic;
