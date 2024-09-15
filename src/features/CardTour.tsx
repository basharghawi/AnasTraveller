import { faCircleChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function CardTour() {
  return (
    <div className="col-span-12 md:col-span-6 xl:col-span-4 border border-slate-700 rounded-3xl bg-main-mid">
      <figure className="p-3">
        <div className="rounded-xl overflow-hidden w-full h-[380px]">
          <img src="/images/trips/wadi-rum.jpg" alt="wadi rum" 
            className="h-full w-full hover:scale-125 transition-all duration-700"
          />
        </div>
      </figure>
      <div className="p-6 border-b border-slate-700">
        <span className="text-main-light font-medium">Wadi Rum, Jordan</span>
        <h3 className="text-white text-2xl my-2">
          <Link to={'/tour'} className="hover:underline">
            Wadi Rum
          </Link>
        </h3>
        <span className="text-main-light font-medium">2 days 1 night</span>
      </div>
      <div className="p-6 flex items-center justify-between">
        <div className="text-main-light font-medium">
          <span className="text-2xl text-white font-medium">JOD 65</span>
          /per person
        </div>
        <Link to={'/tour'} className="group flex items-center gap-1 hover:underline">
          Book Now
          <FontAwesomeIcon icon={faCircleChevronRight} className="group-hover:text-gold-btn text-green-btn transition-all duration-300" />
        </Link>
      </div>
    </div>
  );
}

export default CardTour;