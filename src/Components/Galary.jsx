import smallIcon from "../assets/icons/small icon.png";
import image1 from "../assets/images/rooms/room-1.jpg";
import image2 from "../assets/images/rooms/room-2.jpg";
import image3 from "../assets/images/rooms/room-3.jpg";
import image4 from "../assets/images/rooms/room-4.jpg";
import image5 from "../assets/images/rooms/room-5.jpg";
import image6 from "../assets/images/rooms/room-6.jpg";
import image7 from "../assets/images/rooms/room-7.jpg";
import image8 from "../assets/images/rooms/room-8.jpg";
import image9 from "../assets/images/rooms/room-9.jpg";
import image10 from "../assets/images/rooms/room-10.jpg";

const ImageGallery = () => {
  return (
    <div className="w-11/12 mx-auto h-80 overflow-hidden relative">
      {/* text section */}
      <div className="text-center " data-aos="fade-right" data-aos-duration="3000">
        <div className="flex gap-3 justify-center">
          <img
            className="h-fit mt-2 lg:block md:hidden hidden"
            src={smallIcon}
            alt=""
          />
          <p className="text-[#898989] ml-1 lg:ml-0 text-sm md:text-xl font-medium mt-16 lg:mt-0">
            H O E X R _ G A L L A R Y
          </p>
          <img
            className="h-fit mt-2 lg:block md:hidden hidden"
            src={smallIcon}
            alt=""
          />
        </div>
      </div>
      <div className="flex animate-carousel mt-10">
        <img
          src={image1}
          alt="Image 1"
          className="w-full h-full object-cover"
        />
        <img
          src={image2}
          alt="Image 2"
          className="w-full h-full object-cover"
        />
        <img
          src={image3}
          alt="Image 3"
          className="w-full h-full object-cover"
        />
        <img
          src={image6}
          alt="Image 6"
          className="w-full h-full object-cover"
        />
        <img
          src={image7}
          alt="Image 7"
          className="w-full h-full object-cover"
        />
        <img
          src={image8}
          alt="Image 8"
          className="w-full h-full object-cover"
        />
      <img
          src={image4}
          alt="Image 4"
          className="w-full h-full object-cover"
        />
        <img
          src={image5}
          alt="Image 5"
          className="w-full h-full object-cover"
        />
        <img
          src={image9}
          alt="Image 9"
          className="w-full h-full object-cover"
        />
        <img
          src={image10}
          alt="Image 10"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default ImageGallery;
