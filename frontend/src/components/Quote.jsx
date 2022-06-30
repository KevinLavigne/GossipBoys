import "../App.css";
import Bitchmeplease from "../assets/newlogotitlewhite.png";

function Quote() {
  return (
    <div className="left">
      <div className="quote">
        <h1>&quot;The only place where bitching is caring.&quot;</h1>
      </div>
      <div className="quote-wrapper">
        <img className="logo" src={Bitchmeplease} alt="" />
      </div>
    </div>
  );
}

export default Quote;
