import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useClass from "../../../hooks/useClass";

const Classes = () => {
  const [classes, loading] = useClass();
  const [currentPage, setCurrentPage] = useState(1);
  const [classesPerPage, setClassesPerPage] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setClassesPerPage(6);
      } else if (window.innerWidth >= 768) {
        setClassesPerPage(6);
      } else {
        setClassesPerPage(3);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalPages = Math.ceil(classes.length / classesPerPage);

  const indexOfLastClass = currentPage * classesPerPage;
  const indexOfFirstClass = indexOfLastClass - classesPerPage;
  const currentClasses = classes.slice(indexOfFirstClass, indexOfLastClass);

  const handleClickPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="bg-slate-200">
      <div className="max-w-screen-xl mx-auto">
        <div className="container mx-auto py-8">
          <div className="w-full md:w-1/2 mx-auto text-center">
            <p className="text-xl my-5 text-slate-500 font-sans font-semibold">
              Our Classes
            </p>
            <p className="text-3xl mb-10">Summer Photography Camp</p>
          </div>
          {loading ? (
            <>
              <div className="flex items-center justify-center">
                <div className="small-loader me-3"></div>
                <p className="text-black text-lg">Loading...</p>
              </div>
            </>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5">
                {currentClasses.map((classItem, index) => (
                  <div
                    key={index}
                    className="relative overflow-hidden shadow-lg hover:border-2 transition-all duration-300 hover:border-black"
                  >
                    <img
                      src={classItem.image}
                      alt={classItem.className}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4 bg-white">
                      <p className="text-gray-500 mb-2">
                        {classItem.instructorName}
                      </p>
                      <h3 className="text-lg font-semibold mb-2">
                        {classItem.className}
                      </h3>
                      <p className="text-sm mb-4">
                        {classItem.description.substring(0, 100)}...
                      </p>
                      <Link to={`/class_details/${classItem._id}`}>
                        <button className="px-4 py-2 bg-black text-white text-sm rounded hover:bg-slate-700 transition-all duration-700">
                          Read More
                        </button>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex justify-center mt-8 space-x-2">
                {Array.from({ length: totalPages }, (_, index) => (
                  <button
                    key={index + 1}
                    onClick={() => handleClickPage(index + 1)}
                    className={`px-4 py-2 rounded ${
                      currentPage === index + 1
                        ? "bg-black text-white"
                        : "bg-gray-300 text-gray-700"
                    }`}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Classes;
