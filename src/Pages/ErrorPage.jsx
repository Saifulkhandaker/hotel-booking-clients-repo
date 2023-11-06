import { Link } from "react-router-dom";
import error from "../assets/images/banner/404.jpg";

const ErrorPage = () => {
  return (
    <div className="mt-5">
      <div className="text-center mb-20">
      <Link to="/">
          <button className="btn px-8 rounded-sm text-white bg-[#FF735C]">Go Home</button>
          </Link>
        <img className="w-[80%] h-[90vh] ml-10 md:ml-20 lg:ml-36" src={error} alt="" />
      </div>
    </div>
  );
};

export default ErrorPage;
