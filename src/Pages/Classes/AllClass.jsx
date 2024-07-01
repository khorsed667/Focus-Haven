import useFetch from "../../hooks/useFetch";

const AllClasses = () => {
  const url = "https://focus-haven-server.onrender.com/classes";
  const [data] = useFetch(url);
  console.log(data);

  return (
    <div className="max-w-screen-xl mx-auto p-4">
      <p className="text-xl font-bold text-slate-700 text-center my-5">
          Our Classes
        </p>
        <h1 className="text-3xl font-bold text-center mb-8">
          Explore Our Classes
        </h1>
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="px-4 py-2 border-b">Image</th>
            <th className="px-4 py-2 border-b">Class Name</th>
            <th className="px-4 py-2 border-b">Instructor</th>
            <th className="px-4 py-2 border-b">Duration</th>
            <th className="px-4 py-2 border-b">Price</th>
            <th className="px-4 py-2 border-b">Available Seats</th>
            <th className="px-4 py-2 border-b">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((classItem) => (
            <tr key={classItem.id} className="hover:bg-gray-100">
              <td className="px-4 py-2 border-b text-center">
                <img
                  src={classItem.image}
                  alt={classItem.className}
                  className="w-24 h-24 object-cover rounded-full"
                />
              </td>
              <td className="px-4 py-2 border-b text-center">{classItem.className}</td>
              <td className="px-4 py-2 border-b text-center">{classItem.instructorName}</td>
              <td className="px-4 py-2 border-b text-center">{classItem.duration}</td>
              <td className="px-4 py-2 border-b text-center">${classItem.price}</td>
              <td className="px-4 py-2 border-b text-center">{classItem.availableSeats}</td>
              <td className="px-4 py-2 border-b text-center">
                <button
                  onClick={() =>
                    alert(
                      `Class Details: ${classItem.className}\nInstructor: ${classItem.instructorName}\nDescription: ${classItem.description}`
                    )
                  }
                  className="bg-black text-white px-4 py-2 rounded hover:bg-slate-500 transition duration-300"
                >
                  See Details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllClasses;
