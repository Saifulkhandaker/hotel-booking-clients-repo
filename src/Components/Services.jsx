import smallIcon from "../assets/icons/small icon.png";
import {
  LiaBedSolid,
  LiaWifiSolid,
  LiaSwimmingPoolSolid,
} from "react-icons/lia";
import { TbWorldShare } from "react-icons/tb";
import { MdOutlineDinnerDining } from "react-icons/md";
import { BiCar } from "react-icons/bi";

const Services = () => {
  return (
    <div className="w-11/12 mx-auto mt-5 mb-8 ">
      <div className="mb-8">
        {/* text section */}
        <div className="text-center ">
          <div className="flex gap-3 justify-center">
            <img
              className="h-fit mt-2 lg:block md:hidden hidden"
              src={smallIcon}
              alt=""
            />
            <p className="text-[#898989] ml-1 lg:ml-0 text-sm md:text-xl font-medium mt-16 lg:mt-0">
              H O E X R _ S E R V I C E S
            </p>
            <img
              className="h-fit mt-2 lg:block md:hidden hidden"
              src={smallIcon}
              alt=""
            />
          </div>
          <h1 className="text-3xl md:text-5xl font-serif mt-2">
            Hotel Facilities
          </h1>
        </div>
      </div>
      {/* service section */}
      <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {/* 1st */}
        <div className="text-center items-center flex flex-col border py-3 px-5 space-y-3 border-[#f1d0a6a6] hover:bg-[#212529] hover:text-white">
          <p className="text-[#aa8453] text-6xl">
            <LiaBedSolid></LiaBedSolid>
          </p>
          <h3 className="text-xl font-serif">Room Service</h3>
          <p className="text-[#898989]">
            Room service provides convenient dining options offering delicious
            meals and drinks delivered right to your hotel room.
          </p>
        </div>
        {/* 2nd */}
        <div className="text-center items-center flex flex-col border py-3 px-5 space-y-3 border-[#f1d0a6a6] hover:bg-[#212529] hover:text-white">
          <p className="text-[#aa8453] text-6xl">
            <TbWorldShare></TbWorldShare>
          </p>
          <h3 className="text-xl font-serif">Pick Up & Drop</h3>
          <p className="text-[#898989]">
            Hotel offers hassle-free pickup and drop service, ensuring a
            convenient and comfortable experience for guests.
          </p>
        </div>
        {/* 3rd */}
        <div className="text-center items-center flex flex-col border py-3 px-5 space-y-3 border-[#f1d0a6a6] hover:bg-[#212529] hover:text-white">
          <p className="text-[#aa8453] text-6xl">
            <LiaWifiSolid></LiaWifiSolid>
          </p>
          <h3 className="text-xl font-serif">Fibre Internet</h3>
          <p className="text-[#898989]">
            High-speed internet service keeps guests connected, providing
            seamles online access and entertainment during their stay.
          </p>
        </div>
        {/* 4th */}
        <div className="text-center items-center flex flex-col border py-3 px-5 space-y-3 border-[#f1d0a6a6] hover:bg-[#212529] hover:text-white">
          <p className="text-[#aa8453] text-6xl">
            <MdOutlineDinnerDining></MdOutlineDinnerDining>
          </p>
          <h3 className="text-xl font-serif">Breakfast</h3>
          <p className="text-[#898989]">
            Enjoy a complimentary breakfast service with a variety of delicious
            options to start your day off right.
          </p>
        </div>
        {/* 5th */}
        <div className="text-center items-center flex flex-col border py-3 px-5 space-y-3 border-[#f1d0a6a6] hover:bg-[#212529] hover:text-white">
          <p className="text-[#aa8453] text-6xl">
            <LiaSwimmingPoolSolid></LiaSwimmingPoolSolid>
          </p>
          <h3 className="text-xl font-serif">Swimming Pool</h3>
          <p className="text-[#898989]">
            Dive into relaxation with our refreshing swimming pool service,
            providing a perfect oasis for a leisurely escape.
          </p>
        </div>
        {/* 5th */}
        <div className="text-center items-center flex flex-col border py-3 px-5 space-y-3 border-[#f1d0a6a6] hover:bg-[#212529] hover:text-white">
          <p className="text-[#aa8453] text-6xl">
            <BiCar></BiCar>
          </p>
          <h3 className="text-xl font-serif">Parking Space</h3>
          <p className="text-[#898989]">
            Ample parking space is available, ensuring convenience and security
            for your vehicle during your stay.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
