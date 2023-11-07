import { Link } from "react-router-dom";
import roomBg from "../assets/images/rooms/roomPage.png";

const RoomsBg = () => {
  return (
    <div>
      <div className="relative">
        <img className="md:h-[70vh] w-full" src={roomBg} alt="" />
        <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:text-4xl font-serif text-white">
          H O E X R _ R O O M S <br />
          <Link to="/">
            <p className="text-sm text-center mt-3 md:mt-6 font-normal underline">Home</p>
          </Link>
        </h1>
      </div>
    </div>
  );
};

export default RoomsBg;
