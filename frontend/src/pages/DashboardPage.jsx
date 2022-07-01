import Dashboard from "../components/Dashboard";
import NavBar from "../components/NavBar";
import Header from "../components/header";

function DashboardPage() {
  return (
    <div className="flex flex-col  w-full h-full">
      <Header isDashboard={true} />
      <NavBar />
      <Dashboard />
    </div>
  );
}
export default DashboardPage;
