import { useLoaderData } from "react-router-dom";
import roomBg from "../assets/images/rooms/roomPage.png";
import { Link } from "react-router-dom";

import {
  LiaBedSolid,
  LiaWifiSolid,
  LiaSwimmingPoolSolid,
} from "react-icons/lia";
import { TbWorldShare } from "react-icons/tb";
import { MdOutlineDinnerDining } from "react-icons/md";
import { BiCar } from "react-icons/bi";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const ViewDetails = () => {
  const room = useLoaderData();
  const {
    room_title,
    banner_img,
    img1,
    img2,
    price,
    description,
    status,
    size,
  } = room;

  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  console.log(user.email);
  const isUserLoggedIn = user !== null;

  //handle Room book button
  const handleRoomBook = (e) => {
    e.preventDefault();

    if (isUserLoggedIn) {
      const form = e.target;
      const room_name = form.room_title.value;
      const price = form.price.value;
      const email = form.email.value;
      const check_in = form.check_in.value;
      const check_out = form.check_out.value;
      const img = banner_img;
      const booking = { room_name, price, check_in, check_out, img, email };

      fetch("https://hotel-booking-server-6hz2x0ygm.vercel.app/bookings", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(booking),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.insertedId) {
            Swal.fire({
              title: "Success",
              text: "Room Booked Successfully",
              icon: "success",
              confirmButtonText: "Cool",
            });
            setTimeout(() => {
              navigate("/rooms");
            }, 3000);
          }
        });
    } else {
      Swal.fire({
        title: "Please log in",
        text: "You need to be logged in to book a room.",
        icon: "warning",
        confirmButtonText: "OK",
      });
      setTimeout(() => {
        navigate("/login");
      }, 3000);
    }
  };

  return (
    <div>
      {/* rooms bg and title */}
      <div className="relative">
        <img className="md:h-[70vh] w-full" src={roomBg} alt="" />
        <div className="text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white">
          <h1 className="text-xs md:text-2xl lg:text-4xl">
            H O E X R _ R O O M _ D E T A I L S
          </h1>
          <p className="mt-3 md:mt-5 text-xl md:text-4xl">"{room_title}"</p>
          <Link to="/rooms">
            <p className="text-sm md:text-base font-normal underline md:mt-5">
              Rooms
            </p>
          </Link>
        </div>
      </div>
      {/* room details section */}
      <div className="w-11/12 mx-auto mt-5 md:mt-20 mb-10">
        {/* details */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {/* descriptions side */}
          <div className="col-span-2">
            {/* images */}
            <div>
              <img className="w-full" src={banner_img} alt="" />
              <div className="flex gap-[6px] md:gap-16 lg:gap-[2px] mt-2">
                <img className="w-48 lg:w-fit h-fit" src={img1} alt="" />
                <img className="w-48 lg:w-fit h-fit" src={img2} alt="" />
                <img
                  className="w-48 lg:w-fit h-fit hidden md:block"
                  src={img1}
                  alt=""
                />
              </div>
            </div>
            {/* description */}
            <div className="mt-10 space-y-5">
              <h1 className="text-3xl md:text-5xl text-center lg:text-left font-serif text-[#222222]">
                Description Of
                <span className="text-[#AA8453]">_{room_title}</span>
              </h1>
              <p className="text-xl text-justify">{description}</p>
              <div className="px-5 py-6 md:px-8 md:py-10 flex items-center justify-between gap-5 bg-[#F5F6F7] border border-[#AA8453] rounded-2xl">
                <p className="text-sm md:text-xl text-[#222222]">
                  Room Size <br />
                  <span className="font-serif">{size}</span>
                </p>
                <p className="text-sm md:text-xl text-[#222222]">
                  Rooms Bed <br />
                  <span className="font-serif">2 Single Bed</span>
                </p>
                <p className="text-sm md:text-xl text-[#222222]">
                  Status <br />
                  <span className="font-serif">{status}</span>
                </p>
                <p className="text-sm md:text-xl text-[#222222]">
                  Price <br />
                  <span className="font-serif">{price}$/night</span>
                </p>
              </div>
              <p className="text-xl text-justify ">{description}</p>
            </div>
            {/* facilities */}
            <div className="mt-10 space-y-5">
              <h1 className="text-3xl text-center lg:text-left md:text-5xl font-serif text-[#222222]">
                Room Facilites
              </h1>
              <div className="grid gap-5 grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
                {/* 1st */}
                <div className="rounded-xl text-center items-center flex border py-3 px-5 space-y-3 border-[#f1d0a6a6] hover:bg-[#212529] hover:text-white">
                  <p className="text-[#aa8453] text-6xl">
                    <LiaBedSolid></LiaBedSolid>
                  </p>
                  <h3 className="text-xl font-serif">Room Service</h3>
                </div>
                {/* 2nd */}
                <div className="rounded-xl text-center items-center flex border py-3 px-5 space-y-3 border-[#f1d0a6a6] hover:bg-[#212529] hover:text-white">
                  <p className="text-[#aa8453] text-6xl">
                    <TbWorldShare></TbWorldShare>
                  </p>
                  <h3 className="text-xl font-serif">Pick Up & Drop</h3>
                </div>
                {/* 3rd */}
                <div className="rounded-xl text-center items-center flex border py-3 px-5 space-y-3 border-[#f1d0a6a6] hover:bg-[#212529] hover:text-white">
                  <p className="text-[#aa8453] text-6xl">
                    <LiaWifiSolid></LiaWifiSolid>
                  </p>
                  <h3 className="text-xl font-serif">Fibre Internet</h3>
                </div>
                {/* 4th */}
                <div className="rounded-xl text-center items-center flex  border py-3 px-5 space-y-3 border-[#f1d0a6a6] hover:bg-[#212529] hover:text-white">
                  <p className="text-[#aa8453] text-6xl">
                    <MdOutlineDinnerDining></MdOutlineDinnerDining>
                  </p>
                  <h3 className="text-xl font-serif">Breakfast</h3>
                </div>
                {/* 5th */}
                <div className="rounded-xl text-center items-center flex border py-3 px-5 space-y-3 border-[#f1d0a6a6] hover:bg-[#212529] hover:text-white">
                  <p className="text-[#aa8453] text-6xl">
                    <LiaSwimmingPoolSolid></LiaSwimmingPoolSolid>
                  </p>
                  <h3 className="text-xl font-serif">Swimming Pool</h3>
                </div>
                {/* 5th */}
                <div className="rounded-xl text-center items-center flex  border py-3 px-5 space-y-3 border-[#f1d0a6a6] hover:bg-[#212529] hover:text-white">
                  <p className="text-[#aa8453] text-6xl">
                    <BiCar></BiCar>
                  </p>
                  <h3 className="text-xl font-serif">Parking Space</h3>
                </div>
              </div>
            </div>
          </div>
          {/* form submit side */}
          <div>
            <form
              onSubmit={handleRoomBook}
              className="card-body bg-[#F5F6F7] border  rounded-lg py-20 px-10 space-y-5"
            >
              <div className="form-control">
                <label className="label">
                  <span className="label-text clear-left text-lg font-normal">
                    Room Name
                  </span>
                </label>
                <input
                  name="room_title"
                  type="text"
                  value={room_title}
                  className="input input-bordered rounded-none text-lg text-[#AA8453]"
                  readOnly
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text clear-left text-lg font-normal">
                    Price/night
                  </span>
                </label>
                <input
                  name="price"
                  type="text"
                  value={`${price}$`}
                  className="input input-bordered rounded-none text-lg text-[#AA8453]"
                  readOnly
                />
              </div>
              {/*  */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text clear-left text-lg font-normal">
                    Your Email
                  </span>
                </label>
                <input
                  name="email"
                  type="text"
                  value={user.email}
                  className="input input-bordered rounded-none text-lg text-[#AA8453]"
                  readOnly
                />
              </div>
              {/*  */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text clear-left text-lg font-normal">
                    Check In
                  </span>
                </label>
                <input
                  name="check_in"
                  type="date"
                  placeholder="Arrive Date"
                  className="input input-bordered rounded-none"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text clear-left text-lg font-normal">
                    Check Out
                  </span>
                </label>
                <input
                  name="check_out"
                  type="date"
                  placeholder="Departure Date"
                  className="input input-bordered rounded-none"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <input
                  className="mt-5 btn rounded-none border-[#AA8453] bg-[#F5F6F7] text-[#AA8453] hover:bg-[#AA8453] hover:text-white"
                  type="submit"
                  value="BOOK NOW"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
