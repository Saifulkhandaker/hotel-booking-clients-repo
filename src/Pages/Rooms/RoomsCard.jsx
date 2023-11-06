import { Link } from "react-router-dom";

const RoomsCard = ({ room }) => {
  const { room_title, banner_img, price } = room;

  return (
    <div className="group relative h-full w-full border-2 border-[#f1d0a6a6] px-4 py-3">
  <img
    className="h-full w-full transform scale-100 group-hover:scale-110 transition-transform duration-300"
    src={banner_img}
    alt=""
  />
  <div className="absolute inset-0 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
    <p className="text-white text-2xl font-medium bg-opacity-75 p-2 text-center">
      {room_title} <br /> <span className="text-xl font-normal">{price}$/night</span>
    </p>
    <Link to="/rooms">
      <button className="text-white mb-3 text-sm md:text-lg border bg-opacity-75 p-2 px-4">
        View Details
      </button>
    </Link>
  </div>
</div>

  );
};

export default RoomsCard;
