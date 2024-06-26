import { useState } from "react";
import useFetch from "../../../hooks/useFetch";

const ManageClasses = () => {
  const [feedbackModal, setFeedbackModal] = useState(false);
  const [feedback, setFeedback] = useState("");
  const url = "https://focus-haven-server.onrender.com/classes";
  const [data] = useFetch(url);

  const handleFeedback = () => {
    setFeedback("");
    setFeedbackModal(false);
  };

  const handelClassStatus = (id, classStatus) => {
    console.log(id, classStatus);
    fetch(`https://focus-haven-server.onrender.com/classes/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        status: classStatus,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          window.location.reload();
        }
      });
  };

  const handelDelete = (id) => {
    console.log(id);
    fetch(`https://focus-haven-server.onrender.com/classes/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          window.location.reload();
        }
      });
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border rounded-lg text-center">
        <thead>
          <tr>
            <th className="px-4 py-2 border">Image</th>
            <th className="px-4 py-2 border">Class</th>
            <th className="px-4 py-2 border">Instructor</th>
            <th className="px-4 py-2 border">Available Seats</th>
            <th className="px-4 py-2 border">Price</th>
            <th className="px-4 py-2 border">Status</th>
            <th className="px-4 py-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((cls) => (
            <tr key={cls._id}>
              <td className="px-4 text-center py-2 border">
                <img
                  className="w-[100px] rounded-xl mx-auto"
                  src={cls.image}
                  alt="Class"
                />
              </td>
              <td className="px-4 py-2 border">{cls.className}</td>
              <td className="px-4 py-2 border">{cls.instructorName}</td>
              <td className="px-4 py-2 border">{cls.availableSeats}</td>
              <td className="px-4 py-2 border">${cls.price}</td>
              <td className="px-4 py-2 border">{cls.status}</td>
              <td className="px-4 py-2 border">
                {cls.status === "Pending" ? (
                  <>
                    <button
                      onClick={() => handelClassStatus(cls._id, "Approved")}
                      className="border-2 border-slate-200 hover:bg-gray-600 transition-all duration-300 me-3 hover:text-white font-bold py-2 px-4 hover:rounded-2xl"
                    >
                      Approve
                    </button>
                    <button
                      onClick={() => handelDelete(cls._id)}
                      className="hover:bg-gray-600 transition-all bg-black text-white duration-300 hover:text-white font-bold py-2 px-4 hover:rounded-2xl"
                    >
                      Deny
                    </button>
                  </>
                ) : (
                  <button
                    className="border-2 border-slate-200 hover:bg-gray-600 transition-all duration-300 hover:text-white font-bold py-2 px-4 hover:rounded-2xl"
                    onClick={() => setFeedbackModal(true)}
                  >
                    Send Feedback
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {feedbackModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Send Feedback</h2>
            <textarea
              className="w-full p-2 border rounded mb-4"
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              placeholder="Write your feedback here..."
            />
            <button
              className="bg-blue-500 text-white p-2 rounded"
              onClick={handleFeedback}
            >
              Send
            </button>
            <button
              className="bg-gray-500 text-white p-2 rounded ml-2"
              onClick={() => setFeedbackModal(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageClasses;
