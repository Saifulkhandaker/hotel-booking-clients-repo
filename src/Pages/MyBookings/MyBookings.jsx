import { Link } from "react-router-dom";
import roomBg from "../../assets/images/rooms/roomPage.png";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { useEffect } from "react";
import { useState } from "react";
import BookingTable from "./BookingTable";
import Swal from "sweetalert2";

const MyBookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);

  const url = `http://localhost:5000/bookings?email=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, []);

  // handle delete
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are You Sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/bookings/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount) {
              Swal.fire({
                title: "Success",
                text: "Room Booked Successfully",
                icon: "success",
                confirmButtonText: "Cool",
              });
              const remaining = bookings.filter(
                (booking) => booking._id !== id
              );
              setBookings(remaining);
            }
          });
      }
    });
  };

  // handle update
  const handleUpdate = (id, e)=> {
    e.preventDefault();
    const form = e.target;
    const check_in = form.check_in.value;
    const check_out = form.check_out.value;
    const updateDate = { check_in, check_out }
    console.log(updateDate);
    // send data to the server
    fetch(`http://localhost:5000/bookings/${id}`, {
      method: "PUT",
      headers: {
        'content-type': "application/json",
      },
      body: JSON.stringify(updateDate)
    })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      if (data.modifiedCount > 0) {
        Swal.fire({
          title: "Success!",
          text: "Date Updated Successfully",
          icon: "success",
          confirmButtonText: "Cool",
        });
        const remaining = bookings.filter(booking => booking._id !== id);
        const updated = bookings.find(booking => booking._id === id);
        const newBookings = [updated, ...remaining];
        setBookings(newBookings);
      }
    });
  }

  return (
    <div>
      <div className="relative">
        <img className="md:h-[70vh] w-full" src={roomBg} alt="" />
        <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:text-3xl font-serif text-white">
          B O O K E D _ R O O M S <br />
          <Link to="/rooms">
            <p className="text-sm text-center mt-3 md:mt-6 font-normal underline">
              Rooms
            </p>
          </Link>
        </h1>
      </div>
      <div>
        <h1 className="text-2xl md:text-5xl font-medium text-center mt-5 mb-10 ">
          Tottal_Booked: {bookings.length}
        </h1>
        {/* booked item detail */}
        <div className="overflow-x-auto">
          <table className="table w-11/12 mx-auto">
            {bookings.length > 0 && (
              <thead>
                <tr>
                  <th>Delete</th>
                  <th>Img</th>
                  <th>Room Name</th>
                  <th>Check In</th>
                  <th>Check Out</th>
                  <th>Update</th>
                </tr>
              </thead>
            )}
            <tbody>
              {bookings.map((booking) => (
                <BookingTable
                  key={booking._id}
                  booking={booking}
                  handleDelete={handleDelete}
                  handleUpdate={handleUpdate}
                ></BookingTable>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default MyBookings;
