import { useState } from "react";
import RoomsBg from "../../Components/RoomsBg";
import { useEffect } from "react";
import RoomsCard from "./RoomsCard";
import smallIcon from "../../assets/icons/small icon.png";

const Rooms = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    fetch("https://hotel-booking-server-seven.vercel.app/rooms")
      .then((res) => res.json())
      .then((data) => setRooms(data));
  });

  return (
    <div>
      {/* room bg */}
      <div data-aos="fade-top" data-aos-duration="2000">
        <RoomsBg></RoomsBg>
      </div>
      <div className="flex gap-3 justify-center mt-10" data-aos="fade-up" data-aos-duration="2000">
        <img
          className="h-fit mt-2 lg:block md:hidden hidden"
          src={smallIcon}
          alt=""
        />
        <p className="text-[#898989] ml-1 lg:ml-0 text-sm md:text-xl font-medium lg:mt-0">
          H O E X R _ L U X U R Y _ R O O M S
        </p>
        <img
          className="h-fit mt-2 lg:block md:hidden hidden"
          src={smallIcon}
          alt=""
        />
      </div>

      {/* rooms images */}
      <div className="mt-8 mb-10 w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-4" >
        {rooms.map((room) => (
          <RoomsCard key={room._id} room={room}></RoomsCard>
        ))}
      </div>
    </div>
  );
};

export default Rooms;
