import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Error404() {
  const navigate = useNavigate();

  useEffect(() => {
    const redirect = setTimeout(() => {
      navigate("/");
    }, 15000);
    return () => {
      clearTimeout(redirect);
    };
  }, []);

  function home() {
    navigate("/");
  }

  return (
    <div>
      <p>DoGo back! ick here !</p>
      <button onClick={() => home()} type="submit">
        return
      </button>
    </div>
  );
}
