import { Link } from "react-router-dom";
import banner from "../assets/images/banner/banner-1.jpg";

const Banner = () => {
  return (
    <div>
      <div className="relative">
        <img src={banner} className=" w-full  md:h-[90vh]" />

        <div className="text-white text-center absolute bottom-5 left-[75px] md:bottom-14 md:left-10 lg:bottom-40 lg:left-80 ">
          <p className=" font-medium text-xs uppercase md:text-xl italic mb-2 md:mb-4">
            "unique place and luxury hotel"
          </p>
          <h2 className="text-2xl md:text-6xl font-serif uppercase ">
            life enjoy with <br />{" "}
            <span className="text-2xl md:text-6xl font-serif uppercase">
              the great moments
            </span>
          </h2>
          <Link to="/rooms">
            <button className="mt-2 md:mt-6 border bg-none hover:bg-[#AA8453] text-white text-sm md:text-xl px-3 py-2 md:px-10 md:py-3 rounded-sm">
              Rooms & Suits
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
