/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
import Popup from "reactjs-popup";
import { set, useForm } from "react-hook-form";
import { useState } from "react";
import svg from "../assets/return_button_2.svg";
import plus from "../assets/plus.png";

function ModalTopic() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.warn(data);

  const [radioStatus, setradioStatus] = useState("Public");
  const [email, setEmail] = useState("");
  const [data, setData] = useState([]);

  const handleRadio = (value) => {
    setradioStatus(value);
  };

  const contentStyle = {
    width: "35%",
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
              className="flex justify-end font-medium"
            >
              <img src={svg} alt="bouton de retour" />
            </button>
            <h1 className="flex justify-left text-7xl text-[#ffc09f] mb-12">
              Let's Gossip
            </h1>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
            <label className="flex flex-col">
              <h2 className="text-[#3e3d3d]">
                What Do you want to bitch about today ?
              </h2>
              <input
                className="shadow appearance-none border border-grey-500 rounded w-35 py-2 px-3 text-gray-700 mb-3 mt-3"
                required
              />
            </label>
            <h4 className="mb-4 text-[#3e3d3d]">
              Add a category to your Topic
            </h4>
            <div className="flex flex-row gap-20">
              <div className="flex flex-col">
                <select {...register("categorie")} className="w-36">
                  <option value="company">Company</option>
                  <option value="life at work">Life at work</option>
                  <option value="other">Other</option>
                </select>
                {radioStatus === "Private" ? (
                  <>
                    <h5 className="mb-4 mt-4 text-[#3e3d3d]">
                      Invite Bitchers
                    </h5>
                    <div className="flex">
                      <input
                        type="text"
                        placeholder="Add Emails"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                      />
                      <button
                        type="button"
                        onClick={(e) => {
                          setData([...data, email]);
                          setEmail("");
                        }}
                      >
                        +
                      </button>
                    </div>
                    {data.length > 0 &&
                      data.map((item) => {
                        return <p>{item}</p>;
                      })}
                  </>
                ) : (
                  ""
                )}
              </div>
              <form>
                <div className="flex flex-col justify-center gap-4">
                  <label>
                    <input
                      type="radio"
                      checked={radioStatus === "Public"}
                      className="mr-1"
                      onChange={() => handleRadio("Public")}
                    />
                    Public
                  </label>
                  <label>
                    <input
                      type="radio"
                      checked={radioStatus === "Private"}
                      className="mr-1"
                      onChange={() => handleRadio("Private")}
                    />
                    private
                  </label>
                </div>
              </form>
            </div>
            <div className="flex justify-center">
              <input
                type="submit"
                value="Start Bitching"
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
