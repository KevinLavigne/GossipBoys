import Dashboard from "../components/Dashboard";
import NavBar from "../components/NavBar";
import Header from "../components/header";

function DashboardPage() {
  return (
    <div>
      <Header isDashboard={true} />
      <NavBar />
      <Dashboard />
    </div>
  );
}
export default DashboardPage;
