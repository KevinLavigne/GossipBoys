import Quote from "../components/Quote";
import LogIn from "../components/LogIn";

export default function Home() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row">
        <Quote />
        <LogIn />
      </div>
    </div>
  );
}
