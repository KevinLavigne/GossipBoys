/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
import Popup from "reactjs-popup";
import { set, useForm } from "react-hook-form";
import axios from "axios";
import { useState } from "react";

import plus from "../assets/plus.png";

function ModalTopic() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [mailData, setMailData] = useState({
    subject: "",
    category: "company",
    email: "",
  });

  const SubmitMail = () => {
    axios
      .post(`http://localhost:5000/sendEmail`, mailData)
      .then((res) => {
        console.warn(res);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const sendingMail = () => {
    SubmitMail();
  };

  const handleChange = (e) => {
    setMailData({
      ...mailData,
      [e.target.name]: e.target.value,
    });
  };

  const [data, setData] = useState([]);

  const [radioStatus, setradioStatus] = useState("Public");
  const [email, setEmail] = useState("");

  const handleRadio = (value) => {
    setradioStatus(value);
  };

  const contentStyle = {
    width: "45%",
  };

  return (
    <Popup
      trigger={
        <button type="button">
          <img
            src={plus}
            width="15px"
            height="15px"
            alt="plus button"
            className="transition duration-150 ease-out hover:scale-125 "
          />
        </button>
      }
      modal
      contentStyle={contentStyle}
    >
      {(close) => (
        <div className="bg-white shadow-lg opacity-95 p-12">
          <div className="flex flex-col">
            <button
              type="button"
              onClick={close}
              className="flex justify-end text-02e494 text-6xl font-bold drop-shadow-md -mt-12 -mr-8"
            >
              &times;
            </button>
            <h1 className="flex text-7xl text-darkGrey mb-12">Let's Gossip</h1>
          </div>
          <form onSubmit={handleSubmit(sendingMail)} className="flex flex-col">
            <label className="flex flex-col">
              <h2 className="text-[#3e3d3d]">
                What do you want to bitch about today ?
              </h2>
              <input
                className="bg-gray-50 shadow appearance-none border border-grey-500 rounded w-35 py-2 px-3 text-gray-700 mb-3 mt-3"
                required
                name="subject"
                onChange={(e) => handleChange(e)}
                value={mailData.subject}
              />
            </label>
            <h4 className="mb-4 mt-6 text-[#3e3d3d]">Bitching Subject</h4>
            <div className="flex flex-row gap-20">
              <div className="flex flex-col">
                <select
                  {...register("categorie")}
                  name="category"
                  className="w-36"
                  onChange={(e) => handleChange(e)}
                >
                  <option value="human ressources">Human Ressources</option>
                  <option value="product owner">Product Owner</option>
                  <option value="accessibility">Accessibility</option>
                  <option value="report">Report</option>
                  <option value="well being">Well Being</option>
                  <option value="Sales">Sales</option>
                  <option value="life at work">Life at work</option>
                  <option value="other">Other</option>
                </select>
                {radioStatus === "Private" ? (
                  <>
                    <h5 className="mb-4 mt-6 text-[#3e3d3d]">
                      Invite Bitchers
                    </h5>
                    <div className="flex">
                      <input
                        type="text"
                        className="mb-6 bg-gray-50 shadow border border-gray-300 text-gray-900 rounded block w-full p-2.5"
                        placeholder="Add Emails"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                      />
                      <button
                        type="button"
                        className="text-2xl mb-5 ml-3 transition duration-500 ease-out hover:scale-105"
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
                        return <h6 className="text-darkGrey">{item}</h6>;
                      })}
                  </>
                ) : (
                  ""
                )}
              </div>
              <form>
                <div className="flex flex-col justify-center gap-4 mb-5">
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
                    Private
                  </label>
                </div>
              </form>
            </div>
            <div className="flex justify-center mt-6">
              <input
                type="submit"
                value="Start Bitching"
                className="bg-darkRed text-wight text-lg rounded-full w-48 p-3 shadow-lg transition duration-500 ease-out hover:scale-105"
                onSubmit={(e) => {
                  e.preventDefault();
                  setMailData({
                    ...mailData,
                    email: data,
                  });
                  sendingMail;
                }}
              />
            </div>
          </form>
        </div>
      )}
    </Popup>
  );
}

export default ModalTopic;
