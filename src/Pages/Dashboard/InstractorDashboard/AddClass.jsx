import { useContext } from "react";
import { AuthContext } from "../../Authentication/Providers/AuthProvider";

const AddClass = () => {
  const { user } = useContext(AuthContext);
  const instructorName = user.displayName;
  const instructorEmail = user.email;

  const handleSubmit = (event) => {
    event.preventDefault();
    const className = event.target.className.value;
    const duration = event.target.duration.value;
    const numberOfClasses = event.target.numberOfClasses.value;
    const instructorName = event.target.instructorName.value;
    const price = event.target.price.value;
    const status = "Pending";
    const enrolledStudent = 0;
    const description = event.target.description.value;
    const availableSeats = event.target.availableSeats.value;
    const image = event.target.image.value;

    const formData = {
      className,
      duration,
      numberOfClasses,
      instructorName,
      instructorEmail,
      price,
      enrolledStudent,
      status,
      description,
      availableSeats,
      image,
    };

    fetch("http://localhost:5000/addClasses", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          window.location.reload();
        }
      });
  };

  return (
    <div className="bg-gray-100 flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-lg w-full"
      >
        <div className="mb-4">
          <label
            htmlFor="className"
            className="block text-sm font-medium text-gray-700"
          >
            Class Name
          </label>
          <input
            type="text"
            name="className"
            className="mt-1 p-2 w-full border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="duration"
            className="block text-sm font-medium text-gray-700"
          >
            Duration
          </label>
          <input
            type="text"
            name="duration"
            className="mt-1 p-2 w-full border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="numberOfClasses"
            className="block text-sm font-medium text-gray-700"
          >
            Number of Classes
          </label>
          <input
            type="number"
            name="numberOfClasses"
            className="mt-1 p-2 w-full border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="instructorName"
            className="block text-sm font-medium text-gray-700"
          >
            Instructor Name
          </label>
          <input
            type="text"
            name="instructorName"
            className="mt-1 p-2 w-full border rounded bg-gray-200 cursor-not-allowed"
            value={instructorName}
            readOnly
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="instructorEmail"
            className="block text-sm font-medium text-gray-700"
          >
            Instructor Email
          </label>
          <input
            type="email"
            name="instructorEmail"
            className="mt-1 p-2 w-full border rounded bg-gray-200 cursor-not-allowed"
            value={instructorEmail}
            readOnly
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="price"
            className="block text-sm font-medium text-gray-700"
          >
            Price
          </label>
          <input
            type="number"
            name="price"
            className="mt-1 p-2 w-full border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700"
          >
            Description
          </label>
          <textarea
            name="description"
            className="mt-1 p-2 w-full border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="availableSeats"
            className="block text-sm font-medium text-gray-700"
          >
            Available Seats
          </label>
          <input
            type="number"
            name="availableSeats"
            className="mt-1 p-2 w-full border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="image"
            className="block text-sm font-medium text-gray-700"
          >
            Image URL
          </label>
          <input
            type="text"
            name="image"
            className="mt-1 p-2 w-full border rounded"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-black text-white p-2 rounded hover:bg-slate-500 transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddClass;
