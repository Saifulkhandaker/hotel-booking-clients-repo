import smallIcon from "../assets/icons/small icon.png";
import offers4 from "../assets/images/offers/offers4.jpg";
import offers3 from "../assets/images/offers/offers3.jpg";

const Offers = () => {
  return (
    <div className="w-11/12 mx-auto py-10">
      <div className="mb-8">
        {/* text section */}
        <div className="text-center " data-aos="fade-down" data-aos-duration="2000">
          <div className="flex gap-3 justify-center">
            <img
              className="h-fit mt-2 lg:block md:hidden hidden"
              src={smallIcon}
              alt=""
            />
            <p className="text-[#898989] ml-1 lg:ml-0 text-sm md:text-xl font-medium mt-16 lg:mt-0">
              H O E X R _ O F F E R S
            </p>
            <img
              className="h-fit mt-2 lg:block md:hidden hidden"
              src={smallIcon}
              alt=""
            />
          </div>
          <h1 className="text-3xl md:text-5xl font-serif mt-2">
            Recent Offers
          </h1>
        </div>
      </div>
      {/* offers section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {/* 1st */}
        <div className="border border-slate-200 hover:bg-slate-700 rounded-xl" data-aos="fade-down" data-aos-duration="2000">
          <img className="h-72 w-full" src={offers3} alt="" />
          <div className="mt-3 px-4 text-center py-5 ">
            <h3 className="text-2xl font-serif text-[#aa8453] hover:text-white">"Guest Package"</h3>
            <p className="text-lg text-[#898989] hover:text-white">
              We Offer direct guest package for the new guiests. In this package
              our direct guest will get 15% discount in purchase.
            </p>
          </div>
        </div>
        {/* 2nd */}
        <div className="border border-slate-200 hover:bg-slate-700 rounded-xl" data-aos="fade-up" data-aos-duration="2000">
          <img className="h-72 w-full" src={offers4} alt="" />
          <div className="mt-3 px-4 text-center py-5">
            <h3 className="text-2xl font-serif text-[#aa8453] hover:text-white">"First Booking"</h3>
            <p className="text-lg text-[#898989] hover:text-white">
              We Offer direct 10% discount for the first time booking our
              hotels.This is the first bookers offers.The best offers we
              provide.
            </p>
          </div>
        </div>
        {/* 3rd */}
        <div className="border border-slate-200 hover:bg-slate-700 rounded-xl" data-aos="fade-down" data-aos-duration="2000"  >
          <img className="h-72 w-full" src={offers3} alt="" />
          <div className="mt-3 px-4 text-center py-5">
            <h3 className="text-2xl font-serif text-[#aa8453] hover:text-white">"Weekdays Offer"</h3>
            <p className="text-lg text-[#898989] hover:text-white">
              We Offer direct guest package for the new guiests. In this package
              our direct guest will get 15% discount in purchase.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offers;
