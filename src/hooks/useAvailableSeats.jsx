import { useState, useEffect } from "react";

const useAvailableSeats = (classId) => {
  const [availableSeats, setAvailableSeats] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/classes/${classId}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAvailableSeats(data.availableSeats);
      });
  }, [classId]);

  const updateAvailableSeats = (newSeats) => {
    setAvailableSeats(newSeats);
  };

  return [availableSeats, updateAvailableSeats];
};

export default useAvailableSeats;
