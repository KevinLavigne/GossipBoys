import "../App.css";
import loginlogo from "../assets/logo-loginbackground.png";

function Quote() {
  return (
    <div className="left">
      <div className="quote-wrapper">
        <img className="logo" src={loginlogo} alt="" />
        <div className="quote">
          <h1>
            &quot;The best way to predict the future is to create it.&quot;
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Quote;
