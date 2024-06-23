import StudentDashboard from "./StudentDashboard/StudentDashboard";
import InstractorDashboard from "./InstractorDashboard/InstractorDashboard";
import AdminDashboard from "./AdminDashboard/AdminDashboard";
import useUser from "../../hooks/useUser";

const Dashboard = () => {
  const [currentUserRole] = useUser();
  // console.log(currentUserRole);

  return (
    <div>
      {currentUserRole === 'student' && <StudentDashboard></StudentDashboard>}
      {currentUserRole === 'instractor' && <InstractorDashboard></InstractorDashboard>}
      {currentUserRole === 'admin' && <AdminDashboard></AdminDashboard>}
    </div>
  );
};

export default Dashboard;
