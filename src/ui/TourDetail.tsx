import { faArrowUpRightFromSquare, faChevronRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"

// Swiper components, modules and styles
import { Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

const TourDetail = () => {
  return (
    <div className="container mx-auto pt-16">
      <div className="flex items-center justify-between">
        <h1 className="text-5xl">Wadi Rum, Jordan</h1>
        <div className="flex items-center gap-5">
          <Link to='/' className="text-xl text-main-light hover:underline hover:text-gold-btn">Home</Link>
          <FontAwesomeIcon icon={faChevronRight} />
          <span className="text-xl cursor-default">Tour Details</span>
        </div>
      </div>
      <Swiper
        navigation
        slidesPerView={1}
        autoplay
        modules={[Navigation, Autoplay]}
        className="mt-16 rounded-xl"
      >
        <SwiperSlide>
          <img className="rounded-xl w-full h-[600px]" src="https://images.unsplash.com/photo-1604413979494-eab8c4d3f68c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="rounded-xl w-full h-[600px]" src="https://images.unsplash.com/photo-1635936207353-b42e232d0e04?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="rounded-xl w-full h-[600px]" src="https://images.unsplash.com/photo-1635936207825-1e49b012f2e4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="rounded-xl w-full h-[600px]" src="https://images.unsplash.com/photo-1646734710313-3e64ba87722e?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </SwiperSlide>
      </Swiper>
      <div className="mt-16">
        <div className="grid grid-cols-2 gap-6">
          <div className="col-span-1">
            <div className="mb-8">
              <span className="text-4xl">Welcome to</span>
              <h2 className="text-5xl font-bold">
                Wadi Rum, Jordan
              </h2>
            </div>
            <p className="mb-4 text-slate-300">
              Bali, Indonesia, is a tropical paradise renowned for breathtaking beaches, vibrant culture, and lush landscapes. Located at the westernmost end of the Lesser Sunda Islands, Bali boasts a warm, tropical climate that is year-round destination visitors are drawn to its picturesque beaches
            </p>
            <p className="mb-8 text-slate-300">
              The island's rich cultural heritage is evident in numerous temples, including the iconic Tanah Lot and Uluwatu Temple, as well as the cultural
            </p>
            <a href="/" className="py-2 px-6 bg-green-btn rounded-2xl flex items-center gap-2 w-fit transition-all duration-300 hover:bg-gold-btn">
              Book Now
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </a>
          </div>
          <div className="col-span-1 bg-slate-400">
            map or image here
          </div>
        </div>
      </div>
    </div>
  )
}

export default TourDetail