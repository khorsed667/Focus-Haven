import StudentDashboard from "./StudentDashboard/StudentDashboard";
import InstractorDashboard from "./InstractorDashboard/InstractorDashboard";
import AdminDashboard from "./AdminDashboard/AdminDashboard";
import useUser from "../../hooks/useUser";

const Dashboard = () => {
  const [currentUserRole] = useUser();
  console.log(currentUserRole);

  return (
    <div>
      {currentUserRole === 'student' && <StudentDashboard></StudentDashboard>}
      {currentUserRole === 'Instractor' && <InstractorDashboard></InstractorDashboard>}
      {currentUserRole === 'Admin' && <AdminDashboard></AdminDashboard>}
    </div>
  );
};

export default Dashboard;
