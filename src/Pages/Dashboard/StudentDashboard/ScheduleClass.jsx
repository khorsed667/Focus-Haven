const ScheduleClass = () => {
  // TODO: Need to implement scheduled class Functionality....
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border rounded-lg">
        <thead>
          <tr>
            <th className="px-4 py-2 border">Class Name</th>
            <th className="px-4 py-2 border">Date</th>
            <th className="px-4 py-2 border">Instructor</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2 border">Class 1</td>
            <td className="px-4 py-2 border">2024-06-15</td>
            <td className="px-4 py-2 border">Instructor A</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ScheduleClass;
