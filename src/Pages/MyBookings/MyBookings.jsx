import { Link } from "react-router-dom";
import roomBg from "../../assets/images/rooms/roomPage.png";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { useEffect } from "react";
import { useState } from "react";

const MyBookings = () => {


    const {user} = useContext(AuthContext)
    const [bookings, setBookings] = useState([]);

    const url = `http://localhost:5000/bookings?email=${user?.email}`;
    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => setBookings(data))
    }, [])

  return (
    <div>
      <div className="relative">
        <img className="md:h-[70vh] w-full" src={roomBg} alt="" />
        <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:text-4xl font-serif text-white">
          B O O K E D _ R O O M S <br />
          <Link to="/rooms">
            <p className="text-sm text-center mt-3 md:mt-6 font-normal underline">
              Rooms
            </p>
          </Link>
        </h1>
      </div>
      <div>
        <h1>Tottal Bookings: {bookings.length}</h1>
      </div>
    </div>
  );
};

export default MyBookings;
