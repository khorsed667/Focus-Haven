import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import useComment from "../../../hooks/useComments";

const Testimonial = () => {
  const [comments, loading] = useComment();
  const [currentPage, setCurrentPage] = useState(1);
  const commentsPerPage = 1;

  const indexOfLastComment = currentPage * commentsPerPage;
  const indexOfFirstComment = indexOfLastComment - commentsPerPage;
  const currentComments = comments.slice(
    indexOfFirstComment,
    indexOfLastComment
  );

  const totalPages = Math.ceil(comments.length / commentsPerPage);

  return (
    <div className="max-w-screen-xl mx-auto text-center px-3 md:px-0 py-12">
      <p className="text-xl my-5 text-slate-500 font-sans font-semibold">
        Testimonials
      </p>
      <p className="text-3xl mb-10">What our students says</p>
      {loading ? (
        <>
          <div className="flex items-center justify-center">
            <div className="small-loader me-3"></div>
            <p className="text-black text-lg">Loading...</p>
          </div>
        </>
      ) : (
        <>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            {currentComments.map((comment) => (
              <div key={comment.id}>
                <FontAwesomeIcon
                  icon={faUserCircle}
                  size="6x"
                  className="text-gray-400 mb-4"
                />
                <p className="text-gray-700 italic mb-4">"{comment.comment}"</p>
                <h3 className="font-semibold text-lg">{comment.name}</h3>
                <p className="text-gray-600">{comment.location}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-4">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index + 1)}
                className={`w-4 h-4 mx-1 rounded-full ${
                  currentPage === index + 1 ? "bg-black" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Testimonial;
