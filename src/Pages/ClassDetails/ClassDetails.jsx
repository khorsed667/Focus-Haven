import { useParams } from 'react-router-dom';
import { useContext, useState } from 'react';
import { AuthContext } from '../Authentication/Providers/AuthProvider';
import useFetch from '../../hooks/useFetch';
import useAvailableSeats from '../../hooks/useAvailableSeats';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const ClassDetails = () => {
  const url = 'http://localhost:5000/classes';
  const [data] = useFetch(url);
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const [availableSeats] = useAvailableSeats(id);
  // console.log(availableSeats);
  const [startDate, setStartDate] = useState(null);
  const [showDatePicker, setShowDatePicker] = useState(false);

  if (!data) {
    return <div>Loading...</div>;
  }

  const selectedClass = data.filter(cls => cls?._id === id);

  if (selectedClass.length === 0) {
    return <div>Class in Updating. Please wait...</div>;
  }

  const [{ className, duration, numberOfClasses, instructorName, instructorGmail, price, description, image }] = selectedClass;
  
  const enrollingClass = {
    className: className,
    InstractorEmail: instructorGmail,
    classId: id,
    price: price,
    studentGmail: user?.email
  };

  const handlePaymentFunctionality = () => {
    // console.log(enrollingClass);
    fetch('http://localhost:5000/enroll', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(enrollingClass)
    })
    .then(res => res.json())
    .then(result => {
      if (result.url) {
        window.location.replace(result.url);
      } else {
        console.error('No URL returned from API');
      }
    })
    .catch(error => {
      console.error('Error:', error);
    });
  };


  const handleScheduleDemo = () => {
    setShowDatePicker(true);
  };

  const handleDateSelect = (date) => {
    setStartDate(date);
    setShowDatePicker(false);
    console.log('Selected date:', date);
  };

  return (
    <div style={{ backgroundImage: `url(${image})` }} className="text-white bg-cover min-h-screen flex items-center justify-center">
      <div className="max-w-screen-xl bg-black bg-opacity-90 my-24 mx-auto p-4">
        <div className="rounded-lg shadow-lg overflow-hidden">
          <div className="p-6 lg:flex lg:items-center lg:justify-between">
            <div className='w-2/3'>
              <h2 className="text-3xl font-bold mb-4">{className}</h2>
              <ul className="mb-4">
                <li className='mt-5'>Duration: {duration}</li>
                <li className='mt-5'>Number of Classes: {numberOfClasses}</li>
                <li className='mt-5'>Instructor: {instructorName}</li>
                <li className='mt-5'>Price: ${price}</li>
                <li className='mt-5'>Available Seats: {availableSeats}</li>
              </ul>
              <div className="flex items-center space-x-4 mb-4">
              <button
                  onClick={handleScheduleDemo}
                  className="bg-gradient-to-r from-slate-400 to-black transition-all duration-300 hover:bg-gray-600 text-white font-bold py-2 px-4 hover:rounded-2xl"
                >
                  Schedule a Demo Class
                </button>
                {showDatePicker && (
                  <DatePicker
                    selected={startDate}
                    onChange={handleDateSelect}
                    inline
                  />
                )}

                <button className="border-2 border-slate-200 hover:bg-gray-600 transition-all duration-300 text-white font-bold py-2 px-4 hover:rounded-2xl">
                  Download Syllabus
                </button>
              </div>
              <div className="flex bg-gradient-to-r from-slate-800 to-black mt-12 border-2 border-slate-300 w-4/5 space-x-4">
                <div className="text-center border-r-2 w-1/4 m-3">
                  <h4 className="font-bold">{numberOfClasses}</h4>
                  <p className='text-xs'>Classes</p>
                </div>
                <div className="text-center border-r-2 w-1/4 m-3">
                  <h4 className="font-bold">{duration}</h4>
                  <p className='text-xs'>Duration</p>
                </div>
                <div className="text-center border-r-2 w-1/4 m-3">
                  <h4 className="font-bold">{availableSeats}</h4>
                  <p className='text-xs'>Available Seats</p>
                </div>
                <div className="text-center w-1/4 m-3">
                  <h4 className="font-bold">{instructorName}</h4>
                  <p className='text-xs'>Instructor</p>
                </div>
              </div>
            </div>
            <div className="mt-6 w-1/3 lg:mt-0 lg:ml-6">
              <div className="bg-white overflow-hidden">
                <img src={image} alt={className} className="w-full" />
                <div className="p-4">
                  <h3 className="text-xl font-bold text-gray-900">{className}</h3>
                  <ul className="mt-2 text-gray-700">
                    <li><strong>Live sessions:</strong> {numberOfClasses}</li>
                    <li><strong>Duration:</strong> {duration}</li>
                    <li><strong>Price:</strong> ${price}</li>
                    <li><strong>Available Seats:</strong> {availableSeats}</li>
                  </ul>
                  <button onClick={handlePaymentFunctionality} className="mt-4 bg-black hover:rounded-xl transition-all duration-300 hover:bg-gray-600 text-white font-bold py-2 px-4">
                    Enroll Now
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="p-6 bg-black">
            <h3 className="text-2xl font-bold mb-4">Course Overview</h3>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassDetails;
