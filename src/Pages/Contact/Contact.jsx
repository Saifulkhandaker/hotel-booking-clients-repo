import { Link } from "react-router-dom";
import roomBg from "../../assets/images/rooms/roomPage.png";
import smallIcon from "../../assets/icons/small icon.png";
import { BsTelephonePlus } from "react-icons/bs";
import { MdOutlineMailOutline } from "react-icons/md";
import { TiLocationArrowOutline } from "react-icons/ti";
import map from "../../assets/images/rooms/London-street-map-detail-with-road-casings.png"

const Contact = () => {
  return (
    <div>
      {/* room bg */}
      <div className="relative">
        <img className="md:h-[70vh] w-full" src={roomBg} alt="" />
        <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:text-4xl font-serif text-white">
          C O N T A C T _ U S <br />
          <Link to="/">
            <p className="text-sm text-center mt-3 md:mt-6 font-normal underline">
              Home
            </p>
          </Link>
        </h1>
      </div>
      {/* contact */}
      <div className="w-11/12 mx-auto md:mt-32 mb-20 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-16 ">
        {/* form */}
        <div className="col-span-2 space-y-3">
          <div className="flex gap-3">
            <p className="text-[#898989] lg:ml-0 text-sm md:text-xl font-medium mt-8 lg:mt-0">
              S E N D _ U S _ E M A I L
            </p>
            <img
              className="h-fit mt-2 lg:block md:hidden hidden"
              src={smallIcon}
              alt=""
            />
          </div>
          <h2 className="text-3xl md:text-5xl font-serif">
            Feel free to write
          </h2>
          <div className="flex gap-5">
            <input
              type="text"
              placeholder="Enter Name"
              className=" w-full bg-[#F4F5F8] px-10 py-7 input  rounded-none"
            />
            <input
              type="email"
              placeholder="Enter Email"
              className=" w-full bg-[#F4F5F8] px-10 py-7 input  rounded-none"
            />
          </div>
          <div className="flex gap-5 mt-5">
            <input
              type="text"
              placeholder="Enter Subject"
              className=" w-full bg-[#F4F5F8] px-10 py-7 input  rounded-none"
            />
            <input
              type="text"
              placeholder="Enter Phone"
              className=" w-full bg-[#F4F5F8] px-10 py-7 input  rounded-none"
            />
          </div>
          <div className="mt-5">
            <textarea
              className="bg-[#F4F5F8] w-full px-10 py-7"
              placeholder="Enter Message"
              name=""
              id=""
              rows="5"
            ></textarea>
          </div>
          <div className="mt-4">
            <button className="hover:bg-[#AA8453] hover:text-white py-4 px-5 border rounded-none text-[#AA8453] bg-[#F4F5F8] border-[#AA8453]">
              Send Message
            </button>
          </div>
        </div>
        {/* content */}
        <div className="space-y-3">
          <div className="flex gap-3">
            <p className="text-[#898989] lg:ml-0 text-sm md:text-xl font-medium mt-8 lg:mt-0">
              N E E D _ A N Y _ H E L P
            </p>
            <img
              className="h-fit mt-2 lg:block md:hidden hidden"
              src={smallIcon}
              alt=""
            />
          </div>
          <h2 className="text-3xl md:text-5xl font-serif">Get in touch</h2>
          <p className="text-[#898989] text-lg mt-3">
            Get in touch with us to discuss your needs, ask questions, or seek
            assistance. We're here to help you with any inquiries you may have.
          </p>
          <div className="space-y-5">
            <p className="flex text-left items-center gap-5 text-xl font-serif">
              <BsTelephonePlus className="bg-[#FDECE3] text-7xl text-[#666666] py-4"></BsTelephonePlus>{" "}
              Have any question? <br />
              Free +92 (020)-9850
            </p>
            <p className="flex text-left items-center gap-5 text-xl font-serif">
              <MdOutlineMailOutline className="bg-[#FDECE3] text-7xl text-[#666666] py-4"></MdOutlineMailOutline>{" "}
              Write email <br />
              needhelp@company.com
            </p>
            <p className="flex text-left items-center gap-5 text-xl font-serif">
              <TiLocationArrowOutline className="bg-[#FDECE3] text-7xl text-[#666666] py-4"></TiLocationArrowOutline>
              Visit anytime <br />
              66 broklyn street, London
            </p>
          </div>
        </div>
      </div>
      <div>
        <img className="w-[90%] mx-auto h-[85vh] mb-10" src={map} alt="" />
      </div>
    </div>
  );
};

export default Contact;
