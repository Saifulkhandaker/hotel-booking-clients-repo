import { GiDoubleStreetLights } from 'react-icons/gi';
import { PiSwimmingPoolDuotone, PiCallBellLight } from 'react-icons/pi';
import featured1 from "../assets/images/featured/featured1.jpg"
import featured2 from "../assets/images/featured/featured2.jpg"

const Featured = () => {
    return (
        <div className="mt-10 mb-10 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 justify-center items-center">
            {/* img section */}
            <div className="relative ml-0 lg:ml-0 md:ml-28">
            <img src={featured1} alt="" />
            <img className="absolute -bottom-5 border-8 border-white right-10 md:left-20 lg:right-8" src={featured2} alt="" />
            </div>
            {/* content section */}
            <div className="space-y-3 md:space-y-8 lg:text-left text-center">
                <p className="text-[#898989] text-lg md:text-xl font-medium mt-10 md:mt-10 lg:mt-0">H O E X R _ L U X U R Y _ H O T E L</p>
                <h2 className="text-4xl md:text-6xl font-serif">Most Safe & Rated <br /> Hotel in London.</h2>
                <p className="text-[#898989] text-xl mt-3">One of the finest hotel in London.Where You can Experience the luxuries. So many services so that you can relax and enjoy your best times. Best Hotel Service Provide award winner in 2023.</p>
              <div className='flex items-center justify-between'>
              <div className='flex items-center gap-3'>
                    <p className='text-7xl text-[#898989]'><GiDoubleStreetLights></GiDoubleStreetLights></p>
                    <p className='text-[#898989] text-xl md:text-2xl font-serif '>The Best Lighting</p>
                </div>
                <div className='flex items-center gap-3'>
                    <p className='text-7xl text-[#898989]'><PiSwimmingPoolDuotone></PiSwimmingPoolDuotone></p>
                    <p className='text-[#898989] text-xl md:text-2xl font-serif'>The Best Swiming</p>
                </div>
              </div>
             <div className='flex ml-8 gap-5 md:gap-16 lg:ml-9 md:ml-24'>
                <div className='md:mt-0 mt-2'>
                <button className="mt-2 md:mt-6 uppercase hover:bg-black border bg-[#AA8453] text-white text-sm md:text-lg px-3 py-2 md:px-10 md:py-4 rounded-sm">
              Discover More
            </button>
                </div>
             <div className='flex items-center gap-3 lg:mt-4 md:mt-5'>
                <p className='text-[#898989] text-xs md:text-xl font-serif'>BOOKING NOW <br />956 220 6666</p>
                <p className='text-7xl text-[#C8B090]'><PiCallBellLight></PiCallBellLight></p>
              </div>
             </div>
            </div>
        </div>
    );
};

export default Featured;