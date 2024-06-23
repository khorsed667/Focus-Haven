import { useState } from "react";
import useFetch from "../../../hooks/useFetch";

const Instractors = () => {
  const url = "http://localhost:5000/instractors";
  const [data] = useFetch(url);

  const [currentPage, setCurrentPage] = useState(1);
  const instructorsPerPage = 3;

  const indexOfLastInstructor = currentPage * instructorsPerPage;
  const indexOfFirstInstructor = indexOfLastInstructor - instructorsPerPage;
  const currentInstructors = data.slice(
    indexOfFirstInstructor,
    indexOfLastInstructor
  );

  const totalPages = Math.ceil(data.length / instructorsPerPage);

  return (
    <div className="bg-slate-200 py-10">
      <div className="max-w-screen-xl mx-auto">
        <p className="text-xl font-bold text-slate-700 text-center my-5">
          Our Instractors
        </p>
        <h1 className="text-3xl font-bold text-center mb-8">
          Meet with our Team
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {currentInstructors.map((instructor) => (
            <div
              key={instructor.id}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <img
                src={instructor.profilePicture}
                alt={instructor.name}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="mt-4">
                <h2 className="text-xl font-semibold">{instructor.name}</h2>
                <p className="text-gray-600">{instructor.bio}</p>
                <p className="text-gray-800 mt-2">
                  <strong>Specialty:</strong> {instructor.specialty}
                </p>
                <p className="text-gray-800">
                  <strong>Email: </strong>{" "}
                  <a
                    href={`mailto:${instructor.email}`}
                    className="text-slate-400"
                  >
                    {instructor.email}
                  </a>
                </p>
                <p className="text-gray-800 mt-2">
                  <strong>Classes Taken:</strong>{" "}
                  {instructor.classesTaken.join(", ")}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index + 1)}
              className={`w-4 h-4 mx-2 rounded-full ${
                currentPage === index + 1 ? "bg-black" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Instractors;
