import { useContext } from "react";
import useClass from './../../../hooks/useClass'
import { AuthContext } from "../../Authentication/Providers/AuthProvider";
import { Link } from "react-router-dom";

const MyClasses = () => {
  const [classes] = useClass();
  const { user } = useContext(AuthContext);
  
  const selectedClass = classes.filter(
    (cls) => cls.instructorGmail === user.email
  );
  console.log(selectedClass);

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border text-center rounded-lg">
        <thead>
          <tr>
            <th className="px-4 py-2 border">Class Name</th>
            <th className="px-4 py-2 border">Status</th>
            <th className="px-4 py-2 border">Enrolled Students</th>
            <th className="px-4 py-2 border">Feedback</th>
            <th className="px-4 py-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* Replace with dynamic content */}
          {selectedClass.map((singleClass) => (
            <tr key={singleClass._id}>
              <td className="px-4 py-2 border">{singleClass.className}</td>
              <td className="px-4 py-2 border">{singleClass.status}</td>
              <td className="px-4 py-2 border">
                {singleClass.enrolledStudents}
              </td>
              <td className="px-4 py-2 border">
                {singleClass.feedback || "..."}
              </td>
              <td className="px-4 py-2 border">
                <Link to={'/update'}>
                  <button className="border-2 border-slate-200 hover:bg-gray-600 transition-all duration-300 me-3 hover:text-white font-bold py-2 px-4 hover:rounded-2xl">
                    Update
                  </button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyClasses;
