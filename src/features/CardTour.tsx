import { faCircleChevronRight, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import TourData from "../interfaces/TourData.interface";

interface Props {
  content: TourData
}

const CardTour: FunctionComponent<Props> = ({content}) => {
  return (
    <div className="col-span-12 md:col-span-6 xl:col-span-4 border border-slate-700 rounded-3xl bg-main-mid">
      <figure className="p-3 relative">
        <div className="rounded-xl overflow-hidden w-full h-[380px]">
          <img src="/images/trips/wadi-rum.jpg" alt="wadi rum" 
            className="h-full w-full hover:scale-125 transition-all duration-700"
          />
        </div>
        <div className="absolute left-5 top-5 bg-white text-gold-btn rounded-[50%] py-2 px-3 cursor-pointer">
          <FontAwesomeIcon icon={faHeart} />
        </div>
      </figure>
      <div className="p-6 border-b border-slate-700">
        <span className="text-main-light font-medium">{content.location}</span>
        <h3 className="text-white text-2xl my-2">
          <Link to={'/tour/' + content.id} className="hover:underline">
            {content.title}
          </Link>                            
        </h3>
        <span className="text-main-light font-medium">{content.time}</span>
      </div>
      <div className="p-6 flex items-center justify-between">
        <div className="text-main-light font-medium">
          <span className="text-2xl text-white font-medium">JOD {content.price}</span>
          /per person
        </div>
        <Link to={'/tour/' + content.id} className="group flex items-center gap-2 hover:underline">
          Book Now
          <FontAwesomeIcon icon={faCircleChevronRight} className="group-hover:text-gold-btn text-green-btn transition-all duration-300" />
        </Link>
      </div>
    </div>
  );
}

export default CardTour;