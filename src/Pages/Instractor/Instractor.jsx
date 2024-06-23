import useFetch from "../../hooks/useFetch";

const Instractor = () => {
  const url = "http://localhost:5000/instractors";
  const [data] = useFetch(url);
  console.log(data);

  return (
    <div className="max-w-screen-xl mx-auto p-4">
      <p className="text-xl font-bold text-slate-700 text-center my-5">
          Our Instractors
        </p>
        <h1 className="text-3xl font-bold text-center mb-8">
          Meet with our Team
        </h1>
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="px-4 py-2 border-b">Image</th>
            <th className="px-4 py-2 border-b">Name</th>
            <th className="px-4 py-2 border-b">Email</th>
            <th className="px-4 py-2 border-b">Number of Classes</th>
            <th className="px-4 py-2 border-b">Classes Taken</th>
            <th className="px-4 py-2 border-b">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((instructor) => (
            <tr key={instructor.id} className="hover:bg-gray-100">
              <td className="px-4 py-2 border-b text-center">
                <img
                  src={instructor.profilePicture}
                  alt={instructor.name}
                  className="w-24 h-24 object-cover rounded-full"
                />
              </td>
              <td className="px-4 py-2 border-b text-center">{instructor.name}</td>
              <td className="px-4 py-2 border-b text-center">{instructor.email}</td>
              <td className="px-4 py-2 border-b text-center">
                {instructor.numberOfClasses}
              </td>
              <td className="px-4 py-2 border-b text-center">
                {instructor.classesTaken.join(", ")}
              </td>
              <td className="px-4 py-2 border-b text-center">
                <button
                  onClick={() =>
                    alert(
                      `Classes by ${
                        instructor.name
                      }: ${instructor.classesTaken.join(", ")}`
                    )
                  }
                  className="bg-black text-white px-4 py-2 rounded hover:bg-slate-500 transition duration-300"
                >
                  See Classes
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Instractor;
