import { Link } from "react-router-dom";
import roomBg from "../../assets/images/rooms/roomPage.png"
import img from "../../assets/images/rooms/room-6.jpg"
import smallIcon from "../../assets/icons/small icon.png"
import hospitality1 from "../../assets/images/rooms/hospitality1.jpg"
import hospitality2 from "../../assets/images/rooms/hospitality2.jpg"
import Featured from "../../Components/Featured";
import Services from "../../Components/Services";
import { AiOutlineFileDone } from "react-icons/ai";

const AboutUs = () => {
  return (
    <div>
        {/* banner section */}
      <div className="relative">
        <img className="md:h-[70vh] w-full" src={roomBg} alt="" />
        <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:text-4xl font-serif text-white">
        A B O U T _ H O E X R <br />
          <Link to="/">
            <p className="text-sm text-center mt-3 md:mt-6 font-normal underline">
              Home
            </p>
          </Link>
        </h1>
      </div>
      {/* about section */}
      <div>
        <Featured></Featured>
      </div>
      <div className="mt-5 md:mt-20 lg:mt-32">
        <Services></Services>
      </div>
      {/* hospitality section */}
      <div className="w-11/12 mx-auto mt-10 mb-20 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-16 justify-center items-center">
        {/* img */}
        <div>
            <img className="lg:h-[100vh] md:w-full lg:mt-5 " src={img} alt="" />
        </div>
        {/* content section */}
        <div className="space-y-3 md:space-y-8 lg:text-left text-center">
        <div className="flex gap-3">
            <p className="text-[#898989] ml-20 md:ml-48 lg:ml-0 text-sm md:text-xl font-medium mt-8 lg:mt-0">
              E A T _ F R O M _ T H E _ L A N D
            </p>
            <img
              className="h-fit mt-2 lg:block md:hidden hidden"
              src={smallIcon}
              alt=""
            />
          </div>
          <h2 className="text-3xl md:text-5xl font-serif">
          Enjoy Food and Even <br /> Better Hospitality
          </h2>
          <p className="text-[#898989] text-xl mt-3">
          Hotel service and hospitality encompass the art of welcoming and accommodating guests. From check-in to room service, the concierge's assistance, and the comfort of guestrooms, a memorable experience is created.
          </p>
          {/* img section */}
          <div className="md:flex justify-between gap-5">
            {/* 1st */}
            <div className="space-y-2 ">
                <h3 className="text-3xl font-serif text-left ">Restaurant</h3>
                <ul className="space-y-2">
                    <li className="text-lg flex text-center items-center gap-3"><span className="text-[#AA8453]"><AiOutlineFileDone></AiOutlineFileDone></span> Healty Food</li>
                    <li className="text-lg flex text-center items-center gap-3"><span className="text-[#AA8453]"><AiOutlineFileDone></AiOutlineFileDone></span> Award Winning Resturent</li>
                    <li className="text-lg flex text-center items-center gap-3"><span className="text-[#AA8453]"><AiOutlineFileDone></AiOutlineFileDone></span> Individually Styled Bedrooms</li>
                </ul>
                <img src={hospitality1} alt="" />
            </div>
            {/* 1st */}
            <div className="space-y-2">
                <h3 className="text-3xl font-serif text-left ">SPA & Wellness</h3>
                <ul className="space-y-2">
                    <li className="text-lg flex text-center items-center gap-3"><span className="text-[#AA8453]"><AiOutlineFileDone></AiOutlineFileDone></span> Healty Food</li>
                    <li className="text-lg flex text-center items-center gap-3"><span className="text-[#AA8453]"><AiOutlineFileDone></AiOutlineFileDone></span> Award Winning Resturent</li>
                    <li className="text-lg flex text-center items-center gap-3"><span className="text-[#AA8453]"><AiOutlineFileDone></AiOutlineFileDone></span> Individually Styled Bedrooms</li>
                </ul>
                <img src={hospitality2} alt="" />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
