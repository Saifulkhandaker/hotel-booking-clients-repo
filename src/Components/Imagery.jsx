import room1 from "../assets/images/rooms/room-1.jpg";
import room2 from "../assets/images/rooms/room-2.jpg";
import room3 from "../assets/images/rooms/room-3.jpg";
import room4 from "../assets/images/rooms/room-4.jpg";
import room5 from "../assets/images/rooms/room-5.jpg";
import smallIcon from "../assets/icons/small icon.png";
import { Link } from "react-router-dom";

const Imagery = () => {
  return (
    <div className="bg-[#f7eee25b] lg:mt-20 mb-10">
      <div className="w-11/12 mx-auto lg:py-10">
        {/* text section */}
        <div className="text-center " data-aos="fade-down" data-aos-duration="2000">
          <div className="flex gap-3 justify-center">
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
          <h1 className="text-3xl mt-2 md:text-5xl font-serif ">
            Luxury Rooms & Suites
          </h1>
        </div>
        {/* room photos */}
        <div className="mt-10">
          {/* 1st row photos */}
          <div className="grid grid-cols-1 lg:flex justify-center gap-5 mt-5  ml-0 md:ml-16 lg:ml-0" data-aos="fade-right" data-aos-duration="2000">
            <div className="group relative">
              <img
                className=" transform scale-100 group-hover:scale-110 transition-transform duration-300"
                src={room1}
                alt=""
              />
              <div className="absolute inset-0 flex items-end justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-lg bg-opacity-75 p-2">
                  Junior Suit <br /> 150$/night
                </p>
                <Link to="/rooms">
                  <button className="text-white mb-3 self-end text-sm border bg-none bg-opacity-75 p-2">
                    More Rooms
                  </button>
                </Link>
              </div>
            </div>
            <div className="group relative">
              <img
                className=" transform scale-100 group-hover:scale-110 transition-transform duration-100"
                src={room2}
                alt=""
              />
              <div className="absolute inset-0 flex items-end justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-lg bg-opacity-75 p-2">
                  Family Room <br /> 200$/night
                </p>
                <Link to="/rooms">
                  <button className="text-white mb-3 self-end text-sm border bg-none bg-opacity-75 p-2">
                    More Rooms
                  </button>
                </Link>
              </div>
            </div>
          </div>
          {/* 2nd row photos */}
          <div className="grid grid-cols-1 lg:flex justify-center gap-5 mt-5" data-aos="fade-left" data-aos-duration="2000">
            <div className="group relative">
              <img
                className="ml-16 md:ml-52 lg:ml-0  transform scale-100 group-hover:scale-110 transition-transform duration-100"
                src={room3}
                alt=""
              />
              <div className="absolute inset-0 flex items-end justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-lg bg-opacity-75 p-2">
                  Double Room <br /> 250$/night
                </p>
                <Link to="/rooms">
                  <button className="text-white mb-3 self-end text-sm border bg-none bg-opacity-75 p-2">
                    More Rooms
                  </button>
                </Link>
              </div>
            </div>
            <div className="group relative">
              <img
                className="md:ml-16 lg:ml-0 transform scale-100 group-hover:scale-110 transition-transform duration-100"
                src={room4}
                alt=""
              />
              <div className="absolute inset-0 flex items-end justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-lg bg-opacity-75 p-2">
                  Double Room <br /> 250$/night
                </p>
                <Link to="/rooms">
                  <button className="text-white mb-3 self-end text-sm border bg-none bg-opacity-75 p-2">
                    More Rooms
                  </button>
                </Link>
              </div>
            </div>
            <div className="group relative">
              <img
                className="ml-16 md:ml-52 lg:ml-0 transform scale-100 group-hover:scale-110 transition-transform duration-100"
                src={room5}
                alt=""
              />
              <div className="absolute inset-0 flex items-end justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-lg bg-opacity-75 p-2">
                  Deluxe Room <br /> 300$/night
                </p>
                <Link to="/rooms">
                  <button className="text-white mb-3 self-end text-sm border bg-none bg-opacity-75 p-2">
                    More Rooms
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Imagery;
