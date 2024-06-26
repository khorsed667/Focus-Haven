import useFetch from "../../../hooks/useFetch";
import classes from './../../../../public/classes.json'

const EnrolledClass = () => {

  const url = 'https://focus-haven-server.onrender.com/payments';
  const [data] = useFetch(url);
  const targetedClasses = classes.filter(cls => data.some(order => order.className === cls.className));

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border rounded-lg">
        <thead>
          <tr>
            <th className="px-4 py-2 border">Class Name</th>
            <th className="px-4 py-2 border">Date</th>
            <th className="px-4 py-2 border">Instructor</th>
            <th className="px-4 py-2 border">Status</th>
          </tr>
        </thead>
        <tbody>
          {/* Replace with dynamic content */}
          {
            targetedClasses.map((cls, index) => <tr key={index}>
              <td className="px-4 py-2 border">{cls.className}</td>
              <td className="px-4 py-2 border">2024-06-16</td>
              <td className="px-4 py-2 border">{cls.instructorName}</td>
              <td className="px-4 py-2 border">Enrolled</td>
            </tr>)
          }
          {/* Add more rows as needed */}
        </tbody>
      </table>
    </div>
  );
};

export default EnrolledClass;
