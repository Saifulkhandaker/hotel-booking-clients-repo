import smallIcon from "../assets/icons/small icon.png";
import team1 from "../assets/images/teams/team-1.jpg"
import team2 from "../assets/images/teams/team-2.jpg"
import team3 from "../assets/images/teams/team-3.jpg"
import team4 from "../assets/images/teams/team-4.jpg"

const Team = () => {
    return (
        <div className="w-11/12 mx-auto mt-5 mb-10">
            {/* text section */}
        <div className="text-center mb-8" data-aos="fade-down" data-aos-duration="2000">
          <div className="flex gap-3 justify-center">
            <img
              className="h-fit mt-2 lg:block md:hidden hidden"
              src={smallIcon}
              alt=""
            />
            <p className="text-[#898989] ml-1 lg:ml-0 text-sm md:text-xl font-medium mt-16 lg:mt-0">
              H O E X R _ H O T E L _ T E A M
            </p>
            <img
              className="h-fit mt-2 lg:block md:hidden hidden"
              src={smallIcon}
              alt=""
            />
          </div>
          <h1 className="text-3xl md:text-5xl font-serif mt-2">
          Expert Team Persons
          </h1>
        </div>
        {/* img section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
            {/* team 1 */}
           <div className="space-y-6 ml-14 md:ml-8 lg:ml-0" data-aos="zoom-in-up" data-aos-duration="2000">
           <img className="hover:rounded-2xl" src={team1} alt="" />
            <div className="pl-5 border-l-8 border-[#AA8453] hover:border-[#4b4949] " data-aos="fade-right" data-aos-duration="2000" >
                <p className="font-normal text-lg">Event Planner</p>
                <h3 className="font-serif text-2xl hover:text-[#AA8453]">Noha Dayen</h3>
            </div>
           </div>
           {/* team 2 */}
           <div className="space-y-6 ml-14 md:ml-8 lg:ml-0" data-aos="zoom-in-up" data-aos-duration="2000">
           <img className="hover:rounded-2xl" src={team2} alt="" />
            <div className="pl-5 border-l-8 border-[#AA8453] hover:border-[#4b4949]" data-aos="fade-right" data-aos-duration="2000" >
                <p className="font-normal text-lg">Kitchen Manager</p>
                <h3 className="font-serif text-2xl hover:text-[#AA8453]">Frank Burton</h3>
            </div>
           </div>
            {/* team 3 */}
            <div className="space-y-6 ml-14 md:ml-8 lg:ml-0" data-aos="zoom-in-up" data-aos-duration="2000">
           <img className="hover:rounded-2xl" src={team3} alt="" />
            <div className="pl-5 border-l-8 border-[#AA8453] hover:border-[#4b4949]" data-aos="fade-right" data-aos-duration="2000" >
                <p className="font-normal text-lg">Hotel Manager</p>
                <h3 className="font-serif text-2xl hover:text-[#AA8453]">Mya Mullins</h3>
            </div>
           </div>
           {/* team 4 */}
           <div className="space-y-6 ml-14 md:ml-8 lg:ml-0" data-aos="zoom-in-up" data-aos-duration="2000">
           <img className="hover:rounded-2xl" src={team4} alt="" />
            <div className="pl-5 border-l-8 border-[#AA8453] hover:border-[#4b4949]" data-aos="fade-right" data-aos-duration="2000" >
                <p className="font-normal text-lg">Room Service</p>
                <h3 className="font-serif text-2xl hover:text-[#AA8453]">Ralph Nguyen</h3>
            </div>
           </div>
        </div>
        </div>
    );
};

export default Team;