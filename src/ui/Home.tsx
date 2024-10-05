import { memo } from "react";
import CardTour from "../features/CardTour";
import { toursList } from "../data/tours";


const Home = memo(() => {
  return (
    <>
      <section className="relative">
        <figure className="flex max-h-[70vh] before:absolute before:bottom-0 before:left-0 before:w-full before:h-1/5 banner-gradiant">
          <img src="/images/aqaba-bg.jpg" alt="aqaba sea" />
        </figure>
        <h1 className="absolute top-1/4 left-1/2 -translate-x-1/2 md:text-6xl text-3xl text-main font-semibold text-center drop-shadow-2xl">
          Discover Jordan's
          <br />
          <span className="text-gold-btn">Treasures</span> with Anas
        </h1>
      </section>
      <section className="pt-12 container mx-auto px-3">
        <h2 className="text-center md:text-3xl text-lg capitalize">
          Explore Popular Destinations
        </h2>
        <div className="mt-7 grid grid-cols-12 gap-6">
          {
            toursList.map(tour => (
              <CardTour key={tour.id} content={tour} />
            ))
          }
        </div>
      </section>
    </>
  );
})

export default Home;